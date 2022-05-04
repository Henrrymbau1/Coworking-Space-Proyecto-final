import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./_footer.scss"


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_62cmprg', 'template_va2ibko', form.current, 'bnQweKR5uLmYM447e')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset()
  };

  return (
    <div className="footer-container">

      <div className="logo-politicas">
        <img className="footer-logo" src="https://cdn.discordapp.com/attachments/946038364816162916/965515381236170772/logo.png" alt="" />
        <div className="politicas">
          <p className="p-footer">Visita nuestras Oficinas</p>
          <p className="p-footer">Politica de Privacidad</p>
          <p className="p-footer">Politica de cookies</p>
        </div>
        <p>Todos los precios sin IVA incluido</p>
      </div>


      <div className="form-container">
        <h2>Suscribete a nuestra newsletter</h2>
        <form className="form-container2" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input className="input-footer" placeholder="Tu nombre" type="text" name="user_name" />
          <label>Email</label>
          <input className="input-footer" placeholder="Email" type="email" name="user_email" />
          <div className="classCheckBox">
            <input type="checkbox" />
            <span className="text-footer">Acepto recibir noticias e invitaciones a eventos de Spot at Home</span>
          </div>
          <div className="classCheckBox">
            <input type="checkbox" />
            <span className="text-footer">Acepto recibir información sobre productos y servicios de Spot at Home</span>
          </div>
          <button id="btn-footer-enviar">Enviar</button>
        </form>
      </div>


      <div className="icon-container">
        <img className="icon-footer" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png" alt="Youtube" />
        <img className="icon-footer" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-128.png" alt="Linkedin" />
        <img className="icon-footer" src="https://cdn1.iconfinder.com/data/icons/social-media-2285/512/Colored_Facebook3_svg-128.png" alt="Facebook" />
        <img className="icon-footer" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-128.png" alt="Instagram" />
      </div>
    </div>
  );
};