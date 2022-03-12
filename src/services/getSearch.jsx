export default function getSearch({ keyword }) {
  const apiUrl = `https://rickandmortyapi.com/api/character/?name=${keyword}`;

  return fetch(apiUrl)
    .then((resp) => resp.json())
    .then((response) => {
      const { results } = response;
      
      if (results){
        return results
      }else{
        return []
      }
    })
}
