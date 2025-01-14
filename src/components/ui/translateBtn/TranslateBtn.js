import React, { useState } from "react";
import "./TranslateBtn.css";
import i18n from "../../../i18n/i18n";

const TranslateBtn = () => {
  const [active, setActive] = useState("en");
  const options = [
    { label: "EN", value: "en" },
    { label: "RU", value: "ru" },
    { label: "DE", value: "de" },
  ];
  function handleChange(event) {
    const language = event.target.value;
    console.log(language);
    i18n.changeLanguage(language);
    setActive(language);
  }

  return (
    <div className="translateBtn dark-blue">
      <select className="sel" value={active} onChange={handleChange} style={{ border: "none" }}>
        {options.map((option) => (
          <option className="opt" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TranslateBtn;
