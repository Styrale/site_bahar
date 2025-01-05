import React, { useState } from "react";
import imageData from "./../../images.json";
import { useDoubleClick } from './useDoubleClick.js';
import "./Gallery.css";

const Gallery = () => {
  // Fonction pour obtenir l'index de la prochaine image
  const getNextImageIndex = (currentIndex, usedImages, otherCarrouselIndex) => {
    let nextIndex = (currentIndex + 1) % imageData.length;

    // S'assurer que l'image n'a pas déjà été utilisée et qu'elle n'est pas la même que celle de l'autre carrousel
    while (usedImages.includes(imageData[nextIndex]) || nextIndex === otherCarrouselIndex) {
      nextIndex = (nextIndex + 1) % imageData.length;
    }

    return nextIndex;
  };

  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [rotation1, setRotation1] = useState(0);
  const [rotation2, setRotation2] = useState(0);
  const [usedImages1, setUsedImages1] = useState([0]);
  const [usedImages2, setUsedImages2] = useState([1]);

  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleNextImage1 = () => {
    const nextIndex = getNextImageIndex(currentIndex1, usedImages1, currentIndex2);
    setUsedImages1((prevUsedImages) => [...prevUsedImages, nextIndex]);
    setCurrentIndex1(nextIndex);
  };

  // Fonction pour passer à l'image suivante dans le carrousel 2
  const handleNextImage2 = () => {
    const nextIndex = getNextImageIndex(currentIndex2, usedImages2, currentIndex1);
    setUsedImages2((prevUsedImages) => [...prevUsedImages, nextIndex]);
    setCurrentIndex2(nextIndex);
  };

  // Fonction pour faire pivoter l'image du carrousel 1
  const handleClick1 = () => {
    setRotation1(rotation1 + 90);
  };

  // Fonction pour faire pivoter l'image du carrousel 2
  const handleClick2 = () => {
    setRotation2(rotation2 + 90);
  };

  // Utiliser le hook pour gérer les clics simples et doubles
  const handleClickWithDoubleClick1 = useDoubleClick(handleClick1, handleNextImage1);
  const handleClickWithDoubleClick2 = useDoubleClick(handleClick2, handleNextImage2);

  return (
    <div className="gallery">
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Appuyez une fois sur les images pour les faire pivoter, ou deux fois pour en changer.</h2>
            <button onClick={closePopup}>Fermer</button>
          </div>
        </div>
      )}
      <div
        className="carousel_1"
        onClick={handleClickWithDoubleClick1} // Utilisation du hook pour gérer les clics
      >
        <img
          src={imageData[currentIndex1].src}
          alt={imageData[currentIndex1].alt}
          className="carousel-image"
          style={{ transform: `rotate(${rotation1}deg)` }} // Applique la rotation de l'image
        />
      </div>
      <div
        className="carousel_2"
        onClick={handleClickWithDoubleClick2} // Utilisation du hook pour gérer les clics
      >
        <img
          src={imageData[currentIndex2].src}
          alt={imageData[currentIndex2].alt}
          className="carousel-image"
          style={{ transform: `rotate(${rotation2}deg)` }} // Applique la rotation de l'image
        />
      </div>
    </div>
  );
};

export default Gallery;