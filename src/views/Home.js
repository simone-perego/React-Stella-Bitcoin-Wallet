import React from "react";
import "../App.css";
import BitcoinChanger from "../components/BitcoinChanger";

const myCrypto = ["BTC", "ETH", "BNB", "SOL"];

function Home() {
  return (    
    <div className="container">

    <div className="currencychg">
      {myCrypto.map((cptname, index) => (
      <BitcoinChanger cptname={cptname} index={index} />
      ))}
    </div>
    </div>
  );
}

export default Home;
