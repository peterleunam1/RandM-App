import { URL_BASE } from "../utils/base_urls";

export default function getSearch({ keyword, page }) {

  const apiUrl = `${URL_BASE}/character/?name=${keyword}&page=${page}`;

  return fetch(apiUrl)
    .then((resp) => resp.json())
    .then((response) => {
      const { results, info } = response;
      
      if (results){
        return {results, info};
      }else{
        return []
      }
    });
}
