import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

const LocationsDetails = () => {
    const [coworkings, setCoworking] = useState([]);
    const { id } = useParams()
    const urlPage = "https://co-working-back.vercel.app/api/coworking"

    useEffect(() => {
        axios.get(urlPage).then((response) => {
            setCoworking(response.data.find((product) => product._id === id));
        });
    }, [id]);

    const { name, space, img, description, location, _id } = coworkings;
    console.log(coworkings)







    return (
        <div>
            <h1>{name}</h1>
            <p>{space}</p>
            <img src={img} alt={name} />
            <p>{description}</p>
        </div>
    )
}

export default LocationsDetails