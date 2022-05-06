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

          <div className="form-text">
            <p>Spot at work tratara tus datos unicamente para tramitar tu solicitud. Puedes conocer como ejercer tus derechos de acceso, rectificacion y supresion en nuestra Politica de Privacidad</p>
            <div className="checkbox-text">
              <input type="checkbox" />
              <span className="text-footer">Recibir noticias e invitaciones a eventos de Spot at work</span>
            </div>
            <div className="checkbox-text">
              <input type="checkbox" />
              <span className="text-footer">Recibir comunicaciones comerciales que puedan ser de mi interes</span>
            </div>
            <button>Me interesa</button>
          </div>

        </div>
      </InformationContainer>

      <Impulso>

        <div className="texto-impulso">
          <h2>Spot at work</h2>
          <h1>Impulso al Emprendimiento</h1>
          <p>Fomentamos una cultura emprendedora mediante procesos de innovacion abierta, metodologias de diseno estrategico e iniciativas para el desarrollo de habilidades, ideas y experiencias con impacto positivo</p>
        </div>

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
            <p>Contamos con una solida metodologia y experiencia ayudando a grandes y pequenas corporaciones a desarrollar programas con proposito de impacto positivo desarrollada desde el ano</p>
            <h2>2010</h2>
            <p>tanto a nivel local como a nivel regional a traves de nuestra red.</p>
          </div>
          <div className='vox'>
            <p>Colaboramos con multitud de stakeholders y participamos activamente en redes y alianzas que promueven el desarrollo sostenible y la economia de impacto. El </p>
            <h2>85%</h2>
            <p>de nuestros miembros aborda los ODS en su trabajo</p>
          </div>
          <div className='vox'>
            <p>Somos expertos en dinamizar comunidades y resolver retos complejos, articulando conversaciones valiosas y creando vinculos. El </p>
            <h2>83%</h2>
            <p>de los miembros confia en la comunidad de Spot at Work</p>
          </div>
        </div>

      </Porque>
    </>
  )
}

//Detalle px hamburger

const InformationContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  
  .logo-container{
    background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');
    background-repeat: no-repeat;
    background-size: cover;
    width: 60%;

    h1{
      max-width: 675px;
      position: relative;
      top: 40px; left: 40px;
      font-size: 70px;
    }
  }

  .form-container{
    background-color: #F6B401;
    padding-left: 30px;
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
      max-width: 320px;
    }

    .inputs-container{
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      
      input{
        width: 294px;
        border: 1px solid;
        border-color: white;
        background-color: transparent;
        ::placeholder { color: white; }
      }

      }

      .form-text{
        p{
          max-width: 320px;
        }
        .checkbox-text{
          max-width: 320px;
          .text-footer{
            max-width: 320px;
          }
        }

        button{
          position: relative;
          top: 20px;
          padding: 5px 15px 5px 15px;
          border: 2px solid;
          background-color: transparent;
          border-color: white;
          color: white;
          cursor: pointer;
        }
    }

  }

  @media screen and (min-width: 280px) and (max-width:1023px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    .logo-container{
      width: 100%;
      height: 559px;

      justify-content: center;
      align-items: center;
      margin: 0;
    
      h1{
        position: relative;
        top: 0; left: 0;
        padding: 0;
        margin: 0;
        font-size: 30px;
      }
    }

    .form-container{
      h2{
        text-align: center;
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      background-color: #F6B401;
      padding: 0 0 50px;
    }
  
  }

`

const Impulso = styled.div`
  position: relative;
  padding-left: 60px;

  .texto-impulso{
    p{
      max-width: 1100px;
    }
  }

  .general-container{
    padding-right: 80px;


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

  @media screen and (min-width: 280px) and (max-width:1023px){
    width: 100%;
    height: 100%;
    padding: 0;
    text-align: center;
    .texto-impulso{
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        width: 70%;
      }
    }

    .general-container{
      display: flex;
      flex-direction: column;
      padding: 0;


      .double-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .card{
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;

          p{
            max-width: 80%;
          }
        }
      }
    }

  }
  
`

const Porque = styled.div`
  position: relative;
  text-align: center;

  .box-container{
    display: flex;
    justify-content: center;
    gap: 3px;
    padding-bottom: 40px;

    .vox{
      width: 314px;
      height: 400px;
      background-color: #CDCCCD;

      h2{
        position: relative;
        left: 40px; top:10px;
        text-align: left; 
      }

      p{
        position: relative;
        left: 40px; top:10px;
        max-width: 250px;
        text-align: left;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width:1023px){

    .box-container{
      max-width: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;

      .vox{
        display: flex;
        flex-direction: column;
        align-items: center;

        h2{
        position: relative;
        left: 0; top:0;
        text-align: left;

        p{
          position: relative;
          left: 0; top:0;
        }
      }
    }
  }
`

