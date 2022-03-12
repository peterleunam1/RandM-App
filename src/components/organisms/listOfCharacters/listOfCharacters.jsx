import { useState, useEffect } from "react";
import getCharacters from "../../../services/getCharacters";
import Character from "../../molecules/character/character";
import "./listOfCharacts.css";
import InfiniteScroll from "react-infinite-scroll-component";


export default function ListOfCharacters() {
  const [character, setCharacter] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(
    function () {
      getCharacters({ page }).then((character) =>
        setCharacter((prevCharacter) => prevCharacter.concat(character))
      );
      console.log("página cargada");
    },
    [page]
  );

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
              key={id + 1} // siempre es necesario debe ser un dato unico, en este caso la id funciona
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
