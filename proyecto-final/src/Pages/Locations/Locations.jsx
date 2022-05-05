import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { NavLink } from "react-router-dom";



export const Locations = () => {
  const [coworkings, setCoworking] = useState([]);

  const urlPage = "https://co-working-back.vercel.app/api/coworking"

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setCoworking(response.data);
    });
  }, [urlPage]);


  return (<>
    <h1 className="locationTitle">Ubicaciones</h1>
    <Container>
      <div className="infoContainer">
        {coworkings.map((coworking) => {

          return (

            <div className="cardContainer">


              <div className="coworkCard">

                <div className="coworkImg" style={{ backgroundImage: `url(${coworking.img})` }}>

                  <div className="frontText">
                    <div className="coworkSubtitle">
                      <h2 className="h2Spot">Spot at Work | Coworking</h2>
                      <h2 className="h2Class">{coworking.name}</h2>
                    </div>
                    <p className="spaceText">Capacidad: {coworking.space} m²</p>
                    <p className="locationText">Ubicacion: {coworking.location}</p>
                  </div>
                </div>

                <div className="coworkInfo">
                  <h3 className="coworkTitle">Spot at Work</h3>
                  <h1 className="h1Title">{coworking.name}</h1>
                  <p>{coworking.description}</p>
                </div>
                <NavLink to={`/locations/${coworking._id}`}><button className="bn54">
                  <span class="bn54span">Ver mas Info</span>
                </button></NavLink>

              </div>

            </div>

          )
        })}
      </div>
    </Container>


  </>

  )
}

const Container = styled.div`

.infoContainer{
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.cardContainer{
  width:320px;
  padding:20px;
}

.coworkCard{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction:row;
    flex-wrap: wrap; 
  }

  .coworkImg{
    width: 320px;
    height: 330px;
    background-repeat: no-repeat;
    
   

    .frontText{
      background-color: rgba(0, 0, 0, 0.5);
        width: 320px;
        height: 330px;
        margin:0;
        text-align:center;
        justify-content:space-evenly;
        display:flex;
        flex-direction:column;


      .h2Class{
        color: rgb(255, 164, 53);
        font-family: "Josefin Sans", sans-serif;
        text-shadow: -4px 3px #000000;
        font-size:40px;
        margin:0;
        padding:5px;
      }
        

      .locationText{
          margin:0;
          color: #F9B46F;
          font-family: "Josefin Sans", sans-serif;
          text-shadow: -4px 3px #000000;
          font-size:23px;
          padding:10px
        
      }

      .spaceText{
          color: #F9B46F;
          text-shadow: -4px 3px #000000;
          font-size:23px; 
          margin:0;
      }

      .h1Title{
        color: #F9B46F;
      }

      .h2Spot{
        color: white;
        font-size: 20px;
        letter-spacing:1px;
      }

    }
  }
  .coworkTitle{
    color:#f78a3c;
    letter-spacing:1px;
  }

  .bn54 {
    position: relative;
    outline: none;
    text-decoration: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 30px;
    width: 120px;
    opacity: 1;
    background-color: #F68B3C;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
  
  .bn54 .bn54span {
    color: #000000;
    font-size: 13px;
    font-weight: 15px;
    letter-spacing: 0.7px;
  }
  
  .bn54:hover {
    animation: bn54rotate 0.7s ease-in-out both;
    background-color:#f4a973;
  }
  
  .bn54:hover .bn54span {
    animation: bn54storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }
  
  @keyframes bn54rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  
  @keyframes bn54storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }


`
