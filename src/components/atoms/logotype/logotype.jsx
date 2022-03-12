import "./logotype.css";
import { Link } from "wouter";
import Logo from "../../../assets/Rick_and_Morty_logo.png"

export default function Logotype() {
  return (
    <Link to="/">
      <img src={Logo} alt="logotype" />
    </Link>
  );
}
