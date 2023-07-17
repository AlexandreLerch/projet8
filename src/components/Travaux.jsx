import React from "react";
// import Carousel from "./Carrousel";
import jsonData from "../data/travaux.json";
import "../styles/travaux.css";



const Travaux = () => {
    const objet = jsonData.find((item) => item.id === "001");
    const description = objet.description

    return (
        <div className="travaux">
          <p>Je vais tenter des trucs</p>
          {/* <Carrousel /> */}
         <p> je tente de sortir la description : {description}</p>
          
          
        </div>
    );
};

export default Travaux;