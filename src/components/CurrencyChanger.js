import React, { useEffect, useState } from "react";
import "../App.css";

const API_KEY = "?access_key=ece68b4cde5b5bbddcb580a80011c1a1";
const BASE_URL = "http://data.fixer.io/api/latest" + API_KEY;

function CurrencyChanger() {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurr, setFromCurr] = useState([]);
  const [toCurr, setToCurr] = useState([]);
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState();
  const [changedFromAmount, setChangedFromAmount] = useState(true);
  let fromamount;
  let toamount;

  if (changedFromAmount) {
    fromamount = amount;
    toamount = fromamount * exchangeRate;
  } else {
    fromamount = amount / exchangeRate;
    toamount = amount;
  }

  function handlefromcurr(e) {
    setFromCurr(e.target.value);
  }

  function handletocurr(e) {
    setToCurr(e.target.value);
  }

  function handlefromamount(e) {
    setAmount(e.target.value);
    setChangedFromAmount(true);
  }

  function handletoamount(e) {
    setAmount(e.target.value);
    setChangedFromAmount(false);
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const first = Object.keys(data.rates)[0];
        setCurrencies([data.base, ...Object.keys(data.rates)]);
        setFromCurr(data.base);
        setToCurr(first);
        setExchangeRate(data.rates[first]);
      });
  }, []);

  useEffect(() => {
    if (fromCurr != null && toCurr != null) {
      fetch(`${BASE_URL}&base=${fromCurr}&symbols=${toCurr}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurr]));
    }
  }, [fromCurr, toCurr]);

  return (
    <div className="currencychg">
      <div className="currencyrow d-flex flex-column">
        <select onChange={handlefromcurr}>
          {currencies.map((option) => (
            <option key={option}>{option} </option>
          ))}
        </select>
        <input type="number" value={fromamount} onChange={handlefromamount} />
      </div>
      <h1 className="equals"> = </h1>
      <div className="currencyrow d-flex flex-column">
        <input type="number" value={toamount} onChange={handletoamount} />
        <select value={toCurr} onChange={handletocurr}>
          {currencies.map((option) => (
            <option key={option}>{option} </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyChanger;
