import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
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

const { name, description } = fares;
    console.log(name);
  return (

    <>
       <h3>holaaa</h3>
 </>
  )

}

export default FaresDetails
