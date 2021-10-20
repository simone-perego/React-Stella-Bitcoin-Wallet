import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./views/About.js";
import Home from "./views/Home.js";
import Contacts from "./views/Contacts.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contacts" component={Contacts}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
