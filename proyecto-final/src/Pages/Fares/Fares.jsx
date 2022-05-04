import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
export const Fares = () => {
  const [fares, setFares] = useState([]);
  const url = "https://co-working-back.vercel.app/api/fares"

  useEffect(() => {
    axios.get(url).then((response) => {
      setFares(response.data);
    });
  }, [url]);

  return (
    <>
      <ContainerFares>
        {
          fares.map((fare) => {
            return (
              <div className="cardFares">
                <div className="faresCard">
                  <div className="faresDescription">
                    <h1 className="name">{fare.name}</h1>
                    <p className="description"> {fare.description}</p>
                    <p className="service"> {fare.service}</p>
                    <p className="price"> {fare.price} €</p>
                  </div>

                  {fare.coworking.map((cowork) => {
                    return (
                      <div className="coworkImg" style={{ backgroundImage: `url(${cowork.img})` }}>

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
}
.description{
  width: 90%;
  font-size: 20px;
  margin: 0;
}
.service{
  font-size: 18px;
  margin: 10px 0;
  
}
.price{
  font-size: 28px;
  font-family: 'Anton', sans-serif;
  margin: 0 auto;
}

.coworkImg{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
}

`
