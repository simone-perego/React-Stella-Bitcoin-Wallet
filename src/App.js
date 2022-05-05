import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import Home from "./views/Home";
import Contacts from "./views/Contacts";
import LoginPage from "./views/LoginPage";
import "./App.css";

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
      {seed == mySeed || isLoggedIn ? (
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
        <LoginPage Login={Login} />
      )}
    </div>
  );
}

export default App;
