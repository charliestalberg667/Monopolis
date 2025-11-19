let authToken = null;
let tokenExpiry = null;

async function authenticate() {
  const username = process.env.WHISE_USERNAME;
  const password = process.env.WHISE_PASSWORD;

  if (!username || !password) {
    throw new Error('WHISE_USERNAME and WHISE_PASSWORD must be set in environment variables');
  }

  try {
    const response = await fetch('https://api.whise.eu/WebsiteDesigner.html', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Authentication failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.token) {
      throw new Error('No token received from authentication');
    }

    authToken = data.token;
    tokenExpiry = Date.now() + (data.expiresIn || 3600) * 1000;

    return authToken;
  } catch (error) {
    console.error('Whise API authentication error:', error);
    throw error;
  }
}

async function getValidToken() {
  if (authToken && tokenExpiry && Date.now() < tokenExpiry) {
    return authToken;
  }

  return await authenticate();
}

export async function fetchEstates(params = {}) {
  try {
    const token = await getValidToken();

    const queryString = new URLSearchParams(params).toString();
    const url = `https://api.whise.eu/v1/estates/list${queryString ? `?${queryString}` : ''}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        authToken = null;
        tokenExpiry = null;
        return await fetchEstates(params);
      }
      throw new Error(`Failed to fetch estates: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Whise API fetch estates error:', error);
    throw error;
  }
}

export async function getAuthToken() {
  return await getValidToken();
}
