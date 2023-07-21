import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <>
        <h1>Contact</h1>
        <p>
          N'hésitez pas à me contacter à cette{" "}
          <a href="mailto:alexandre.lerch@yahoo.fr">adresse</a>
        </p>
        <p> ou via le formulaire ci-dessous :</p>
        <form method="get" action="">
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
        <input type="submit" value="Envoyer" id="submit"></input>
        </div>
        </form>
        <p>Merci beaucoup, je vous répondrai très vite...</p>
      </>
    </section>
  );
};

export default Contact;
