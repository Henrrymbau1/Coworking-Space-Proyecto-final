import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <div>
      <header>
        <div className="navBar">
          <div className="logo-container">
            <img
              src="https://madrid.impacthub.net/wp-content/uploads/2020/03/logo-impact-hub-madrid-negro-peq.png"
              alt="logo"
            ></img>
          </div>
          <div className="button-container">
            <ul className="list-1">
              <li>About</li>
              <li>FAQ</li>
              <li>Tarifas</li>
              <li>Ubicaciones</li>
            </ul>
            <ul className="list-2">
              <li></li>
            </ul>
            <span>
              <button className="button-19">Register</button>
            </span>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
