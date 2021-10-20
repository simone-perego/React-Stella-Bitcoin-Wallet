import "../App.css";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <Link className="footer-link" to="/about">
        About us
      </Link>
      <Link className="footer-link" to="/contacts">
        Contact us
      </Link>
      <p>
        <a className="social">
          <FaFacebook />
        </a>
        <a className="social">
          <FaYoutube />
        </a>
        <a className="social">
          <FaTwitter />
        </a>
        <a className="social">
          <FaInstagram />
        </a>
      </p>
    </div>
  );
}

export default Footer;
