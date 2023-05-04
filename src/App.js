import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PopularFilmsContext } from './contexts/PopularFilmsContext/PopularFilmsContext';
import { PopularShowsContext } from './contexts/PopulapShows/PopularShows';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Films from './components/Films/Films';
import FilmPage from './components/FilmPage/FilmPage';
import Serials from './components/Serials/Serials';
import Recommends from './components/Recommends/Recommends';
import AppApi from './utils/api';

function App() {

  const [popularFilms, setPopularFilms] = useState(null);
  const [popularShows, setPopularShows] = useState(null);
  

  useEffect(() => {
    AppApi.getPopularFilms()
      .then((res) => {        
        setPopularFilms(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    AppApi.getPopularShows()
      .then((res) => {
        setPopularShows(res);
      })
  }, [])

  return(
   <PopularFilmsContext.Provider value={popularFilms}>
    <PopularShowsContext.Provider value={popularShows}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Header />}>
              <Route path='/' element={<Main />} />
              <Route path='films' element={<Films />} />                
              <Route path='film-info/:id' element={<FilmPage />} />
              <Route path='serials' element={<Serials />} />
              <Route path='recommends' element={<Recommends />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PopularShowsContext.Provider>   
   </PopularFilmsContext.Provider>
  )
}

export default App;
