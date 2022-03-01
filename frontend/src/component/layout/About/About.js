import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    // window.location = "https://www.facebook.com/Eng.TuheenMonzu/";
    window.open('https://devs-monzu.netlify.app/', '_blank');
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://lh3.googleusercontent.com/a-/AOh14GhMNiKJyoestMUJkn1dXufnJwpnp40SU5AIcoCSCQ=s83-c-mo"
              alt="Founder"
            />
            <Typography>MD MONZU</Typography>
            <Button onClick={visitInstagram} color="primary">
             Visit My Profile
            </Button>
            <span>
              This is a sample wesbite made by @mdmonzu. Only with the
              purpose as practice assignment with MERN Stack technology 
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connected With</Typography>
            <a
              href="https://www.linkedin.com/in/developer-monzu/"
              target="blank"
            >
              <LinkedInIcon className="linkedInSvgIcon" />
            </a>

            <a href="https://www.facebook.com/Eng.TuheenMonzu/" target="blank">
              <FacebookIcon className="facebookSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
