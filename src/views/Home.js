import React from "react";
import "../App.css";
import CurrencyChanger from "../components/CurrencyChanger.js";

function Home() {
  return (
    <div className="container">
      <div className="title">
        <h1>CAMBIO VALUTA</h1>
      </div>
      <CurrencyChanger />
    </div>
  );
}

export default Home;
