import React from 'react'
import "./about.scss";
import styled from "styled-components";


export const About = () => {
  return (
    <>
      <InformationContainer>
        <div className="logo-container">
          <h1>Servicios Impulso al Emprendimiento</h1>
        </div>

        <div className="form-container">

          <h2> Pide informacion sin compromiso</h2>
          <div className="inputs-container">
            <input placeholder="Tu nombre" type="text" className="form-control" />
            <input placeholder="Email" type="text" className="form-control" />
            <input placeholder="Telefono" type="text" className="form-control" />
          </div>

          <p>Spot at work tratara tus datos unicamente para tramitar tu solicitud. Puedes conocer como ejercer tus derechos de acceso, rectificacion y supresion en nuestra Politica de Privacidad</p>
          <div className="checkbox-text">
            <input type="checkbox" />
            <span className="text-footer">Recibir noticias e invitaciones a eventos de Spot at work</span>
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <span className="text-footer">Recibir comunicaciones comerciales que puedan ser de mi interes</span>
          </div>
          <button>Me interesa</button>

        </div>
      </InformationContainer>

      <Impulso>
        <h2>Spot at work</h2>
        <h1>Impulso al Emprendimiento</h1>
        <p>Fomentamos una cultura emprendedora mediante procesos de innovacion abierta, metodologias de diseno estrategico e iniciativas para el desarrollo de habilidades, ideas y experiencias con impacto positivo</p>

        <div className="general-container">
          <div className="double-container">
            <div className="card">
              <img src="https://madrid.impacthub.net/wp-content/uploads/2021/12/emprendimiento-01.svg" alt="imgen" />
              <h3>Hackathons y procesos Creatiavos</h3>
              <p>Disenamos y facilitamos procesos creativos para el desarrollo de competencias innovadoras y emprendedoras</p>
            </div>
            <div className="card">
              <img src="https://madrid.impacthub.net/wp-content/uploads/2021/12/emprendimiento-02.svg" alt="imgen" />
              <h3>Programas de emprendimiento</h3>
              <p>Planificamos y ejecutamos programas de impulso al emprendimiento de diferentes colectivos apoyandonos en nuestro red internacional</p>
            </div>
          </div>
          <div className="double-container">
            <div className="card">
              <img src="https://madrid.impacthub.net/wp-content/uploads/2021/12/emprendimiento-03.svg" alt="imgen" />
              <h3>Incubacion de start ups</h3>
              <p>Disenamos y facilitamos procesos creativos para el desarrollo de competencias innovadoras y emprendedoras</p>
            </div>
            <div className="card">
              <img src="https://madrid.impacthub.net/wp-content/uploads/2021/12/emprendimiento-04.svg" alt="imgen" />
              <h3>Acelaracion de StartUps</h3>
              <p>Planificamos y ejecutamos programas de impulso al emprendimiento de diferentes colectivos apoyandonos en nuestro red internacional</p>
            </div>
          </div>
        </div>
      </Impulso>

      <Porque>
        <h1>Por que Spot at Work</h1>
        <div className='box-container'>
          <div className='vox'>
            <p>lorem ipsum</p>
            <h2>2010</h2>
            <p>Lorem ipsum</p>
          </div>
          <div className='vox'>
            <p>lorem ipsum</p>
            <h2>2010</h2>
            <p>Lorem ipsum</p>
          </div>
          <div className='vox'>
            <p>lorem ipsum</p>
            <h2>2010</h2>
            <p>Lorem ipsum</p>
          </div>
        </div>

      </Porque>
    </>
  )
}


const InformationContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  
  .logo-container{
    background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
    background-repeat: no-repeat;
    background-size: cover;
    width: 675px;

    h1{

      position: relative;
      top: 40px; left: 40px;
      font-size: 70px;
    }
  }

  .form-container{
    background-color: #F6B401;

    .inputs-container{
      display: flex;
      flex-direction: column;
      
      input{
        width: 294px;
      }
    }

  }

`

const Impulso = styled.div`
  position: relative;


  .general-container{

    .double-container{
      display: flex;
      flex-direction: row;
      justify-content: center;
      justify-content: space-evenly;
      text-align: center;

      .card{
        p{
          width: 400px;
        }
      }
    }

  }
  
`

const Porque = styled.div`
  position: relative;
  

  align-items: center;

  .box-container{
    display: flex;
    justify-content: center;
    .vox{
      width: 314px;
      height: 449px;
      background-color: #CDCCCD;
      text-align: center;
    }
  }
`