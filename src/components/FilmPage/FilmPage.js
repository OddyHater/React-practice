import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AppApi from "../../utils/api";

function FilmPage() {

  const [filmInfo, setFilminfo] = useState({});
  const [filmImage, setFilmImage] = useState('');
  const filmId = useParams();

  useEffect(() => {
    AppApi.getFilmInfo(filmId.id)
      .then((res) => {
        console.log(res);
        setFilminfo(res);
      })
      .then(() => {
        AppApi.getImage(filmInfo.poster_path)
          .then((res) => {
            setFilmImage(res);
          })
      })
  }, []);
  
  return(
   <>
    <p>{filmId.id}</p>
    <img src={filmInfo && filmImage.url} alt={filmInfo && filmInfo.title} />
   </>
  )
}

export default FilmPage;