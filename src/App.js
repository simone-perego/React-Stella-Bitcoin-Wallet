import React, { useState,useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import About from "./views/About.js";
import Home from "./views/Home.js";
import Contacts from "./views/Contacts.js";
import "./App.css";
import LoginForm from "./components/LoginForm.js";

function App() {
  const Adminseed = {
    seed: 123,
  };

  const [items, setItems] = useState([123]);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const [user, setUser] = useState({ seed: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.seed == Adminseed.seed) {
      console.log("Logged in");
      setUser({ seed: details.seed });
    } else {
      console.log("error");
      setError("error");
    }
  };

  const Logout = () => {
    console.log("Logged out");
    setUser({ seed: "" });
    setError("error");
  };

  return (
    <div className="App">
      {user.seed != "" ? (
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
        <Router>
          <Switch>
            <LoginForm Login={Login} error={error} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
