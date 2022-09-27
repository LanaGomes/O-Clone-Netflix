import React from "react";
import "./ContainerBlock.css";

function ContainerBlock(props) {
  return (
    <div className="containerBlock-card">
      <header className="HeadercontainerMoviesBlock">
        {props.tituloContainer}
      </header>
      {props.children}
    </div>
  );
}

export default ContainerBlock;
