import "./logotype.css";
import { Link } from "wouter";

export default function Logotype() {
  return (
    <Link to="/">
      <img src="/src/assets/Rick_and_Morty_logo.png" alt="logotype" />
    </Link>
  );
}
