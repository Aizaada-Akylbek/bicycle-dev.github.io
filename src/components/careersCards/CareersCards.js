import React, { useState } from "react";
import "./CareersCards.css";
import { useTranslation } from "react-i18next";

//icons
import TeamIcon from '../../assets/benefitImgs/team.svg'
import ColloborateIcon from '../../assets/benefitImgs/communication.svg'
import BagIcon from '../../assets/benefitImgs/bag.svg'
import WorldIcon from '../../assets/benefitImgs/world.svg'
import BudgetIcon from '../../assets/benefitImgs/calendar.svg'

const CareersCards = () => {
  const {t}=useTranslation()
  const cardText=[
    {
      img: ColloborateIcon,
      title: t("Collaborative teamwork and supportive working culture "),
      descr:
        t("We believe in the power of team effort and encourage openness, respect and collaboration."),
    },
    {
      img: BagIcon,
      title: t("Hybrid and flexible working models"),
      descr:
        t("We are committed to creating a work environment that promotes the growth and success of every employee"),
    },
    {
      img: WorldIcon,
      title: t("Growth and development"),
      descr:
        t("Capacity development opportunities (mentoring, on-the-job learning, ICT trainings, English and German courses)"),
    },
    {
      img: BudgetIcon,
      title: t("Attractive and competitive compensation"),
      descr:
        t("We offer attractive and competitive wages, valuing the contribution of each employee to the success of the company."),
    },
  ]

  return (
    <div className="careers-cards dark-blue">
      <div className="bg-medium bg-careers-cards"/>
      <div className="career-card big">
        <div className="career-card-main-title">
        <h3 className="poppins middle-blue ">
          <img src={TeamIcon}/>
        </h3>
        <h4>{t("Team workshops and events")}</h4>
        </div>
        <hr/>
        <p>
        {t("Share experiences, deepen your knowledge and create new connections in a friendly and supportive environment. Opportunity for learning, growth and development for you!")}
        </p>
      </div>
      {cardText.map((el, index) => (
        <div className="career-card small">
          <div className="career-card-main-title">
          <h3 className="poppins middle-blue">
            <img src={el.img}/>
          </h3>
          <h4>{el.title}</h4>
          </div>
          <hr/>
          <p>{el.descr}</p>
        </div>
      ))}
    </div>
  );
};

export default CareersCards;
