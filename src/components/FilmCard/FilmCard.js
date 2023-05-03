import React from "react";
import { useState, useEffect } from "react";
import Loarder from "../Loader/Loarder";

function FilmCard({image, title, description}) {

  const [isLoaded, setIsLoaded] = useState(false);
  const imagePath = `https://image.tmdb.org/t/p/w500/${image}` || '';

  function handleImageLoad() {
    setIsLoaded(true);
  }

  return(
    <li className="card">
      <div className="card__image-container">
        {!isLoaded && <Loarder />}
        <img src={imagePath} className="card__image" alt={title} onLoad={handleImageLoad} />
      </div>      
      <div className="card__text-container">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </li>
  )
}

export default FilmCard;