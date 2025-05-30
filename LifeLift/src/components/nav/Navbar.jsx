import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        LifeLIft
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>

        <li>
          <NavLink to="/doctor">Doctor</NavLink>
        </li>
        <li>
          <NavLink to="/patient">Patient</NavLink>
        </li>
                <li>
          <NavLink to="/s">S</NavLink>
        </li>
      </ul>
    </nav>
  );
};