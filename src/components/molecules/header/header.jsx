import Name from "../../atoms/name/name";
import Logotype from "../../atoms/logotype/logotype";
import "./header.css";
import { Link, useLocation } from "wouter";
import { useState } from "react";

export default function Header({ text = "" }) {
  const [keyword, setkeyword] = useState("");
  const [,pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setkeyword(evt.target.value);
  };
  return (
    <div className="header">
      <Name name="To my friends with so much love" />
      <div className="logotype">
        <Logotype />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className="inputField"
          type="text"
          placeholder="search a character here... "
        />
      </form>
      <strong className="result">{text}</strong>
    </div>
  );
}
