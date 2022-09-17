import "./BodyContainer.css";
import MovieBlock from "./MovieBlock";
import EmptyDivCo from "./EmptyDiv";

function BodyContainer() {
  return (
    <div className="body-container">
      <div className="body-image">
        <section className="blockContainer">
          <p className="titleMovieBlock">Populares na Netflix</p>
          <EmptyDivCo />
          <MovieBlock />
          <MovieBlock />
        </section>
      </div>
    </div>
  );
}

export default BodyContainer;
