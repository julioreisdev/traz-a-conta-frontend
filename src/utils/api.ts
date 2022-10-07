import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.REACT_APP_API}`,
});

export function getHeaders() {
  const token = localStorage.getItem("tac_token");
  const config = { Authorization: `Bearer ${token}` };

  return config;
}

export async function fetcher(url: string) {
  return api
    .get(url, {
      headers: getHeaders(),
    })
    .then((res) => res.data)
    .catch((err) => {
      return err;
    });
}
