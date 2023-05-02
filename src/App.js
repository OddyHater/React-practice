import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Films from './components/Films/Films';
import Serials from './components/Serials/Serials';
import Recommends from './components/Recommends/Recommends';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/' element={<Main />}></Route>
          <Route path='films' element={<Films />} />
          <Route path='serials' element={<Serials />} />
          <Route path='recommends' element={<Recommends />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
