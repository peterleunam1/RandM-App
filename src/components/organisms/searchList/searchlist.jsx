import getSearch from "../../../services/getSearch";
import Character from "../../molecules/character/character";
import ListOfCharacters from "../listOfCharacters/listOfCharacters";
import { useState, useEffect } from "react";
import Header from "../../molecules/header/header";

import "./searchList.css";

export default function SearchList({ params }) {
  const { keyword } = params;

  const [search, setSearch] = useState([]);

  useEffect(
    function () {
      getSearch({ keyword, page: 1 }).then((search) => setSearch(search.results));
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
      {
        search.length > 0 ? <ListOfCharacters characters={search} keyword={keyword} /> : notFound()
      }
    </div>
  );
}
