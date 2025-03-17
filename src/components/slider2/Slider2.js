import React, { useState, useEffect } from "react";
//img
import samsung from "../../assets/companyLogos/samsung.png";
import google from "../../assets/companyLogos/google.svg";
import lg from "../../assets/companyLogos/lg.svg";
import microsoft from "../../assets/companyLogos/microsoft.svg";
import slack from "../../assets/companyLogos/slack.svg";
import sony from "../../assets/companyLogos/sony.png";
import Marquee from "react-fast-marquee";
import Kamasys from '../../assets/partners/kamasys_logo.jpg'
import GmbH from '../../assets/partners/mk_logic_rgb_338_white.png'
import Osma from '../../assets/partners/logo.a80f457e.svg'
import HTP from '../../assets/partners/Copy of htpkr_logo PNG.png'
import Grand from "../../assets/partners/logo_grand.png"

//css
import "./Slider2.css";

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [Kamasys, GmbH, Osma, HTP, Grand];
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 6000); // Adjust the interval duration (in milliseconds) based on your preference

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="slider">
      <Marquee velocity={10}>
        {slides.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt="company" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider2;