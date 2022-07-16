import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/Emmanuel.jpg" alt="profil-pic" />
          <h3>Emmanuel Verbrugge</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/" className="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </Link>
          </li>
          <li>
            <Link to="/competences" className="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100076252860261"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/emmanuel-verbrugge-3b211b145"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Winters67"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.https://twitter.com/VBG_Winters"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>Winters|dev 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
