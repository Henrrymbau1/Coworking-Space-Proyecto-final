import React from "react";
import "./faq.scss";

export default function Faq() {
  return (
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
  );
}
