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
  }, []);

  useEffect(() => {
    AppApi.getImage(filmInfo.poster_path)
      .then((res) => {
        console.log(res);
        setFilmImage(res);
      })
      .catch((err) => console.log(err))
  }, [filmInfo]);
  
  return(
   <>
    <p>{filmId.id}</p>
    <img src={filmInfo && filmImage.url} alt="saxsf" />
   </>
  )
}

export default FilmPage;