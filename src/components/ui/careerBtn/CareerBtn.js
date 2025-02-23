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
      <NavLink to="/careers" className="info-block">
          <div className="info-title">
            <h4>{t("Customer Reviews")}</h4>
              <img src={RightLine} alt="employees" />
          </div>
            {t("More")}
      </NavLink>
  );
};

export default CareerBtn;
