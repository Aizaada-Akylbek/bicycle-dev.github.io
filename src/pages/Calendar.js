import React from "react";
// import { NavLink } from "react-router-dom";
// import EmployeesBtn from "../components/ui/employeesBtn/EmployeesBtn";
// import CareerBtn from "../components/ui/careerBtn/CareerBtn";
import AppCalendar from "../components/appCalendar/AppCalendar";
import "../styles/Calendar.css";
// import DevOperations from "../components/ui/devOperations/DevOperations";
import { useTranslation } from "react-i18next";

const Calendar = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="hero-calendar dark-blue">
        <div className="year-calendar">
          <div className="bg-medium bg-year-calendar" />

          <AppCalendar />
        </div>
        {/* <div className="calendar-office">
          <div className="circle xs-calendar-office1">
            <div className="circle-inner" />
          </div>
          <div className="circle xs-calendar-office2">
            <div className="circle-inner" />
          </div>
          <h4 className="poppins">
            {t("Office ipsum you must be muted. Activities just.")}{" "}
          </h4>
          <p>
            {t("Office ipsum you must be muted. Users an meat ocean regroup nobody. Staircase ui shoulder squad hear reality club previous would. Savvy production wheel would 4-blocker inclusion were can't tiger. Product stand knowledge keywords commitment is cross-pollination is we. Out fruit better underlying activities floor. Well.")}.
          </p>

          <p>
            Office ipsum you must be muted. Asserts effects winning hours book
            they nobody silently good. Ask live nor cc business. Inclusion let's
            value-added strategy then no identify algorithm organic lean.
            Slipstream marginalised indicators move here be high-level canatics
            nobody. Impact let's hiring protocol done strategies hear are third.
            Innovation better don't need uat churning activities requirements.
            Red-flag on globalize meat i'm wheel. Synergy.
          </p>
        </div>
        <DevOperations /> */}
      </div>
    </div>
  );
};

export default Calendar;
