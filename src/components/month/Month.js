import React from "react";
import { useTranslation } from "react-i18next";

const Month = ({ year, month, holidays }) => {
  const { t } = useTranslation();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const daysInMonth = endDate.getDate();
  const monthName = t(startDate.toLocaleString("en-US", { month: "long" }));

  const startDayOfWeek = startDate.getDay();

  const daysFromPrevMonth = startDayOfWeek === 0 ? 6 : startDayOfWeek - 1;

  const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

  const totalDays = daysFromPrevMonth + daysInMonth;
  const daysFromNextMonth = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

  const dayNames = [
    t("Mon"),
    t("Tue"),
    t("Wed"),
    t("Thu"),
    t("Fri"),
    t("Sat"),
    t("Sun"),
  ];

  return (
    <div className="month">
      <h2>{monthName}</h2>
      <div className="days">
        {dayNames.map((day) => (
          <div key={day} className="day day-name">
            {day}
          </div>
        ))}
        {[
          ...Array(daysFromPrevMonth)
            .fill(null)
            .map((_, index) => (
              <div key={`prev-${index}`} className="day disabled">
                {lastDayOfPrevMonth - daysFromPrevMonth + index + 1}
              </div>
            )),
          ...Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
            (day, index) => {
              const currentDate = new Date(year, month, day);
              const isHoliday = holidays.some((holiday) => {
                const holidayDate = new Date(holiday + "T00:00:00");
                return currentDate.toDateString() === holidayDate.toDateString();
              });
              

              return (
                <div
                  key={index}
                  className={`day ${isHoliday ? "holiday" : ""}`}
                >
                  {day}
                </div>
              );
            }
          ),
          ...Array.from({ length: daysFromNextMonth }, (_, i) => i + 1).map(
            (day, index) => (
              <div key={`next-${index}`} className="day disabled">
                {day}
              </div>
            )
          ),
        ]}
      </div>
    </div>
  );
};

export default Month;
