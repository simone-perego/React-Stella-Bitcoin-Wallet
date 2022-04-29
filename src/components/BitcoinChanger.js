import React, { useEffect, useState } from "react";
import "../App.css";
import { FaArrowsAltH, FaArrowCircleDown } from "react-icons/fa";

const BASE_URL = "https://blockchain.info/ticker";

function BitcoinChanger({cptname,index}) {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState(2.5 + index);
  const [exchangeRate, setExchangeRate] = useState();
  const [buyRate, setBuyRate] = useState();
  const [sellRate, setSellRate] = useState();
  const [toCurr, setToCurr] = useState([]);
  const [show, setShow] = useState(false);
  let fromamount = amount;
  let toamount = fromamount * exchangeRate;

  function handletocurr(e) {
    setToCurr(e.target.value);
  }

  function sell1(e) {
    setAmount(amount-1);
    toamount = ((amount-1) * sellRate); 
  }

  function buy1(e) {
    setAmount(amount+1);
    toamount = ((amount+1) * buyRate); 
  }

  function toggleSlide () {
    const div = document.querySelector('div')
    console.log("open toggle")
    if (div.classList.contains('open')) {
      div.classList.remove('open')
    } else {
      div.classList.add('open')
    }
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const first = Object.keys(data)[27];
        setCurrencies([data.base, ...Object.keys(data)]);
        setToCurr(first);
        setExchangeRate(data[first].last)
        setBuyRate(data[first].buy);
        setSellRate(data[first].sell);
      });
  }, []);

  useEffect(() => {
    if(toCurr != 0) {
      fetch(BASE_URL)
        .then((res) => res.json())
        .then((data) => {
            setExchangeRate(data[toCurr].buy);
            console.log(exchangeRate)});
        }
  }, [toCurr]);

  return (
        <div className="currencyrow flex-column">
          <div className="currencyrow d-flex">
          <h5>{cptname}:</h5>
          <input
            type="number"
            value={fromamount}
            readOnly
          />
          <h1 className="equals">
            {" "}
            <FaArrowsAltH />{" "}
          </h1>
          <input 
            type="text"
            value={toamount}
            readOnly
          />
          <select value={toCurr} onChange={handletocurr}>
            {currencies.map((option) => (
              <option key={option}>{option} </option>
            ))}
          </select>
          <button className="toggle" onClick={() => setShow(!show)}><FaArrowCircleDown /></button>
          </div>
          {
          show?
          <div className="buy">
            <input type="submit" value={"BUY 1 " + cptname} onClick={buy1}></input>
            <input type="submit" value={"SELL 1 " + cptname} onClick={sell1}></input>
          </div>
          :null
          }
      </div>
  );
}

export default BitcoinChanger;
