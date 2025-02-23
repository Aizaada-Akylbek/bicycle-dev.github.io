import React from "react";
import RightLine from "../../../assets/uiImg/Right.svg";
import "../careerBtn/CareerBtn.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const EmployeesBtn = () => {
  const { t } = useTranslation();
  return (
    <NavLink to="/contacts" className="info-block">     
      <div className="info-title">
        <h4>{t("Contact us")}</h4>
        {/* <NavLink to="https://wa.me/00491775571132"> */}
          <img src={RightLine} alt="employees" />
        {/* </NavLink> */}
      </div>
      {/* <NavLink to="https://wa.me/00491775571132"> */}
        {t("More")}
        {/* <button>{t("More")}</button> */}
      {/* </NavLink> */}
    </NavLink>

  );
};

export default EmployeesBtn;
