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
    <form className="newsLetter-container" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="input-footer" placeholder="Escribe tu nombre" type="text" name="user_name" />
      <label>Email</label>
      <input className="input-footer" placeholder="Escribe tu correo" type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input className="input-footer" placeholder="Cuentanos, en que podemos ayudarte" type="submit" value="Send" />
    </form>
  );
};