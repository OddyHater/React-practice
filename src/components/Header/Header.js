import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return(
    <>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <NavLink to="/" className={({isActive}) => isActive ? 'header__link header__link_active' : 'header__link'}>
                Главная
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="films" className={({isActive}) => isActive ? 'header__link header__link_active' : 'header__link'}>
                Фильмы
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="serials" className={({isActive}) => isActive ? 'header__link header__link_active' : 'header__link'}>
                Сериалы
              </NavLink>
            </li>
            <li className="header__menu-item">
              <NavLink to="recommends" className={({isActive}) => isActive ? 'header__link header__link_active' : 'header__link'}>
                Подборки
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Header;