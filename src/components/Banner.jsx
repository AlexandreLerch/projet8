import React from "react";

// import { NavLink } from "react-router-dom";
import "../styles/banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="title_div">
        <div className="defilement">
          <h1 className = "1 a lettre maj">A</h1>
          <h1 className = "2 b lettre">L</h1>
          <h1 className = "3 c lettre">E</h1>
          <h1 className = "4 d lettre">X</h1>
          <h1 className = "5 e lettre">A</h1>
          <h1 className = "6 f lettre">N</h1>
          <h1 className = "7 g lettre">D</h1>
          <h1 className = "8 h lettre">R</h1>
          <h1 className = "9 i lettre">E</h1>
          <h1 className = "10 j lettre esp"></h1>
          <h1 className = "11 k lettre maj">L</h1>
          <h1 className = "12 l lettre">E</h1>
          <h1 className = "13 m lettre">R</h1>
          <h1 className = "14 n lettre">C</h1>
          <h1 className = "o lettre">H</h1>
          

          {/* <h1>Alexandre Lerch - Développeur full stack </h1> */}
        </div>
        <div className = "paragraphe">
          <p>A travers cette page, je vous invite à découvrir mes compétences et mes réalisations...</p>
          <p className="spacer"></p>
          <p>Passionné de Javascript, j'apprécie tout particulièremenet le framework REACT, mais j'utilise volontiers d'autres technologies telles que NodeJS pour le backend...</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
