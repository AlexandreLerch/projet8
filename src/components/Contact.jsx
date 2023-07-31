import React, { useRef, useEffect } from "react";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";
import { addFormEventListener } from "../formulaire.js";

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5r7ybev", "template_paphfmc", form.current, "SkZQBjmeepRBInZQR").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    addFormEventListener(); // Ajouter l'écouteur d'événement après que le composant est monté
  }, []);

  return (
    <section className="contact" id="contact">
      <>
        <h1>Contact</h1>
        <p>
          N'hésitez pas à me contacter à cette{" "}
          <a href="mailto:alexandre.lerch@yahoo.fr">adresse</a>
        </p>
        <p> ou via le formulaire ci-dessous :</p>
        <form ref={form} onSubmit={sendEmail} id="formulaire">
        <label>Votre prénom :</label>
        <input type="text" name="prenom" id="prenom"></ input>
        <label>Votre nom :</label>
        <input type="text" name="nom" id="nom"></ input>
        <label>Votre email :</label>
        <input type="email" name="email" id="email"></ input>
        <label>Sujet :</label>
        <input type="text" name="sujet" id="sujet"></ input>
        <label for="ameliorer">Votre message :</label>
        <textarea name="message" id="message"></textarea>
        <div>
        <input type="submit" value="Send" id="submit"></input>
        </div>
        </form>


        <p id="remerciement">Merci beaucoup, je vous répondrai très vite...</p>
      </>
    </section>
  );
};

export default Contact;
