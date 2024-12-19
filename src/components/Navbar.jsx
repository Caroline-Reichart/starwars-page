import React from "react";
import { Link } from "react-router-dom";
import "./../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Star Wars App</h1>
      <ul>
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/people">People</Link></li>
        <li><Link className="link" to="/planets">Planets</Link></li>
        <li><Link className="link" to="/films">Films</Link></li>
        <li><Link className="link" to="/starships">Starships</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
