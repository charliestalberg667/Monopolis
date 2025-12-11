// Whise API Integration for Monopolis
// Complete implementation following official Whise API documentation
// Authentication flow: Get authorization token -> Get client token -> Access data

const WHISE_API_BASE = "https://api.whise.eu";
const CLIENT_ID = Number(process.env.WHISE_CLIENT_ID) || 13273; // overridable via env

let authToken = null;
let clientToken = null;
let tokenExpiry = null;
let clientTokenExpiry = null;

// Step 1: Get Authorization Token
async function getAuthorizationToken() {
  const username = process.env.WHISE_USERNAME;
  const password = process.env.WHISE_PASSWORD;

  if (!username || !password) {
    throw new Error(
      "WHISE_USERNAME and WHISE_PASSWORD must be set in environment variables",
    );
  }

  try {
    const response = await fetch(`${WHISE_API_BASE}/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Username: username,
        Password: password,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Authentication failed: ${response.status} ${errorText}`);
    }

    const data = await response.json();

    if (!data.token) {
      throw new Error("No token received from authentication");
    }

    authToken = data.token;
    // Tokens typically expire after 1 hour
    tokenExpiry = Date.now() + 3600 * 1000;

    return authToken;
  } catch (error) {
    console.error("Whise API authentication error:", error);
    throw error;
  }
}

// Step 2: Get Client Token
async function getClientToken() {
  // First ensure we have an authorization token
  if (!authToken || !tokenExpiry || Date.now() >= tokenExpiry) {
    await getAuthorizationToken();
  }

  try {
    const response = await fetch(`${WHISE_API_BASE}/v1/admin/clients/token`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ClientId: CLIENT_ID,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Failed to get client token: ${response.status} ${errorText}`,
      );
    }

    const data = await response.json();

    if (!data.token) {
      throw new Error("No client token received");
    }

    clientToken = data.token;
    clientTokenExpiry = Date.now() + 3600 * 1000;

    return clientToken;
  } catch (error) {
    console.error("Whise API client token error:", error);
    throw error;
  }
}

// Helper function to get a valid client token
async function getValidClientToken() {
  if (!clientToken || !clientTokenExpiry || Date.now() >= clientTokenExpiry) {
    return await getClientToken();
  }
  return clientToken;
}

// Step 3: Fetch Estates with pagination
export async function fetchEstates(params = {}) {
  try {
    const token = await getValidClientToken();
    let allEstates = [];
    const seenIds = new Set();
    let offset = 0;
    const limit = 50; // Fetch in pages of 50
    let hasMore = true;

    // Single-page mode: if caller provides Page.Limit, perform a single request and return it
    if (params && params.Page && typeof params.Page.Limit === 'number') {
      const limit = params.Page.Limit;
      const offsetSingle = (params.Page.Offset ?? 0);
      const { Page, Sort, OrderBy, ...rest } = params;
      const sort = Sort || OrderBy;
      const singleBody = { ...rest, ...(sort ? { Sort: sort } : {}), Page: { Limit: limit, Offset: offsetSingle } };
      const singleUrl = `${WHISE_API_BASE}/v1/estates/list`;

      const doSingleRequest = async (bearer) => {
        const resp = await fetch(singleUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bearer}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(singleBody),
        });
        return resp;
      };

      let response = await doSingleRequest(token);
      if (!response.ok && response.status === 401) {
        // refresh tokens once and retry
        authToken = null;
        clientToken = null;
        const newToken = await getValidClientToken();
        response = await doSingleRequest(newToken);
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch estates: ${response.status}`);
      }
      const data = await response.json();
      return { estates: data.estates || [], totalCount: data.totalCount || 0 };
    }

    while (hasMore) {
      const { Page: _Page, Sort: _Sort, OrderBy: _OrderBy, ...rest } = params;
      const requestParams = { ...rest, Page: { Limit: limit, Offset: offset } };
      const url = `${WHISE_API_BASE}/v1/estates/list`;

      const doRequest = async (bearer) => {
        return await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${bearer}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestParams),
        });
      };

      let response = await doRequest(token);
      if (!response.ok && response.status === 401) {
        // Refresh tokens and retry once
        authToken = null;
        clientToken = null;
        const newToken = await getValidClientToken();
        response = await doRequest(newToken);
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch estates: ${response.status}`);
      }

      const data = await response.json();
      const newEstates = data.estates || [];

      if (newEstates.length === 0) {
        hasMore = false;
      } else {
        const uniqueNewEstates = newEstates.filter(estate => !seenIds.has(estate.id));
        uniqueNewEstates.forEach(estate => seenIds.add(estate.id));
        allEstates.push(...uniqueNewEstates);
        offset += limit;
      }

      // Stop if the total fetched meets or exceeds the total count from the API
      if (data.totalCount && allEstates.length >= data.totalCount) {
        hasMore = false;
      }
    }

    console.log(`Fetched a total of ${allEstates.length} unique properties.`);
    return { estates: allEstates, totalCount: allEstates.length };

  } catch (error) {
    console.error("Whise API fetch estates error:", error);
    throw error;
  }
}

// Upsert Contacts
export async function upsertContact(contactData) {
  try {
    const token = await getValidClientToken();

    const response = await fetch(`${WHISE_API_BASE}/v1/contacts/upsert`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      throw new Error(`Failed to upsert contact: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Whise API upsert contact error:", error);
    throw error;
  }
}

// Export helper functions if needed
export { getAuthorizationToken, getClientToken, getValidClientToken };
