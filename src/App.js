import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NavBar from "./components/Commons/NavBar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Detail from "./pages/Detail.js";

import Category from "./pages/Category";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category/:category" element={<Category />} />
        <Route path="/guitars/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
