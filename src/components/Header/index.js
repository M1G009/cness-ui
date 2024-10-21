import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/social">Social</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
