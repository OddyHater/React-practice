import React from "react";

function Section({title, children}) {
  return(
    <section className="film">
      <h2 className="popular__title">{title}</h2>
      {children}
    </section>
  )
}

export default Section;