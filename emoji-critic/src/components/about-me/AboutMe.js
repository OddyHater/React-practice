import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function AboutMe() {
  return(
    <div>
      <ul>
        <li>
          <NavLink to="my-story">My story</NavLink>
        </li>

        <li>
          <NavLink to="hobbies">Hobbies</NavLink>
        </li>

        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
       <Outlet />
    </div>
  )
}

export default AboutMe;