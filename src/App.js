import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/Commons/NavBar";
import ItemContainer from "./components/itemContainer/ItemContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemdetailContainer";

function App() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //   });
  return (
    <>
      <NavBar />

      <ItemContainer titleSection="Últimos productos" />
      <ItemDetailContainer />
    </>
  );
}

export default App;
