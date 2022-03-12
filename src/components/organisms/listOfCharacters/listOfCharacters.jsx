import { useState, useEffect } from "react";
import getCharacters from "../../../services/getCharacters";
import Character from "../../molecules/character/character";
import "./listOfCharacts.css";
import InfiniteScroll from "react-infinite-scroll-component";
import getSearch from "../../../services/getSearch";


export default function ListOfCharacters({ characters = [], keyword = "" }) {
  const [character, setCharacter] = useState(characters);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (characters.length === 0) {
      getCharacters({ page }).then((character) => {
        if(character) setCharacter((prevCharacter) => prevCharacter.concat(character))
      });
    } else if (page > 1) {
      console.log(page);
      getSearch({ keyword, page }).then((search) => {
        if (page > search.info.pages + 1) {
          setPage(1);
          return;
        }
        if(search.results) setCharacter((prevCharacter) => prevCharacter.concat(search.results))
      })
    }
    console.log("página cargada");
  }, [page]);

  useEffect(() => {
    setCharacter(characters);
    setPage(1);
  }, characters)

  const loader = () => {
    return <h4>Loading...</h4>;
  };

  return (
    <InfiniteScroll
      dataLength={character}
      next={() => setPage((prev) => prev + 1)}
      hasMore={true}
      loader={loader()}
    >
      <div className="container">
        {character.map(
          ({
            id,
            name,
            image,
            status,
            species,
            gender,
            origin,
            type,
            location,
          }) => (
            <Character
              key={id} // siempre es necesario debe ser un dato unico, en este caso la id funciona
              name={name}
              url={image}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              type={type}
              location={location.name}
            />
          )
        )}
      </div>
    </InfiniteScroll>
  );
}
