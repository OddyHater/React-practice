import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import './NavBar.css';
import AboutMe from './NavBar/AboutMe';

function NavBar () {
  return (
    
    <nav className="menu">
      <NavLink to="/" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Домой</NavLink>
      <NavLink to="/reviews" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обзоры эмодзи</NavLink>
      <Link to="about-me">Обо мне</Link>
      <Outlet />
    </nav>
    
    
  )
}

export default NavBar;