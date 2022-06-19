import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#0f171e" }}>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/watch">Movie Watchlist</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/watch">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="btn">
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
