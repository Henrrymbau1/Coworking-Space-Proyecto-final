import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const LocationsDetails = () => {
    const [coworkings, setCoworking] = useState([]);
    const { id } = useParams();
    const urlPage = "https://co-working-back.vercel.app/api/coworking";

    useEffect(() => {
        axios.get(urlPage).then((response) => {
            setCoworking(response.data.find((product) => product._id === id));
        });
    }, [id]);

    const {
        name,
        space,
        img,
        description,
        location,
        capacity,
        category,
    } = coworkings;
    console.log(coworkings);

    //----> FormJS
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_62cmprg",
                "template_va2ibko",
                form.current,
                "bnQweKR5uLmYM447e"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        form.current.reset();
    };

    return (
        <>

            <div className="form-container">
                <h2>Suscribete a nuestra newsletter</h2>
                <form className="form-container2" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input placeholder="Tu nombre" type="text" name="name" />
                    <label>Email</label>
                    <input placeholder="Email" type="email" name="email" />
                    <label>Informacion</label>
                    <textarea name="message" />
                    <button id="btn-footer-enviar">Enviar</button>
                </form>
            </div>

            <Container>
                <div className="infoContainer">
                    <div >
                        <img className="imgContainer" src={img} alt={name} />
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
    );
};

export default LocationsDetails;

const Container = styled.div`
  .infoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
  }

  .imgContainer{
      width:100%;
  }
`;
