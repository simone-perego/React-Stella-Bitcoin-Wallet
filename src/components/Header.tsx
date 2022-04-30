import "../App.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

function Header({Logout}) {

  const logoutHandler = e  => {
    e.preventDefault();
    localStorage.setItem('seed',"");
    Logout();
  }

  return (
    <div className="navbar">
      <Link className="icon-home-button" to="/">
        <FaHome />
      </Link>
      <Link className="icon-button" to="/about">
        About us
      </Link>
      <Link className="icon-button" to="/contacts">
        Contact us
      </Link>
      <Link className="icon-logout-button" name="Logout" to="/" onClick={logoutHandler}>
        <FaTimesCircle />
      </Link>
    </div>
  );
}

export default Header;
