import React from "react";
import "./BodyContainer.css";
import MovieBlock from "./MovieBlock";
import "../components/ColorsVariables.css";
import EmptyDiv from "./EmptyDiv";

import axios from "axios";

function BodyContainer() {
  async function loadMovies() {
    const httpResponse = await axios({
      method: "get",
      url: "http://localhost:3001/movies/nextReleasesByYear",
      params: {
        year: 2022,
      },
      headers: {},
    });

    console.log(httpResponse);

    return (
      <div className="body-container">
        <div className="body-image">
          <section className="blockContainer">
            <p className="titleMovieBlock">EmptyDivCo na Netflix</p>
            <EmptyDiv />
            <MovieBlock tituloContainer="Visto Recentemente1" />
            <MovieBlock tituloContainer="Visto Recentemente2" />
            <MovieBlock tituloContainer="Visto Recentemente3" />
          </section>
        </div>
      </div>
    );
  }
}

export default BodyContainer;
