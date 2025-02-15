import React from "react";
import { NavLink } from "react-router-dom";
import "./DevOperations.css";
import { useTranslation } from "react-i18next";


const DevOperations = () => {

  const {t}=useTranslation()
  
  return (
    <div className="development">
      <h4 className="poppins">
        {t("Do your development")}
        <br /> {t("operations need a level-up?")}
      </h4>
      <p>{t("Let's dive in to see the value Bicycle Dev can provide you")}</p>
      <NavLink to="/employees">
        {" "}
        <button className="main-btn">{t("Contact our experts")}</button>
      </NavLink>
      <div className="circle circle-development">
        <div className="circle-inner" />
      </div>
      <div className="circle s-circle-development">
        <div className="circle-inner" />
      </div>
    </div>
  );
};

export default DevOperations;
