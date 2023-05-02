import React from "react";
import { useState, useEffect, useContext } from "react";
import { PopularFilmsContext } from "../../contexts/PopularFilmsContext/PopularFilmsContext";

function Main() {

  const {results} = useContext(PopularFilmsContext);

  return(
    <main className="content">
      <div className="content__wrapper">
        <section className="popular">
          <h2 className="popular">Популярные фильмы:</h2>
          <ul className="popular__list">
            {results?.length > 0 && results.map((film) => {
              return <li key={film.id}>{film.title}</li>
            })}
          </ul>
        </section>
      </div>
    </main>
  )
}

export default Main;