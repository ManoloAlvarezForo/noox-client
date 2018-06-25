import { AUTH_TOKEN } from '../constants'

let headers = {"Content-Type": "application/json"};

export function FetcherPost (method, url, params, needSetToken = false) {
    if(needSetToken) {
     setToken();
    }

    return fetch(url, {
      method,
      headers,
      body: JSON.stringify({
        ...params
      }),
    }).then(response => {
      return response.json();
    });
  }

function setToken() {
  const token = localStorage.getItem(AUTH_TOKEN)
  const authorizationHeader = token ? `Bearer ${token}` : null
  headers['authorization'] = authorizationHeader;
}
