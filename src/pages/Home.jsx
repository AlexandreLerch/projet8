import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Competences from "../components/Competences";
import About_me from "../components/About_me";
import Travaux from "../components/Travaux";




const Home = () => {
    
    return (
    
      <div className="home">
         <img src="/images/Banner-font.jpg" id="image-banner" alt="Banner" />
         <Navigation />
         <Banner />
         <About_me id="about" />
         <Competences id="competences"/>
         <Travaux id="travaux" />
         {/* <Contact id = "contact" /> */}
      </div>
    );
  };
  
  export default Home;