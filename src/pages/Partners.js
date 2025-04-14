import React from "react";
import "../styles/Partners.css";
import PartnersCards from "../components/partnersCards/PartnersCards";
import PartnersFeedback from "../components/partnersFeedback/PartnersFeedback";
import Review from "../components/review/Review";
import DevOperations from "../components/ui/devOperations/DevOperations";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Partners = () => {
  const {t}=useTranslation()
  return (
    <div className="container">
      <div className="hero-partners">
        <div>
          <h2 className="main-title poppins">
           {t("Partners success")} <br />
            {t("is our success")}
          </h2>
          <p className="main-title-info">
            {t("Step into our multicultural environment")} <br /> {t("filled with creative and driven individuals.")} 
          </p>

         <NavLink to="/contacts" className="main-btn">
              {t('Contact us')}
            </NavLink>        </div>
      </div>
      <PartnersCards />
      {/* <Review /> */}
      {/* <DevOperations /> */}
    </div>
  );
};

export default Partners;
