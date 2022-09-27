import React from "react";
import "./ColorsVariables.css";
import ContainerBlock from "./ContainerBlock";
import "./GeneralSets.css";
import "./MovieBlock.css";
import apiMovies from "./Api";
import MovieNameAndPicture from "./MovieNameAndPicture";

function MovieBlock(props) {
  return (
    <>
      <ContainerBlock
        className="containerBlock"
        tituloContainer={props.tituloContainer}
      >
        <div className="containerMoviesBlock">
          <MovieNameAndPicture></MovieNameAndPicture>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
        </div>
      </ContainerBlock>
    </>
  );
}

export default MovieBlock;
