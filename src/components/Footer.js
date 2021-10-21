import "../App.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

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
        <a className="social" href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a className="social" href="https://www.youtube.com">
          <FaYoutube />
        </a>
        <a className="social" href="https://www.twitter.com">
          <FaTwitter />
        </a>
        <a className="social" href="https://www.instagram.com">
          <FaInstagram />
        </a>
      </p>
    </div>
  );
}

export default Footer;
