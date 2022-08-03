import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/Commons/NavBar";
import Home from "./pages/Home";
import Detail from "./pages/Detail.js";
import Category from "./pages/Category";

import "./App.css";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/category/:category" element={<Category />} />
        <Route path="/guitars/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
