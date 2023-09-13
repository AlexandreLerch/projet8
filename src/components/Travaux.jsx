import React from "react";
/*import Carrousel from "./Carrousel";*/
import Tableau from "./Tableau";

import jsonData from "../data/travaux.json";
import "../styles/travaux.css";
import "../modales.js";

const Travaux = () => {
    const objet = jsonData
    console.log(objet)
    // const description = objet.description

    return (
        <section className="travaux" id="travaux">
           <div>
          <h1>Mes travaux</h1>
     
         {/* <p> je tente de sortir la description : {description}</p> */}
        </div>

        <Tableau key={objet.id} objet={objet} id="tableau"/>
      {/* <Carrousel key={objet.id} objet={objet} id="carrousel"/> */}
       
        </section>
    );
};

export default Travaux;