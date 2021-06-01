import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src="./assets/call.png" alt="call" />
        <p>
          Toll free <b>1800 200 1234</b>
        </p>
      </div>
      <div>
        <img src="./assets/fb.png" alt="fb" />
        <p>www.facebook.com/cripumps</p>
      </div>
      <div>
        <img src="./assets/globe.png" alt="globe" />
        <p>www.crigroups.com</p>
      </div>
    </footer>
  );
};

export default Footer;
