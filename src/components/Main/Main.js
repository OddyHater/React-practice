import React from "react";
import { useContext } from "react";
import { PopularFilmsContext } from "../../contexts/PopularFilmsContext/PopularFilmsContext";
import { PopularShowsContext } from "../../contexts/PopulapShows/PopularShows";
import FilmCard from "../FilmCard/FilmCard";
import Section from "../Section/Section";

function Main() {

  const popularFilms  = useContext(PopularFilmsContext);
  const popularShows = useContext(PopularShowsContext);

  return(
    <main className="content">
      <div className="content__wrapper">

        <Section title={'Популярные фильмы:'}>
          <ul className="popular__list">
            {popularFilms  && popularFilms.results.map((film) => {              
              return (
                <FilmCard
                  key={film.id} 
                  image={film.poster_path} 
                  title={film.title}                   
                  id={film.id}
                  rating={film.vote_average}
                />
                )
            })}
          </ul>
        </Section>

        <Section title={'Популярные сериалы:'}>
          <ul className="popular__list">
              {popularShows  && popularShows.results.map((film) => {              
                return (
                  <FilmCard 
                    key={film.id} 
                    image={film.poster_path}
                    title={film.title}
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