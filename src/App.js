import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./views/About.js";
import Home from "./views/Home.js";
import Contacts from "./views/Contacts.js";
import "./App.css";
import LoginForm from "./components/LoginForm.js";

function App() {
  localStorage.setItem('mySeed', 123);
  let mySeed = localStorage.getItem("mySeed");
  let seed = localStorage.getItem("seed");
  const [isLoggedIn,setIsLoggedIn] = useState("");

  const Login = () => {
    setIsLoggedIn(true);
  }

  const Logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {seed == mySeed ? (
        <Router>
          <Header Logout={Logout} />
          <Switch>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/contacts" component={Contacts}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>
          <Footer />
        </Router>
      ) : (
        <LoginForm Login={Login} />
      )}
    </div>
  );
}

export default App;
