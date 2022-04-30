import React from "react";
import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from "react-icons/bs";
import { useState } from 'react';
import "./faq.scss";

export default function Faq() {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(0);

  console.log(number);
  const showFaq = () => {
    setShow((show) => !show)

  }

  return (

    <div class="container">
      <div className="container-faq">
        <div className="faq">
          <h1>
            Potenciamos el trabajo colaborativo y generamos ecosistemas
            profesionales.
          </h1>
        </div>
        <div class="form-faq">
          <form action="">
            <h2>Solicita información sobre nuestros servicios.</h2>
            <div class="contact">
              <input type="text" placeholder="Tu nombre" />
              <input type="text" placeholder="E-mail" />
              <input type="text" placeholder="Teléfono" />
            </div>
            <p>
              SPOT AT WORK tratará tus datos únicamente para tramitar tu
              solicitud. Puedes conocer cómo ejercer tus derechos de acceso,
              rectificación y supresión en nuestra Política de Privacidad
            </p>
          </form>
        </div>
      </div>

      <div class="container-main">
        <h2 class="subtitle-faq">SPOT AP WORK</h2>
        <h1 class="title-faq">Proyectos y misión </h1>
        <p>
          Los retos urgentes sociales y medioambientales a los que nos
          enfrentamos exigen que las empresas y organizaciones adopten un
          compromiso de actuación para impulsar una reactivación sostenible.</p>
        <p>
          Para poner en marcha estos cambios necesarios necesitamos nuevas ideas
          de negocio, transformar el tejido empresarial y cambiar nuestros
          hábitos y comportamientos. </p>

        <p>Todo ello desde ecosistemas vivos donde la
          colaboración sea la base. Desde nuestra experiencia a nivel global en
          los últimos 15 años, Impact Hub ofrece diferentes servicios para
          acompañar a empresas, organizaciones y administraciones en su camino
          para alcanzar los objetivos de la Agenda 2030. </p>

      </div>

      {/* box para servicios */}

      <div>
        <div class="box-servicios">
          <h1>Servicios Coworking </h1>
          <h3>Buscando nuevas ideas</h3>
        </div>
        <div class="box-servicios-img">
          <div class="box">
            <img src="./assets/services1.jpg" alt="coworking" />
            <p>Todo ello desde ecosistemas vivos donde la colaboración sea la base. Desde nuestra experiencia a nivel global en los últimos 15 años, Impact Hub ofrece diferentes servicios para acompañar a empresas.</p>

          </div>
          <div class="box">
            <img src="./assets/services2.jpg" alt="coworking" />
            <p>Todo ello desde ecosistemas vivos donde la colaboración sea la base. Desde nuestra experiencia a nivel global en los últimos 15 años, Impact Hub ofrece diferentes servicios para acompañar a empresas.</p>
          </div>
          <div class="box">
            <img src="./assets/services3.jpg" alt="coworking" />
            <p>Todo ello desde ecosistemas vivos donde la colaboración sea la base. Desde nuestra experiencia a nivel global en los últimos 15 años, Impact Hub ofrece diferentes servicios para acompañar a empresas.</p>
          </div>
        </div>
      </div>
      {/* box para servicios */}

      {/* preguntas frecuentes */}
      <div class="box-servicios">
        <h1>Preguntas frecuentes</h1>
        <h3>Respondemos todas sus consultas</h3>
      </div>
      <div class="container-main-query">
        <div class="box-query">
          <p>¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>
          {number !== 1 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(1)} /> : number === 1 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
        </div>
        {number === 1 &&
          <div ><p>A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}

        <div class="box-query">
          <p>¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>
          {number !== 2 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(2)} /> : number === 2 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
        </div>

        {number === 2 &&
          <div ><p>A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}

        <div class="box-query">
          <p>¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>
          {number !== 3 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(3)} /> : number === 3 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
        </div>

        {number === 3 &&
          <div ><p>A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}
        <div class="box-query">
          <p>¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>
          {number !== 4 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(4)} /> : number === 4 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
        </div>

        {number === 4 &&
          <div ><p>A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}
        <div class="box-query">
          <p>¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>
          {number !== 5 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(5)} /> : number === 5 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
        </div>

        {number === 5 &&
          <div ><p>A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}
        <div class="box-query">
          <p>¿Qué tan flexible son los espacios que ofrecen en sus despachos? </p>
          {number !== 6 ? <BsFillArrowDownCircleFill id="icon" onClick={() => setNumber(6)} /> : number === 6 && <BsFillArrowUpCircleFill onClick={() => setNumber(0)} />
          }
        </div>

        {number === 6 &&
          <div ><p>A veces no es fácil saber cuánto espacio necesitas y durante cuánto tiempo. Una alternativa podría ser contratar con un operador de espacios flexibles por una cuota mensual, en lugar de un contrato de alquiler tradicional.
            Los espacios de oficinas flexibles llevan tiempo siendo una solución viable para autónomos, startups y trabajadores en remoto. Ahora también están ganando adeptos entre las empresas más grandes por su flexibilidad, agilidad y estructura de precios.</p>
          </div>}
      </div>
    </div>

  );
}
