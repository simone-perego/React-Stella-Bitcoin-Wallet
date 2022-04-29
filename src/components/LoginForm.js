import React, {useState} from "react";
import "../App.css";

function LoginForm({Login, error}){

  const [details,setDetails] = useState({seed:""});

  const submitHandler = e  => {
    e.preventDefault();

    Login(details);
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