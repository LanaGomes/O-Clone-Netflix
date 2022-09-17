import "./ColorsVariables.css";
import "./GeneralSets.css";
import "./MovieBlock.css";

function MovieBlock() {
  return (
    <>
      <div className="containerBlock">
        <header className="HeadercontainerMoviesBlock">
          Visto Recentemente
        </header>
        <div className="containerMoviesBlock">
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
          <div className="movieBlock">filme aqui</div>
        </div>
      </div>
    </>
  );
}

export default MovieBlock;
