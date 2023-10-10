import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [scroll, setScroll] = useState(false)
  const FadeIn = () => {
    if (window.scrollY > window.innerHeight * 2 + 2) {
      setScroll(true)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', FadeIn)
  }, [])

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
    <motion.div id="contact-section" animate={{ opacity: scroll ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", duration: 0.6 }}>
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
    </motion.div>
  );
}

export default Contact;