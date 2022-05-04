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
              <h3 className="coworkTitle">Spot at Work</h3>

              <div className="coworkCard">

                <div className="coworkImg" style={{ backgroundImage: `url(${coworking.img})` }}>

                  <div className="frontText">
                    <p className="spaceText">{coworking.space}</p>
                    <p className="locationText">{coworking.location}</p>
                  </div>
                </div>

                <div className="coworkInfo">
                  <h1>{coworking.name}</h1>
                  <p>{coworking.description}</p>
                </div>

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
      background-color: rgba(0, 0, 5, 0.3);
        width: 320px;
        height: 330px;
        margin:0;
        text-align:center;
        justify-content:center;

      .locationText{
        margin:0;
      }
      .spaceText{
        margin:0;
      }

    }
  }
`
