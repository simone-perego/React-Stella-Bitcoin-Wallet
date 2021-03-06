import React, { useEffect, useState } from "react";
import "../App.css";
import { FaArrowsAltH, FaMoneyBillWave } from "react-icons/fa";

const BASE_URL = "https://blockchain.info/ticker";

function BitcoinChanger({ cptname, index }) {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(
    localStorage.getItem("btcAmount" + index)
  );
  //const [amount, setAmount] = useState(2.5 + index);  //WITHOUT LOCALSTORAGE
  const [exchangeRate, setExchangeRate] = useState("");
  const [buyRate, setBuyRate] = useState();
  const [sellRate, setSellRate] = useState();
  const [toCurr, setToCurr] = useState([]);
  const [show, setShow] = useState(false);
  let btcAmount = parseFloat(amount);
  let toAmount = btcAmount * exchangeRate;

  if (amount === null) {
    btcAmount = 2.5 + index;
    localStorage.setItem("btcAmount" + index, btcAmount);
  }

  function handletocurr(e) {
    setToCurr(e.target.value);
  }

  function sell1(e) {
    btcAmount = btcAmount - 1;
    setAmount(btcAmount);
    toAmount = btcAmount * sellRate;
    localStorage.setItem("btcAmount" + index, btcAmount);
  }

  function buy1(e) {
    btcAmount = btcAmount + 1;
    setAmount(btcAmount);
    toAmount = btcAmount * buyRate;
    localStorage.setItem("btcAmount" + index, btcAmount);
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const first = Object.keys(data)[27];
        setCurrencies([data.base, ...Object.keys(data)]);
        setToCurr(first);
        setExchangeRate(data[first].last);
        setBuyRate(data[first].buy);
        setSellRate(data[first].sell);
      });
  }, []);

  useEffect(() => {
    if (toCurr != 0) {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
          setExchangeRate(data[toCurr].last);
          console.log(exchangeRate);
        });
    }
  }, [toCurr]);

  function toggleSlide(e) {
    const div = document.querySelector("#buy" + index);
    console.log(div);
    if (div.classList.contains("open")) {
      div.classList.remove("open");
    } else {
      div.classList.add("open");
    }
  }

  return (
    <div className="currencywrapper flex-column">
      <div className="currencyrow d-flex">
        <h5 className="btcLabel">{cptname + " :"}</h5>
        <input className="currency" type="number" value={btcAmount} readOnly />
        <h1 className="equals">
          <FaArrowsAltH />
        </h1>
        <input className="currency" type="text" value={toAmount} readOnly />
        <select value={toCurr} onChange={handletocurr}>
          {currencies.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <button className="toggle" onClick={toggleSlide}>
          <FaMoneyBillWave className="toggleicon" />
        </button>
      </div>
      <div className="buy" id={"buy" + index}>
        <input
          className="currency"
          name="buy"
          type="submit"
          value={"Buy 1 " + cptname}
          onClick={buy1}
        ></input>
        <input
          className="currency"
          name="sell"
          type="submit"
          value={"Sell 1 " + cptname}
          onClick={sell1}
        ></input>
      </div>
    </div>
  );
}

export default BitcoinChanger;
