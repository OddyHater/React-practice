import React, { useEffect, useState, useContext, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PopularFilmsContext } from './contexts/PopularFilmsContext/PopularFilmsContext';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Films from './components/Films/Films';
import Serials from './components/Serials/Serials';
import Recommends from './components/Recommends/Recommends';
import AppApi from './utils/api';

function App() {

  const [popularFilms, setPopularFilms] = useState([]);
  

  useEffect(() => {
    AppApi.getPopular()
      .then((res) => {
        setPopularFilms(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return(
   <PopularFilmsContext.Provider value={popularFilms}>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Main />} />
          <Route path='films' element={<Films />} />
          <Route path='serials' element={<Serials />} />
          <Route path='recommends' element={<Recommends />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </PopularFilmsContext.Provider>
  )
}

export default App;
