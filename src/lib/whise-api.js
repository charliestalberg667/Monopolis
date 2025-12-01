// Whise API Integration for Monopolis
// Complete implementation following official Whise API documentation
// Authentication flow: Get authorization token -> Get client token -> Access data

const WHISE_API_BASE = "https://api.whise.eu";
const CLIENT_ID = 13273; // MPH Monopolis Real Estate

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

// Step 3: Fetch Estates
export async function fetchEstates(params = {}) {
  try {
    const token = await getValidClientToken();

    // Build query string if params provided
    const queryParams = new URLSearchParams();
    if (params.status) queryParams.append("status", params.status);
    if (params.limit) queryParams.append("limit", params.limit);

    const queryString = queryParams.toString();
    const url = `${WHISE_API_BASE}/v1/estates/list${queryString ? `?${queryString}` : ""}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      // If token expired (401), reset and try once more
      if (response.status === 401) {
        authToken = null;
        clientToken = null;
        const newToken = await getValidClientToken();

        const retryResponse = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${newToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(params),
        });

        if (!retryResponse.ok) {
          throw new Error(`Failed to fetch estates: ${retryResponse.status}`);
        }

        return await retryResponse.json();
      }

      throw new Error(`Failed to fetch estates: ${response.status}`);
    }

    const data = await response.json();
    return data;
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
