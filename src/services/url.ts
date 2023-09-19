import { API_URL, PROXY_URL } from '../constants';

export const getURL = (path: string) => {
  const apiURL = `${API_URL}${path}`;
  return PROXY_URL ?
    `${PROXY_URL}${encodeURIComponent(apiURL)}` :
    apiURL;
};
