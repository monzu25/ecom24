import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Buy With Confident</h4>
        <p>Quality Is Our First Priority</p>
        {/* <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>

      <div className="midFooter">
        <h1>Focus.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; MD MONZU</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="#">Instagram</a>
        <a href="#">Youtube</a>
        <a href="https://www.facebook.com/Eng.TuheenMonzu/">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
