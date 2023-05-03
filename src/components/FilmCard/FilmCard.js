import React from "react";
import { useState } from "react";
import Loarder from "../Loader/Loarder";

function FilmCard({image, title, description, rating}) {

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
        <span className="card__rating">{rating}</span>
      </div>
    </li>
  )
}

export default FilmCard;