import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ButtonLogout } from "../../shared/Components/ButtonLogout/ButtonLogout";
import { JwtContext } from "../../shared/Context/JwtContext";
import "./navbar.scss";

function Navbar() {
  const { jwt } = useContext(JwtContext);
  


  return (
    <>
          <div className="navBar">
            <div className="logo-container">
              <img
                href="/"
                className="img-logo"
                src="https://cdn.discordapp.com/attachments/946038364816162916/965515381236170772/logo.png"
                alt="logo"
              ></img>
            </div>
            <div className="button-container">
            {jwt && (
              <ul className="list-1">
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/faq"><li>FAQ</li></NavLink>
                <NavLink to="/fares"><li>Tarifas</li></NavLink>
                <NavLink to="/locations"><li>Ubicaciones</li></NavLink>
              </ul>)}
              {!jwt && (<>
              <ul className="list-2">
                <NavLink to="/login"><li>Login</li></NavLink>
              </ul>
             
                <NavLink to="/register">
                  <button className="button-19">Register</button>
                </NavLink>
              
              </>)}
              {jwt && <ButtonLogout />}
            </div>
          </div>
          </>

        
  );
}

export default Navbar;
