import React from "react";
import "./components/GeneralSets.css";
import "./components/ColorsVariables.css";
import "./App.css";
import "./index.css";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import MovieBlock from "./components/MovieBlock";
import EmptyDiv from "./components/EmptyDiv";

function App() {
  return (
    <>
      <Header />
      <EmptyDiv></EmptyDiv>
      <BodyContainer></BodyContainer>
      <MovieBlock></MovieBlock>
      <MovieBlock></MovieBlock>
      <MovieBlock></MovieBlock>
      <MovieBlock></MovieBlock>
    </>
  );
}

export default App;
