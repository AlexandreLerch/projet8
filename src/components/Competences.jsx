import React from 'react';
// import { NavLink } from "react-router-dom";
import "../styles/competences.css"

const Competences = () => {
    return (
        <section className="competences" id="competences">
            <div className="comp">
            <h1 >Mes compétences</h1>
            <ul>
                <li>
                    <h3>Développement web</h3>
                    <div id="langages">
                        <img className="logiciel" src="/images/html5.png" alt="logo-html5"></img>
                        <img className="logiciel" src="/images/css3.png" alt="logo-css3"></img>
                        <img className="logiciel" src="/images/javascript.png" alt="logo-javascript"></img>
                        <img className="logiciel react" src="/images/react.png" alt="logo-react"></img>
                        <img className="logiciel" src="/images/nodejs.png" alt="logo-nodejs"></img>
                        <img className="logiciel" src="/images/express.png" alt="logo-express"></img>
                    </div>
                    <div></div>
                    </li>
                <li><h3>Autres compétences informatiques</h3>
                <div id="logiciels">
                        <img className="logiciel" src="/images/office.jpg" alt="logo-office"></img>
                        <img className="logiciel" src="/images/photoshop.png" alt="logo-photoshop"></img>
                        <img className="logiciel" src="/images/adobe_premiere.png" alt="logo-adobe_premiere"></img>
                        <img className="logiciel react" src="/images/lightroom.png" alt="logo-lightroom"></img>
                       
                    </div>
                    </li>
                <li><h3>Connaissances générales</h3>
                    <p>- Connaissances naturalistes : entomologie, ornithologie, herpétologie</p>
                    <p>- Titulaire d'un doctorat en neurosciences, mention ethologie</p>
                    <p>- Photographe amateur</p>
                </li>
            </ul>
            </div>

            
        </section>
    );
};
export default Competences;
