import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Competences from "../components/Competences";
import AboutMe from "../components/AboutMe";
import Travaux from "../components/Travaux";
import Contact from "../components/Contact";




const Home = () => {
    
    return (
    
      <div className="home">
         <Navigation />
         <Banner />
         <AboutMe id="about" />
         <Competences id="competences"/>
         <Travaux id="travaux" />
        <Contact id = "contact" />
      </div>
    );
  };
  
  export default Home;