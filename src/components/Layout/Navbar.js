import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <div className="top_nav">
        <div className="left">
          <a href="/">
            <div className="logo">
              <p>
                <span>Game</span>Store
              </p>
            </div>
          </a>
          <div className="search_bar">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Login">LogIn</a>
            </li>
            <li>
              <a href="/Register">SignUp</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
