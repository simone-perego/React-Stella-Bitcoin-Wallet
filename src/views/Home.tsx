import React from "react";
import "../App.css";
import BitcoinChanger from "../components/BitcoinChanger";

const myCrypto = ["BTC", "ETH", "BNB", "SOL"];
localStorage.setItem("myCrypto",JSON.stringify(myCrypto))

function Home() {
  return (    
    <div className="container">

    <div className="currencychg">
      {myCrypto.map((cptname, index) => (
      <BitcoinChanger key={cptname} cptname={cptname} index={index} />
      ))}
    </div>
    </div>
  );
}

export default Home;
