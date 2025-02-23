import React from "react";
import "./WorkingTogether.css";
//img
import contactUsImage from "../../assets/contactUs/Image.png";
import WhatsApp from "../../assets/logos/Whatsapp.svg";
import Phone from "../../assets/logos/Phone.svg";
import Facebook from "../../assets/contactUs/Facebook.svg";
import Twitter from "../../assets/contactUs/Twitter.svg";
import LinkedIn from "../../assets/contactUs/LinkedIn.svg";
import Instagram from "../../assets/contactUs/Instagram.svg";
import YouTube from "../../assets/contactUs/YouTube.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import GetInTouch from "../getInTouch/GetInTouch";

const WorkingTogether = () => {
  const { t } = useTranslation();
  return (
    <div className="working-together">
      <div className="contact-interested container ">
        {/* <div className="bg-small contact-interested-bg" /> */}
    
        {/* <div style={{backgroundColor:"green"}} className="contact-address"> */}
        {/* <div style={{backgroundColor:"green"}} > */}

          <GetInTouch/>


          {/* </div> */}

        <div className="contact-img">
          <img src={contactUsImage} alt="contactImg " />
        </div>
      </div>
    </div>
  );
};

export default WorkingTogether;
