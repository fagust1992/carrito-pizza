import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar";
import Header from "./Components/Header";
import { ContextProvider } from "../src/Context/Context";
import Home from "../src/Paginas/Home";
import Detalle from "../src/Paginas/Detalle";
import Footer from "../src/Components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Detalle />} />
              <Route path="/carrito" element={""} />
            </Routes>
          </div>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
