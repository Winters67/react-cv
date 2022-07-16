import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
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
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
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
              href="https://www.facebook.com/profile.php?id=100076252860261"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100076252860261"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
