import React from "react";
import { useContext } from "react";
import { PopularFilmsContext } from "../../contexts/PopularFilmsContext/PopularFilmsContext";
import FilmCard from "../FilmCard/FilmCard";
import Section from "../Section/Section";

function Main() {

  const { filmResults } = useContext(PopularFilmsContext);

  return(
    <main className="content">
      <div className="content__wrapper">

        <Section title={'Популярные фильмы:'}>
          <ul className="popular__list">
            {filmResults && filmResults.map((film) => {
              console.log(1);
              return (
                <FilmCard 
                  key={film.id} 
                  image={film.poster_path} 
                  title={film.title} 
                  description={film.overview} 
                  id={film.id}
                  rating={film.vote_average}  
                />
                )
            })}
          </ul>
        </Section>
        
      </div>
    </main>
  )
}

export default Main;