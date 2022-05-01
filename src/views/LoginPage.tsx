import React, {useState} from "react";
import "../App.css";

function LoginPage({Login}){

  const [details,setDetails] = useState({seed:""});
  let mySeed = localStorage.getItem("mySeed");
  const [error, setError] = useState("");

  const submitHandler = e  => {
    e.preventDefault();
    if (details.seed == mySeed) {
      localStorage.setItem('seed',details.seed);
      console.log("Logged in");
      Login();
    } else {
      console.log("error");
      setError("SEED ERRATO RIPROVARE");
    }
  }

  return(
    <div className="Login">
    <form onSubmit={submitHandler}>    
      <div>
        <input className="currency" type="text" name="seed" id="seed" placeholder="Il tuo Seed" onChange={e => setDetails({...details, seed: e.target.value})} value={details.seed}/>
      </div>
      <div>
        <input type="submit" value="LOGIN"></input>
      {(error != "") ? (<div><span>{error}</span></div>) : ""}
      </div>
    </form>
    </div>
  )
}

export default LoginPage;