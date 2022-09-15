import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <nav className="navbar sticky-top navbar-light bg-light">
        <div className="bottom_nav">
          <ul>
            <li>
              <a href="#">PC</a>
            </li>
            <li>
              <a href="#">PlayStation</a>
            </li>
            <li>
              <a href="#">Xbox</a>
            </li>
            <li>
              <a href="#">Nintendo</a>
            </li>
            <li>
              <a href="#">Sega</a>
            </li>
            <li>
              <a href="#">Mobile</a>
            </li>
            <li>
              <a href="#">VR</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="banner">
        <img
          src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwii/MWII-000-ARTREVEAL-TOUT.jpg"
          alt="banner_img"
        />
      </div>
    </div>
  );
}
export default Home;
