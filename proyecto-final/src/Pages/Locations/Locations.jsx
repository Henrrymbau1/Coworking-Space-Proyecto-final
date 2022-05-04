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

  return (
    <ContainerLocation>

      {coworkings.map((coworking) => {
        return (
          <Coworking>
            <DescriptionCowork>
              <h1>{coworking.name}</h1>
              <p>{coworking.description}</p>
              <p>{coworking.space}</p>
              <p>{coworking.location}</p>
            </DescriptionCowork>
            <Image>
              <img src={coworking.img} alt={coworking.name} />
            </Image>

          </Coworking>
        )
      })}


    </ContainerLocation>
  )
}

const ContainerLocation = styled.div`
  display: flex;
  width: 100%;
`
const DescriptionCowork = styled.div
  `
display: flex;
flex-direction: column;
`
const Coworking = styled.div
  `
display: flex;
width: 100%;
flex-direction:row;

img{
  width: 100%;
}

`
const Image = styled.div`
display: flex;
width: 100%;

`
