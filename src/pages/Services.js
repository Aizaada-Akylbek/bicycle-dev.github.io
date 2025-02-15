import React from "react";
import "../styles/Services.css";
import { NavLink } from "react-router-dom";
import Expertise from "../components/expertise/Expertise";
import Slider from "../components/slider/Slider";
import ItOutstaffing from "../components/itOutstaff/ItOutstaffing";
import DevOperations from "../components/ui/devOperations/DevOperations";
import { useTranslation } from "react-i18next";

const Services = () => {
  const {t}=useTranslation()
  return (
    <div>
      <div className="services">
        <div className="bg-long bg-long-services" />
        <div className="bg-small bg-small-services" />
        <div className="circle l-circle-services">
          <div className="circle-inner" />
        </div>
        <div className="circle s-circle-services">
          <div className="circle-inner" />
        </div>
        <div className="circle xs-circle-services">
          <div className="circle-inner" />
        </div>
        <div className="container">
          <div className="hero-services">
            <h2 className="main-title poppins dark-blue">
              {t('Elevate')}
               <br />
             {t('Your Efficiency')}:
            </h2>
            <div className="main-title-info services-info">
              {t('Tailored IT Solutions with Outsourcing')} & <br /> {t('Outstaffing Excellence')}!
            </div>
            <button className="main-btn">
              <NavLink to="/contacts">{t('Contacts')}</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <Expertise />
      </div>
      {/* <Slider /> */}
      <div className="container">
        <div className="it-outsourcing">
          <div className="bg-medium bg-outsource" />
          <div className="main-title-second poppins middle-blue">
            {t("IT-outsourcing")}
          </div>
          <p className="it-outsourcing-info main-text-h3 dark-medium">
           {t("Combining your ideas with our technical expertise, we develop a customized (unique) software product or implement creative ICT project for advancement and internationalization of your business.Tailoring our approach to your needs and expectations, we can also take charge of day-to-day IT functions by constructing transparent and secure technical operations and processes for smooth functioning of your company.We offer a wide range of ICT services including software (web and App) development, IT infrastructure management, database and data center operations, technical support (network maintenance and technical security support) etc.")}
          </p>
          <button className="main-btn ">
            <NavLink to="/contacts">{t("Contact us")}</NavLink>
          </button>
        </div>
      </div>
      <div className="container">
      <ItOutstaffing />

      {/* <DevOperations /> */}
      </div>
    </div>
  );
};

export default Services;
