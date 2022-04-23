import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ButtonLogout } from "../../shared/Components/ButtonLogout/ButtonLogout";
import { JwtContext } from "../../shared/Context/JwtContext";
import "./navbar.scss";

function Navbar() {
  const [jwt, setJwt] = useState(localStorage.getItem("token"));

  return (
    <div>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <header>
          <div className="navBar">
            <div className="logo-container">
              <img
                className="img-logo"
                src="https://cdn.discordapp.com/attachments/946038364816162916/965515381236170772/logo.png"
                alt="logo"
              ></img>
            </div>
            <div className="button-container">
              <ul className="list-1">
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/faq"><li>FAQ</li></NavLink>
                <NavLink to="/fares"><li>Tarifas</li></NavLink>
                <NavLink to="/locations"><li>Ubicaciones</li></NavLink>
              </ul>
              <ul className="list-2">
                <NavLink to="/login"><li>Login</li></NavLink>
              </ul>
              <span>
                <NavLink to="/register">
                  <button className="button-19">Register</button>
                </NavLink>
              </span>
              {jwt && <ButtonLogout />}
            </div>
          </div>
        </header>
      </JwtContext.Provider>
    </div>
  );
}

export default Navbar;
