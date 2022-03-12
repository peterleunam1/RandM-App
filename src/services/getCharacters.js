import { URL_BASE } from "../utils/base_urls";

export default function getCharacters({ page }) {

  const apiUrl = `${URL_BASE}/character/?page=${page}`;

  return fetch(apiUrl)
    .then((resp) => resp.json())
    .then((response) => {
      const { results } = response;

      return results;
    });
}
