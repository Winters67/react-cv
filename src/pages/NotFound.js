import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolé cette page n'existe pas !</h3>
        <Link to="/" className="navActive">
          <i className="fas fa-home"></i>
          <span>Accueil</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
