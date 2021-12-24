const API_BASE_URL = "http://localhost:4000";

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Access-Control-Allow-Origin", "*");


export async function fetchJson(url, options, onCancel){
  try {
    const response = await fetch(url);
    if (response.status === 204) return null;

    const payload = await response.json();
  
    if (payload.error){
      return Promise.reject({message: payload.error});
    }
  
    return payload.data;

  }catch(err){
    return Promise.reject({message: err})
  }
}

export async function listFriends(params={}, signal){
  const url = new URL(`${API_BASE_URL}/friends`);

  return await fetchJson(url, {headers, signal}, []);
}