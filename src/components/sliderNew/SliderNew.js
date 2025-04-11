import React, { useState, useEffect } from "react";
import Kamasys from "../../assets/partners/kamasys_logo.jpg";
import GmbH from "../../assets/partners/mk_logic_rgb_338_white.png";
import Osma from "../../assets/partners/logo.a80f457e.svg";
import HTP from "../../assets/partners/Copy of htpkr_logo PNG.png";
import Grand from "../../assets/partners/logo_grand.png";
import "./SliderNew.css";

const SliderNew = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [Kamasys, GmbH, Osma, HTP, Grand];
    const slideCount = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
        }, 9000);

        return () => clearInterval(interval);
    }, [slideCount]);

    return (
        <div className="slider">
            <div className="slider-track" style={{ display: "flex", gap: "20px" }}>
                {slides.concat(slides).map((img, index) => (
                    <div key={index} className="slideNew">
                        <img src={img} alt="company" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SliderNew;
