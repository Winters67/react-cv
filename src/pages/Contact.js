import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Strasbourg</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0649461444">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("N° de téléphone copié !");
                  }}
                >
                  0649461444
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
