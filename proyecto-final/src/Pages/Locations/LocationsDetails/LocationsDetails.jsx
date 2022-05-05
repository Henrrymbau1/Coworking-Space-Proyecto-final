import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const LocationsDetails = () => {
    const [coworkings, setCoworking] = useState([]);
    const { id } = useParams()
    const urlPage = "https://co-working-back.vercel.app/api/coworking"

    useEffect(() => {
        axios.get(urlPage).then((response) => {
            setCoworking(response.data.find((product) => product._id === id));
        });
    }, [id]);

    const { name, space, img, description, location, capacity, category, } = coworkings;
    console.log(coworkings)







    return (
        <>
            <Container>
                <div className="infoContainer">
                    <div className="imgContainer">
                        <img src={img} alt={name} />
                    </div>
                    <div className="titleContainer">
                        <h3>{name}</h3>
                    </div>
                    <div className="subInfo">
                        <p>{space}</p>
                        <p>{location}</p>
                        <p>{capacity}</p>
                        <p>{category}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </Container>
        </>
    )
}



export default LocationsDetails

const Container = styled.div`

.infoContainer{
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align: center;
    width: 80%
}


    
    `