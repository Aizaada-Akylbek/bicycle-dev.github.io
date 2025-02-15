import React from "react";
import "../styles/Careers.css";
import CareersCards from "../components/careersCards/CareersCards";
import { NavLink } from "react-router-dom";
import PositionCareers from "../components/positionCareers/PositionCareers";
import DevOperations from "../components/ui/devOperations/DevOperations";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const {t}=useTranslation()
  return (
    <div className="container">
      <div className="hero-careers">
        <h2 className="main-title poppins">
          {t("Career at")} <br /> Bicycle Dev
        </h2>
        <p className="main-title-info">
          {t("Step into our multicultural environment filled with creative and driven individuals.")} 
        </p>
        <NavLink to="/positions" href="#main-positions">
          {" "}
          <button className="main-btn">{t("Apply now")}</button>
        </NavLink>
      </div>
      <CareersCards />
      <PositionCareers />
      {/* <DevOperations /> */}
    </div>
  );
};

export default Careers;
