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
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="emmanuel.vbg@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Adresse email copié !");
                  }}
                >
                  emmanuel.vbg@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.facebook.com/profile.php?id=100076252860261"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Facebook</h4>
              <i className="fab fa-facebook"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/emmanuel-verbrugge-3b211b145"
              target="_blank"
              rel="noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/Winters67"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://www.https://twitter.com/VBG_Winters"
              target="_blank"
              rel="noreferrer"
            >
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
