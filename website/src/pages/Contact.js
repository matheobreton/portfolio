import React, {useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_l9wreox", "template_vlh51po", form.current, "Vfx9JVg8EfgqXQ2_F").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact-section">
      <div className="contact">
        <h1 className="title">Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" name="lastname" placeholder="Nom" required />
            <input type="text" name="name" placeholder="Prénom" required />
          </div>
          <input className="email" type="email" name="email" placeholder="Adresse e-mail" required />
          <textarea name="message" placeholder="Votre message" required />
          <input className="send" type="submit" value="ENVOYER" />
        </form>
      </div>
    </div>
  );
}

export default Contact;