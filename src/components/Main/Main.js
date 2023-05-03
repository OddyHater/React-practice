import React from "react";
import { useState, useEffect, useContext } from "react";
import { PopularFilmsContext } from "../../contexts/PopularFilmsContext/PopularFilmsContext";
import FilmCard from "../FilmCard/FilmCard";

function Main() {

  const {results} = useContext(PopularFilmsContext);

  return(
    <main className="content">
      <div className="content__wrapper">
        <section className="popular">
          <h2 className="popular__title">Популярные фильмы:</h2>
          <ul className="popular__list">
            {results?.length > 0 && results.map((film) => {
              return <FilmCard key={film.id} image={film.poster_path} title={film.title} description={film.overview} id={film.id}/>
            })}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Main;