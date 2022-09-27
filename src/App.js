import React from "react";
import "./GeneralSets.css";
import "./ColorsVariables.css";
import "./App.css";
import "./index.css";
import Header from "./Header";
import BodyContainer from "./BodyContainer";

function App() {
  const dummyArray = []; /*adicionar 3 filmes e 3 descrições, 'mockar' para receber o valor da api, pesquisar sobre card bootstrap, cada filme será um componente*/
  return (
    <>
      <Header />
      console.log(dummyArray);
      <BodyContainer />
    </>
  );
}

export default App;
