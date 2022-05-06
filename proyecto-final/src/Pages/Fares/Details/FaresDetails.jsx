import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from "styled-components";

const FaresDetails = () => {
  const [fares, setFares] = useState([]);
  const { id } = useParams();
  const urlPage = "https://co-working-back.vercel.app/api/fares";

  useEffect(() => {
    axios.get(urlPage).then((response) => {
      setFares(response.data.find((fare) => fare._id === id));

    });
  }, [id]);
  console.log(fares)
  const { name, description, service, coworking, price } = fares;




  return (

    <Header>
      <div className="headerFares">


      </div>
      <div>
        <h1>Tarifas | SPOT AT WORK</h1>
        <p> Conoce nuestra oferta de servicios para empresas, pymes y profesionales autónomos. Consulta nuestras tarifas de coworking, eventos, salas para reuniones, rodajes o convenciones, servicios de consultoría y proyectos, todos a tu disposición y adaptados a tus necesidades.</p>
        <p>
          Te presentamos una variada oferta para que te sumes a la mayor comunidad profesional que trabaja para crear impacto en la sociedad, tejiendo sinergias, sumando talento y aprendizaje para encontrar soluciones hacia una reactivación económica y social sostenible.
        </p>
      </div>
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{price}</p>
        {service && service.map((s)=> {
          return( 
            <h1 style={{color: "green"}}>{s}</h1>
          )
        })}


      </div>
    </Header>
  )

}

const Header = styled.div`

.headerFares{
  margin: 5px 0px;
  width: 100%;
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position:top;
  background-image: url('https://images.unsplash.com/photo-1556565681-67b9cd907d20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
}

`

export default FaresDetails
