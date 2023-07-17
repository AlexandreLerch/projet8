import React from "react";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import Competences from "../components/Competences";
import About_me from "../components/About_me";
import Travaux from "../components/Travaux";




const Home = () => {
    
    return (
      <div className="home">
         <Navigation />
         <Banner />
         <About_me/>
         <Competences />
         <Travaux/>
      </div>
    );
  };
  
  export default Home;