export default function getCharacters({ page }) {
  const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

  return fetch(apiUrl)
    .then((resp) => resp.json())
    .then((response) => {
      const { results } = response;

      return results;
    });
}
