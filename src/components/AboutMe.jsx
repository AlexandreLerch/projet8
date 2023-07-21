import React from "react";
import "../styles/aboutMe.css";

const AboutMe = () => {
  return (
    <section className="aboutMe" id="about">
      <div className="a_propos">
        <h1>A propos de moi...</h1>
        <p>
          Bonjour aujourd'hui je vais faire un blabla très court pour parler de
          moi et de mes compétences en développement
          <br />
          Aussi, je suis très intéressé pour rendre vos projets esthétiques et
          blbsdbfbvpfvfvbpbpbdbvb
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
