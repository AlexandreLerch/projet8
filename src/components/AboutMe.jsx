import React from "react";
import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="about">
      <div className="a_propos">
        <h1>A propos de moi...</h1>
        <p>
          Je suis <strong>Alexandre Lerch, développeur fullstack</strong> en freelance. Après avoir exploré différents milieux professionnels, je me suis lancé dans le développement web.
          <br />
          
          Après une année de formation chez <strong>OpenClassrooms</strong>, je maitrise les bases des principales technologies utilisées actuellement.
          <br />
          <br />
          Particulièrement soigneux, j'apporte une importance particulière à la propreté de mes réalisations et à la qualité de mes échanges avec mes clients.

        </p>
        <div className="liens">
          <a href="https://www.facebook.com/openclassroomsfr">
            <img src="icons8-facebook-nouveau.svg" alt="Icône Facebook"></img>
          </a>
          <a href="https://www.instagram.com/openclassrooms/r">
            <img src="icons8-instagram.svg" alt="Icône Facebook"></img>
          </a>
          <a href="https://github.com/alexhcrel?tab=repositories">
            <img src="icons8-github.svg" alt="Icône Facebook"></img>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
