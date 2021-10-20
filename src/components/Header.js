import "../App.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Header() {
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
    </div>
  );
}

export default Header;
