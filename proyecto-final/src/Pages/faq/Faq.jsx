import React from "react";
import "./faq.scss";

export default function Faq() {
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
    </div>
    
  );
}
