import React from "react";
import { useState, useEffect } from "react";
import AppApi from "../../utils/api";

function FilmCard({image, title, description}) {

  const [cardImage, setCardImage] = useState('');

  useEffect(() => {
    AppApi.getImage(image)
      .then((res) => {
        setCardImage(res.url);
      })
      .catch((err) => console.log(err));
  }, []);

  return(
    <li className="card">
      {cardImage ? <img src={cardImage} alt={title} className="card__image" /> : <p>123</p>}
      <div className="card__text-container">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </li>
  )
}

export default FilmCard;