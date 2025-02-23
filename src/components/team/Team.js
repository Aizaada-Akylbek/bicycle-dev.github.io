import React from "react";
import Askat from "../../assets/team/Askat.jpg";
import Farkhat from "../../assets/team/Farkhat.jpg";
import Zhandos from "../../assets/team/Zhandos.jpg";
import Adilet from "../../assets/team/Adilet.jpg";
import Aizaada from '../../assets/employeesImgs/Снимок экрана 2024-05-23 в 2.44.50 PM.png';
import { NavLink } from "react-router-dom";
import LD from "../../assets/logoLinks/LinkedIn.svg";
import "./Team.css";
import { useTranslation } from "react-i18next";

const Team = () => {
  const teamData = [
    {
      img: Askat,
      name: "Askat Baktiyar",
      position: "Business Development Director",
      lnkdn: "https://www.linkedin.com/in/askat-baktiyar/",
    },
    {
      img: Farkhat,
      name: "Farkhat Baktiyar",
      position: "Business Development Manager",
      lnkdn: "https://www.linkedin.com/in/farkhat-baktiyar-8626791a8/",
    },
    {
      img: Adilet,
      name: "Adilet Ryskulov",
      position: "Backend developer",
      lnkdn: "https://www.linkedin.com/in/adilet-ryskulov-b4a11920a/",
    },
    {
      img: Aizaada,
      name: "Aizaada Akylbekova",
      position: "Frontend Developer",
      lnkdn: "https://www.linkedin.com/in/aizaada-akylbekova/",
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="team container">
      <div className="team-block">
        <div className="main-title-second poppins dark-blue team-title">
          <span className="middle-blue">{t("Teamwork")}</span>{" "}
          {t("is the only way we work")}
        </div>
        <p>
          {t(
            "At the heart of our company lies an exceptional team of talented individuals, each bringing unique expertise and passion to the table. From experienced developers crafting elegant code to visionary designers shaping user experiences, we are a cohesive unit dedicated to innovation and excellence."
          )}
        </p>
      </div>
      <div className="cards-team">
        {teamData.map((el, index) => (
          // <div className="card-team" key={index}>
            <div className="image-container card-team" key={el.img}>
              <img src={el.img} alt="user" className="img-team" />
              <div className="image-text">
                <h6>{el.position}</h6>
                <h3>{el.name}</h3>
                <NavLink to={el.lnkdn}>
                  <img src={LD} alt="" />
                </NavLink>
              </div>
            </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
