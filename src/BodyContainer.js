import React from "react";
import "./BodyContainer.css";
import MovieBlock from "./MovieBlock";
import EmptyDiv from "./EmptyDiv";

function BodyContainer() {
  return (
    <div className="body-container">
      <div className="body-image">
        <section className="blockContainer">
          <p className="titleMovieBlock">Populares na Netflix</p>
          <EmptyDiv />
          <MovieBlock tituloContainer="Visto Recentemente1" />
          <MovieBlock tituloContainer="Visto Recentemente2" />
          <MovieBlock tituloContainer="Visto Recentemente3" />
        </section>
      </div>
    </div>
  );
}

export default BodyContainer;
