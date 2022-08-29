import React, { useState, useEffect } from "react";
import "./style.css";

import { FaBars } from "react-icons/fa";

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items">
            <a href="/">Home</a>
          </li>
          <li className="items">
            <a href="/about">About</a>
          </li>
          <li className="items">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      )}

      <button onClick={toggleNav} className="nav-btn">
        <FaBars />
      </button>
    </nav>
  );
}
