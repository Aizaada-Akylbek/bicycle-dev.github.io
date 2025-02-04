import React from "react";
import "./AppCalendar.css";
import Month from "../month/Month";
import { useTranslation } from "react-i18next";

const AppCalendar = () => {
  const {t}=useTranslation()
  const year = new Date().getFullYear();
  const holidays = [
    "2025-01-01",
    "2025-01-02",
    "2025-01-03",
    "2025-01-04",
    "2025-01-05",
    "2025-01-06",
    "2025-01-07",
    "2025-02-23",
    "2025-03-08",
    "2025-03-08",
    "2025-05-01",
    "2025-05-05",
    "2025-05-09",
    "2025-08-31",
    "2025-10-07",
  ];
  const months = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="appCalendar">
      <div className="circle s-circle-calendar2">
        <div className="circle-inner" />
      </div>
      <div className="calendar">
        <h1 className="year middle-blue poppins">{year} {t("Calendar")} </h1>
        <div className="months">
          {months.map((month) => (
            <Month key={month} year={year} month={month} holidays={holidays} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppCalendar;
