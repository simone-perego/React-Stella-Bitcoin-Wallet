import React, {useState} from "react";
import "../App.css";

function LoginForm({Login}){

  const [details,setDetails] = useState({seed:""});
  const [user, setUser] = useState();
  let mySeed = localStorage.getItem("mySeed");
  const [error, setError] = useState("");

  const submitHandler = e  => {
    e.preventDefault();
    localStorage.setItem('seed',details.seed);
    if (details.seed == mySeed) {
      console.log("Logged in");
      setUser({ user });
    } else {
      console.log("error");
      setError("SEED ERRATO RIPROVARE");
    }
    Login();
  }

  return(
    <div className="Login">
    <form onSubmit={submitHandler}>    
      <div>
        <input type="text" name="seed" id="seed" placeholder="Il tuo Seed" onChange={e => setDetails({...details, seed: e.target.value})} value={details.seed}/>
      </div>
      <div>
        <input type="submit" value="LOGIN"></input>
      {(error != "") ? (<div><span>{error}</span></div>) : ""}
      </div>
    </form>
    </div>
  )
}

export default LoginForm;