import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Loarder from "../Loader/Loarder";

function FilmCard({image, title, rating, id}) {

  const [isLoaded, setIsLoaded] = useState(false);
  const imagePath = `https://image.tmdb.org/t/p/w500/${image}` || '';

  function handleImageLoad() {
    setIsLoaded(true);
  }

  function handleLinkClick(e) {
    e.preventDefalt();
  }

  return(
    <li className="card">
      <div className="card__image-container">
        {!isLoaded && <Loarder />}
        <img src={imagePath} className="card__image" alt={title} onLoad={handleImageLoad} />
        <span className="card__rating">{rating}</span>
      </div>
    <Link to={`film-info/${id}`} className="card__link"></Link>
    </li>
  )
}

export default FilmCard;