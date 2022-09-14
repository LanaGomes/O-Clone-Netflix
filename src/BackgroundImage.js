import "./BackgroundImage.css";
import MovieBlock from "./MovieBlock";

function BackgroundImage() {
  return (
    <div className="body-container">
      <div className="body-image">
        <section className="blockContainer">
          <p className="titleMovieBlock">Populares na Netflix</p>
          <MovieBlock />
          <MovieBlock />
          <MovieBlock />
        </section>
      </div>
    </div>
  );
}

export default BackgroundImage;
