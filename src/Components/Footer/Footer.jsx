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
        <p>
          <a target="blank" href="https://facebook.com/cripumps">
            www.facebook.com/cripumps
          </a>
        </p>
      </div>
      <div>
        <img src="./assets/globe.png" alt="globe" />
        <p>
          <a target="blank" href="https://crigroups.com">
            www.crigroups.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
