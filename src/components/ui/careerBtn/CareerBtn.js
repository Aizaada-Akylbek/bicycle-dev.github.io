import React from "react";
//img
import RightLine from "../../../assets/uiImg/Right.svg";
//css
import "./CareerBtn.css";
//router
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
//components

const CareerBtn = () => {
  const { t } = useTranslation();
  return (
    <div className="info-block">
              <NavLink to="/careers">

      <div className="info-title">
        <h4>{t("Reviews")}</h4>
        {/* <NavLink to="/careers"> */}
          <img src={RightLine} alt="employees" />
        {/* </NavLink> */}
      </div>
      {/* <NavLink to="/careers"> */}
        {t("More")}
        {/* <button>{t("More")}</button> */}
      {/* </NavLink> */}
      </NavLink>

    </div>
  );
};

export default CareerBtn;
