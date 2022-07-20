import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/Commons/NavBar";
import ItemContainer from "./components/itemContainer/itemContainer";

function App() {
  return (
    <>
      <NavBar />

      <ItemContainer titleSection="Últimos productos" />
    </>
  );
}

export default App;
