import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ButtonLogout } from "../../shared/Components/ButtonLogout/ButtonLogout";
import { JwtContext } from "../../shared/Context/JwtContext";
import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi';
import { VscChromeClose } from 'react-icons/vsc'


function Navbar() {
  const { jwt } = useContext(JwtContext);
  const [burgerStatus, setBurgerStatus] = useState(false)


  return (
    <>
      <Nav>

        <div className="navbar-general">

          <div className="brand">
            <div className="logo-container">
              <img
                href="/"
                className="img-logo"
                src="https://cdn.discordapp.com/attachments/946038364816162916/965515381236170772/logo.png"
                alt="logo"
              ></img>
            </div>
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

          <CustomMenu onClick={() => setBurgerStatus(true)} />

          <BurgerNav show={burgerStatus}>
            <CloseWrapper>
              <CustomClose onClick={() => setBurgerStatus(false)} />
            </CloseWrapper>
            <li><a href="#">About</a></li>
            <li><a href="#">Preguntas</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Locations</a></li>
          </BurgerNav>

        </div>

      </Nav>
    </>


  );
}

export default Navbar;

const Nav = styled.div`
  .navbar-general{
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;

    .brand{
      .logo-container{
        img{
          width: 100px;
        }
      }
    }

    .button-container{
      width: 100%;
      display:flex;
      align-items: center;
      
      .list-1{
        display: flex;
        list-style:none;
        gap: 2rem;
      }

      .list-2{
        display: flex;
        list-style: none;
      }

    }

    .button-19 {
      appearance: button;
      display: flex;
      text-align: center;
      background-color: #1899D6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      box-sizing: border-box;
      color: #FFFFFF;
      cursor: pointer;
      display: inline-block;
      font-family: din-round,sans-serif;
      letter-spacing: .8px;
      margin: 20px;
      outline: none;
      overflow: visible;
      padding: 10px;
      text-align: center;
      text-transform: uppercase;
      touch-action: manipulation;
      transform: translateZ(0);
      transition: filter .2s;
      user-select: none;
      -webkit-user-select: none;
      vertical-align: middle;
      white-space: nowrap;
      width: 100px;
    }

    .button-19:after {
      background-clip: padding-box;
      background-color: #1CB0F6;
      border: solid transparent;
      border-radius: 16px;
      border-width: 0 0 4px;
      bottom: -4px;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: -1;
    }

    .button-19:main,
    .button-19:focus {
      user-select: auto;
    }
    
    .button-19:hover:not(:disabled) {
      filter: brightness(1.1);
    }
    
    .button-19:disabled {
      cursor: auto;
    }
  }

  @media screen and (min-width: 280px) and (max-width:1080px){


    .button-container{
      display: none;

      ul, li, button, .button-19{
        display: none;
      }
    }
  }

`
const CustomMenu = styled(GiHamburgerMenu)`
  cursor: pointer;
`

const BurgerNav = styled.nav`
  position:fixed;
  top: 0 ;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: white;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;

`

const CustomClose = styled(VscChromeClose)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`



/* <div className="navBar">
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
</div> */