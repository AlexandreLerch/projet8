import React from "react";
import Carrousel from "./Carrousel";
import jsonData from "../data/travaux.json";
import "../styles/travaux.css";


const Travaux = () => {
    const objet = jsonData
    console.log(objet)
    const description = objet.description
    const image = objet.cover

    return (
        <div className="travaux">
          <p>Je vais tenter des trucs</p>
          {/* <Carrousel /> */}
         <p> je tente de sortir la description : {description}</p>
          <Carrousel key={objet.id} objet={objet}/>
         <img src ={image}/>
        </div>
    );
};

export default Travaux;