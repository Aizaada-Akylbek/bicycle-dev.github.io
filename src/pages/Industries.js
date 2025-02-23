import React, { useState } from "react";
import "../styles/Industries.css";
import DevOperations from "../components/ui/devOperations/DevOperations";
import { NavLink } from "react-router-dom";
import Review from "../components/review/Review";
import { useTranslation } from "react-i18next";
import CategoryIcon from '@mui/icons-material/Category';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

const Industries = () => {
  const {t}=useTranslation()
  const industriesData = [
    {
      number: <CategoryIcon sx={{ fontSize: 50 }}/>,
      title:t("Product certification") ,
      description:
       t( "Certification systems are pivotal in ensuring compliance, quality assurance, and industry standards adherence across various sectors. Our expertise in certification systems encompasses the design, implementation, and management of robust frameworks tailored to meet the specific needs of organizations.From protocol implementation to testing and certification, we provide comprehensive technical solutions to help businesses navigate complex regulatory landscapes and achieve certification. Our comprehensive solutions ensure that devices meet strict performance standards, guaranteeing optimal compatibility and user satisfaction.Get our broad expertise in innovative technical solutions for certification, adaptable to diverse needs, from local industries to global regulatory standards."),
    },
    {
      number: <DinnerDiningIcon sx={{ fontSize: 50 }}/>,
      title: t("Foodservice and Catering Industry"),
      description:
        t("In the dynamic world of food service and catering, efficiency, accuracy, and customer satisfaction are paramount. Our expertise in this industry encompasses a range of tailored IT solutions designed to streamline operations, optimize workflows, and elevate guest experiences.From intuitive POS (Point of Sale) systems and online ordering platforms to inventory management software and catering event management tools, we leverage cutting-edge technology to address the unique needs of food service providers and caterers. Our solutions empower businesses to streamline order processing, manage inventory effectively, and deliver seamless catering experiences.With a deep understanding of the challenges and opportunities in the food service and catering industry, we are committed to delivering innovative technology-driven solutions that help businesses thrive and exceed customer expectations."),
    },
    {
      number: <EmojiTransportationIcon sx={{ fontSize: 50 }}/>,
      title: t("Transportation"),
      description:
        t("In the dynamic world of transportation, reliability and time-management are significant. From advanced route optimization and fleet management systems to real-time tracking and logistics analytics platforms, we leverage cutting-edge technology to streamline operations, improve visibility, and optimize resource utilization. Our solutions empower transportation companies to enhance customer experiences, reduce costs, and drive business growth in today's competitive market."),
    },
    {
      number: <LocalAtmIcon sx={{ fontSize: 50 }}/>,
      title: t("Finance"),
      description:
       t( "In the ever-changing realm of financial technology (fintech), adaptability, security, and inventive solutions are essential. From state-of-the-art payment processing systems and digital banking platforms to blockchain innovations and automated investment advisory services, we harness advanced technologies to cater to the unique requirements of fintech firms, banking institutions, and financial organizations. Our solutions empower enterprises to streamline operations, minimize expenses, and deliver seamless digital experiences to their customers.With a profound comprehension of the intricacies and potential of the fintech sector, we are dedicated to delivering inventive IT solutions that enable businesses to flourish and outpace their competitors."),
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Если блок уже раскрыт, скрыть его
  };
  return (
    <div className="industries ">
      <div className="container">
        <div className="circle s-circle-industries">
          <div className="circle-inner" />
        </div>
        <div className="industries-hero">
          <div className="bg-medium bg-industries" />
          <div className="circle l-circle-industries">
            <div className="circle-inner" />
          </div>
          <div className="circle xs-circle-industries">
            <div className="circle-inner" />
          </div>
          <h2 className="main-title poppins dark-blue">
            {t("Service Excellence across Different Industries!")}
          </h2>
          <p className="main-title-info">
          {t('Benefit from our extensive expertise in tech solutions, catering to a range of needs, from local applications to global digital platforms.')}
          </p>
          <NavLink to="/contacts">
            {" "}
            <button className="main-btn">{t("Contact us")}</button>
          </NavLink>
        </div>

        <div className="industries-cards">
          <div className="bg-medium bg-industries-cards" />
          {industriesData.map((el, index) => (
            <div className="industries-card">
              <h2 className="poppins dark-blue">{el.number}</h2>
              <h4 className="dark-blue">{el.title}</h4>
              <p>
                 {/* {expData.description.slice(0, 150)}... */}
                         {/* Если блок раскрыт, показываем полный текст */}
                         {expandedIndex === index
                ? el.description
                : el.description.slice(0, 150) + " ... "}
              {/* Кнопка для раскрытия текста */}
              {el.description.length > 150 && (
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => handleExpand(index)}
                >
                  {expandedIndex === index ? "" : t("more")}
                </span>
              )}
              </p>
            </div>
          ))}
        </div>
        {/* <Review /> */}
        {/* <DevOperations /> */}
      </div>
    </div>
  );
};

export default Industries;
