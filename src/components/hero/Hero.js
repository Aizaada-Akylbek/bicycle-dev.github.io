import React from "react";
import "./Hero.css";
import CareerBtn from "../ui/careerBtn/CareerBtn";
import EmployeesBtn from "../ui/employeesBtn/EmployeesBtn";
import { useTranslation } from "react-i18next";

const Hero = ({handleScroll}) => {
  const { t } = useTranslation();
  return (
    <div className="hero container dark-blue">
      <div className="bg-long hero-bg-long" />

      <h1 className="main-title poppins">
        {t("Technical innovation for")}
        <span className="middle-blue">{t(" dynamic growth")}</span>
      </h1>
      <p className="main-title-info">
        {t("We are pleased to offer a wide range of high quality IT services.")}
      </p>
      <div className="hero-btns">
        <CareerBtn handleScroll={handleScroll} />
        <EmployeesBtn />
      </div>
      <div className="xl-circle">
        <div className="xl-circle-inner"></div>
      </div>

      <div className="l-circle">
        <div className="xl-circle-inner"></div>
      </div>
    </div>
  );
};

export default Hero;
