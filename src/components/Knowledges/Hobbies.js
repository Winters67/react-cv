import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérets</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-chess ">
            <span>Jeux de strategie</span>
          </i>
        </li>{" "}
        <li className="hobby">
          <i className="fas fa-book ">
            <span>Lecture</span>
          </i>
        </li>{" "}
        <li className="hobby">
          <i className="fas fa-cube ">
            <span>Impression 3D</span>
          </i>
        </li>{" "}
        <li className="hobby">
          <i className="fas fa-hammer ">
            <span>Bricolage</span>
          </i>
        </li>{" "}
        <li className="hobby">
          <i className="fas fa-bicycle ">
            <span>Vélo</span>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
