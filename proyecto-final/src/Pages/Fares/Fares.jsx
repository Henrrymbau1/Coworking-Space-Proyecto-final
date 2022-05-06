import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom"
export const Fares = () => {
  const [fares, setFares] = useState([]);
  const url = "https://co-working-back.vercel.app/api/fares";
  useEffect(() => {
    axios.get(url).then((response) => {
      setFares(response.data);
    });
  }, [url]);

  return (
    <>
      <ContainerService>
        <div className="service">
          <div className="servicesIntro">
            <h1 className="textServices">Tarifas y Servicios </h1>

          </div>
          <div className='servicesForm'>
            <form className="form" action="">
              <h2 class="title-form">Solicita información sobre las tarifas.</h2>
              <div class="contact">
                <input className="inputClass" type="text" placeholder="Tu nombre" />
                <input className="inputClass" type="text" placeholder="E-mail" />
                <input className="inputClass" type="text" placeholder="Teléfono" />
              </div>
              <p className="pClass">
                SPOT AT WORK tratará tus datos únicamente para tramitar tu
                solicitud. Puedes conocer cómo ejercer tus derechos de acceso,
                rectificación y supresión en nuestra Política de Privacidad.
              </p>
            </form>
          </div>

        </div>

      </ContainerService>

      <ContainerFares>
      
        <div>
                <h1 className="title">Tarifas | SPOT AT WORK</h1>
                <p className="parrafo"> Conoce nuestra oferta de servicios para empresas, pymes y profesionales autónomos. Consulta nuestras tarifas de coworking, eventos, salas para reuniones, rodajes o convenciones, servicios de consultoría y proyectos, todos a tu disposición y adaptados a tus necesidades.</p>
                <p className="parrafo">
                Te presentamos una variada oferta para que te sumes a la mayor comunidad profesional que trabaja para crear impacto en la sociedad, tejiendo sinergias, sumando talento y aprendizaje para encontrar soluciones hacia una reactivación económica y social sostenible.
                </p>
      </div>


        {
          fares.map((fare) => {
            return (
              <div className="cardFares">
                <div className="faresCard">
                  <div className="faresDescription">
                    <h1 className="name">{fare.name}</h1>
                    <p className="description"> {fare.description}</p>
                    <p className="service">Servicios incluidos:</p>
                    <div className="serviceInclude">
                    {fare.service.map((s) => {
                      return (
                         
                        <p className="serviceList"> | { s } | </p>
                        )
                    }

                    )}</div>
                    <p className="price"> Desde {fare.price} €</p>
                    <Link to={`/fares/${fare._id}`}><button className='btn'>Ver detalles</button></Link>
                  </div>

                  {fare.coworking.map((cowork) => {
                    return (
                      <div className="coworkImg" style={{ backgroundImage: `url(${cowork.img})` }}>
                        <div className="textCowork">
                          <h1 className="nameCowork">{cowork.name}</h1>
                          <h2 className="location"> {cowork.location}</h2>
                          <h3 className="space"> Espacio disponible {cowork.space} m²</h3>
                          <h3 className="capacity"> Capacidad para {cowork.capacity}</h3>
                          <h3 className="category"> {cowork.category}</h3>
                        </div>
                      </div>
                    )
                  })}
                  
                </div>
              </div>
            )
          })
        }

      </ContainerFares>
    </>
  )
}
const ContainerService = styled.div`
display:flex;
flex-direction: row;
width: 100%;
height: 400px;

.service{
  display:flex;
  width: 100%;
  
}
.form{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.servicesIntro {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1503945438517-f65904a52ce6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
}
.textServices{
  color: white;
  margin: 0 auto;
  align-items: center;
  width: 80%;
  justify-items: center;
  font-size: 65px;
}

`


const ContainerFares = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

display: flex;
width: 100%;
justify-content: center;
flex-direction: column;



.cardFares{
  width:100%;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  
}
.faresCard{
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
}
.faresDescription{
  width: 100%;
  height: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(246,180,1);
}
.name{
  font-size: 26px;
  color: white;
  font-family: 'Merriweather', serif;
  
}
.containBtn{
  display: flex;
  width: 100%;
  justify-content:space-around;

}
.btn{
  display: flex;
  background-color: Transparent;
  border-radius: 5px;
  width: 60px;
  color: white;
  width: 30%;
  text-align: center;
  margin: 5px auto;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.7px;
}
.btn:hover {
 
  animation: bn54rotate 0.7s ease-in-out both;
    background-color:#f4c973;
}

.description{
  width: 95%;
  font-size: 21px;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  color: white;
  text-align:justify;
}
.service{
  font-size: 18px;
  margin: 10px 0;
  color: white;
}
.serviceList{
  margin: 0px;
  font-size: 18px;
  color: white;
}
.serviceInclude{
  display: flex;
  flex-direction: row;
  width: 400px;
}
.price{
  font-size: 28px;
  font-family: 'Anton', sans-serif;
  margin: 0 auto;
  color:#CA6F1E; 
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.coworkImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
.textCowork{
  display: flex;
  background-color: rgba(0, 0, 5, 0.4);
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width:100%;
  height:100%;
}
.nameCowork{
  font-size: 35px;
  color:#EB984E; 
  text-shadow: -2px 3px #000000;

}
.space{
  font-size:18px;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;
}
.location{ font-size:13;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;}
.capacity{ font-size:10;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;}
.category{ font-size:11;
  margin: 0px;
  color:#FDF2E9;
  text-shadow: -2px 3px #000000;}

@media (max-width: 600px){
  .faresCard{
  flex-direction: column;
  max-width:100%;
  }
  .faresDescription{
  width: 100%;
  height: 190px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: rgb(246,180,1);
}
.coworkImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 420px;
  height: 250px;
  background-size: cover;
    background-repeat: no-repeat;
}
.name{
  font-size: 18px;
}
.description{
  width: 95%;
  text-align: justify;
  font-size: 13px;
  margin: 0;
}
.service{
  font-size: 11px;
  margin: 10px 0;
}
.price{
  font-size: 15px;
  font-family: 'Anton', sans-serif;
  
}
.nameCowork{
  font-size: 24px;
}
}


`
