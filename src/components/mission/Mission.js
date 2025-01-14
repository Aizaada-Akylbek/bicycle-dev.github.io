import React from "react";
//css
import "./Mission.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Mission = () => {
  const {t}=useTranslation()
  return (
    <div className="mission">
      <div className="mission-info ">
        <b>{t('OUR MISSION')}</b>
        <p className="dark-blue">
          {t('Our mission is to')}{" "}
          <span className="light-blue">
            {t('create an inclusive and advanced world')}
          </span>{" "}
          {t('through digital and technological transformation.')}
        </p>
        <NavLink to="/services">
        <button className="main-btn">{t('Our services')}</button>


        </NavLink>
      </div>
    </div>
  );
};

export default Mission;
