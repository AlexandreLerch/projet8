import React from "react";
import "../styles/carrousel.css";
import { useState } from "react";

const Carrousel = ({ objet }) => {
    console.log(objet[0].cover)

    const covers = objet.map((objet) => objet.cover);
    console.log(covers)

    const [currentIndex, setCurrentIndex] = useState(0);

  

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? covers.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const goToNext = () => {
        const isLastSlide = currentIndex === covers.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };

      return (
        <div className="carrousel">



<div
        className="slideStyles"
        style={{ backgroundImage: `url(${covers[currentIndex]})` }}
      >
        {covers.length !== 1 && (
          <React.Fragment>
            
          <div className="fleches">
              <img onClick={goToPrevious} src ="../fleche-left.png" alt="left-arrow"/>
         
              <img onClick={goToNext} src ="../fleche-right.png" alt="right-arrow"/>
              </div>
          </React.Fragment>
        )}
      </div>




      <div
        className="slideStyles"
        style={{ backgroundImage: `url(${covers[currentIndex]})` }}
      >
        {covers.length !== 1 && (
          <React.Fragment>
            
          <div className="fleches">
              <img onClick={goToPrevious} src ="../fleche-left.png" alt="left-arrow"/>
         
              <img onClick={goToNext} src ="../fleche-right.png" alt="right-arrow"/>
              </div>
              <div className="numerotation">
        <p>{currentIndex + 1}/{covers.length}</p>
      </div>
          </React.Fragment>
        )}
      </div>
    </div>
      )

}

export default Carrousel