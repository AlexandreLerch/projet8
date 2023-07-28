import React from "react";
import Modale from "./Modale";
import "../styles/carrousel.css";
import { useState } from "react";
// import "../modales.js";

const Carrousel = ({ objet }) => {
  console.log(objet[0].cover);

  const covers = objet.map((objet) => objet.cover);
  console.log(covers);
  const links = objet.map((objet) => objet.link);
  const descriptions = objet.map((objet) => objet.description);
  console.log(descriptions);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLink, setCurrentLink] = useState(0);
  const [currentDescription, setCurrentDescription] = useState(0);
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
    setCurrentLink(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === covers.length - 1;
    const isLastSlideA = currentIndexA === covers.length - 1;
    const isLastSlideB = currentIndexB === covers.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    const newIndexA = isLastSlideA ? 0 : currentIndexA + 1;
    const newIndexB = isLastSlideB ? 0 : currentIndexB + 1;
    setCurrentIndex(newIndex);
    setCurrentLink(newIndex);
    setCurrentDescription(newIndex);
    setCurrentIndexA(newIndexA);
    setCurrentIndexB(newIndexB);
  };

  const textToPass = descriptions[currentIndex];
  console.log(textToPass);

  return (
    <div className="carroussel_et_modale">
    <div className="carrousel">
      <div
        className="slideStylesA"
        style={{ backgroundImage: `url(${covers[currentIndexA]})` }}
      ></div>

      <div className="center">
        <a href={links[currentLink]}>
          <div
            className="slideStyles"
            style={{ backgroundImage: `url(${covers[currentIndex]})` }}
          ></div>
        </a>

        {covers.length !== 1 && (
          <div className="fleches">
            <img
              onClick={goToPrevious}
              src="../arrow_left.png"
              alt="left-arrow"
            />

            <img
              onClick={goToNext}
              src="../arrow_right.png"
              alt="right-arrow"
            />
          </div>
        )}
      </div>
      <div
        className="slideStylesB"
        style={{ backgroundImage: `url(${covers[currentIndexB]})` }}
      >
      </div>
     
    </div>
    <Modale textToInsert={textToPass}/>
    </div>
  );
};

export default Carrousel;
