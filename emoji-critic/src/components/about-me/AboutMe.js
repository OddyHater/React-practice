import React from "react";
import { Link, Outlet } from "react-router-dom";

function AboutMe() {
  return(
    <div>
      <ul>
        <li>
          <Link to="my-story">My story</Link>
        </li>

        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>

        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
       <Outlet />
    </div>
  )
}

export default AboutMe;