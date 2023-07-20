import React from "react";
import "../styles/carrousel.css";
import { useState } from "react";

const Carrousel = ({ objet }) => {
  console.log(objet[0].cover);

  const covers = objet.map((objet) => objet.cover);
  console.log(covers);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexA, setCurrentIndexA] = useState(covers.length - 1);
  const [currentIndexB, setCurrentIndexB] = useState(1);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const isFirstSlideA = currentIndexA === 0;
    const isFirstSlideB = currentIndexB === 0;
    const newIndex = isFirstSlide ? covers.length - 1 : currentIndex - 1;
    const newIndexA = isFirstSlideA ? covers.length - 1 : currentIndexA - 1;
    const newIndexB = isFirstSlideB ? covers.length - 1 : currentIndexB - 1;
    setCurrentIndex(newIndex);
    setCurrentIndexA(newIndexA);
    setCurrentIndexB(newIndexB);

  };

  const goToNext = () => {
    const isLastSlide = currentIndex === covers.length - 1;
    const isLastSlideA = currentIndexA === covers.length - 1;
    const isLastSlideB = currentIndexB === covers.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    const newIndexA = isLastSlideA ? 0 : currentIndexA + 1;
    const newIndexB = isLastSlideB ? 0 : currentIndexB + 1;
    setCurrentIndex(newIndex);
    setCurrentIndexA(newIndexA);
    setCurrentIndexB(newIndexB);
    
  };

  return (
    <div className="carrousel">
      <div
        className="slideStyles"
        style={{ backgroundImage: `url(${covers[currentIndexA]})` }}
      ></div>

      <div
        className="slideStyles"
        style={{ backgroundImage: `url(${covers[currentIndex]})` }}
      >
        {covers.length !== 1 && (
          <React.Fragment>
            <div className="fleches">
              <img
                onClick={goToPrevious}
                src="../fleche-left.png"
                alt="left-arrow"
              />

              <img
                onClick={goToNext}
                src="../fleche-right.png"
                alt="right-arrow"
              />
            </div>
            <div className="numerotation">
              <p>
                {currentIndex + 1}/{covers.length}
              </p>
            </div>
          </React.Fragment>
        )}
      </div>

      <div
        className="slideStyles"
        style={{ backgroundImage: `url(${covers[currentIndexB]})` }}
      ></div>


    </div>
  );
};

export default Carrousel;
