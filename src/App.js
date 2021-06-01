import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Awards from "./Components/Awards/Awards";
import Pumps from "./Components/Pumps/Pumps";
import Product from "./Components/Products/Product";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Header/>
      <Awards/>
      <Pumps/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
