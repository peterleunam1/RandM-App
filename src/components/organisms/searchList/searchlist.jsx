import getSearch from "../../../services/getSearch";
import Character from "../../molecules/character/character";
import { useState, useEffect } from "react";
import Header from "../../molecules/header/header";

import "./searchList.css";

export default function SearchList({ params }) {
  const { keyword } = params;

  const [search, setSearch] = useState([]);

  useEffect(
    function () {
      getSearch({ keyword }).then((search) => setSearch(search));
    },
    [keyword]
  );
  const notFound = () => {
    return (
      <div className="notFound">
        <h4>Oops!,the character has not been found</h4>
        <img
          src="https://i.giphy.com/media/RH1IFq2GT0Oau8NRWX/giphy.gif"
          alt="notFound"
        />
      </div>
    );
  };
  return (
    <div className="searched">
      <Header text="Resultados" />
      <div className="container">
        {search.length > 0
          ? search.map(
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
            )
          : notFound()}
      </div>
    </div>
  );
}
