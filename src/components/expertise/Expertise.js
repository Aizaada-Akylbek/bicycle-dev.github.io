import React, { useState } from "react";
import partLogo from "../../assets/servicesLogos/icon.png";
import Line from "../../assets/servicesLogos/Line.png";
import Vector from "../../assets/servicesLogos/Vector.svg";
import Vector1 from "../../assets/servicesLogos/Vector1.svg";
import Vector2 from "../../assets/servicesLogos/Vector2.svg";
import "./Expertise.css";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DvrIcon from '@mui/icons-material/Dvr';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import StorageIcon from '@mui/icons-material/Storage';
import DrawIcon from '@mui/icons-material/Draw';

const Expertise = () => {
  const {t}=useTranslation()
  const expertiseData=[
    {
      icon: <DrawIcon sx={{ fontSize: 50, color: '#11295a' }}/>  ,
      title: t("Digital Designing: Where Innovation Meets Imagination!"),
      description:
        t("Crafting visually appealing and user-friendly interfaces. Every interaction meticulously designed for seamless navigation and engagement.Web Design: Bringing your online presence to life with captivating and functional designs that reflect your brand identity.Mobile Design: Tailored mobile experiences for iOS and Android apps, ensuring beauty, usability, and satisfaction.Stand out in the digital landscape with our design expertise, leaving a lasting impression on your users."),
      width: 40,
    },
    {
      icon: <StorageIcon sx={{ fontSize: 50, color: '#11295a' }}/>,
      title: t("Back-end: Powering Your Platform Behind the Scenes."),
      description:
       t( "The back-end of your website or application is like the engine that drives everything behind the scenes. It where all the complex processes and data management happen. Our back-end development team specializes in building this essential infrastructure, ensuring that your digital platform runs smoothly and efficiently. From managing databases and processing user requests to handling security measures and integrating with third-party services, we handle it all. With  our expertise, you can trust that your back-end is robust, scalable, and secure, providing a solid foundation for your online presence."),
      width: 57,
    },
    {
      icon: <PhonelinkSetupIcon sx={{ fontSize: 50, color: '#11295a' }}/>,
      title: t("Revolutionizing Mobility: Your Vision, Our Expertise!"),
      description:
        t("Our mobile development services are tailored to bring your ideas to life on the small screen. Whether you need a captivating iOS or Android app, our skilled developers are equipped with the latest tools and technologies to create intuitive and engaging mobile experiences. From concept to launch, we collaborate closely with you to ensure that your app meets your vision and resonates with your audience. Let us help you tap into the power of mobile technology to reach your customers wherever they are."),
      width: 57,
    },
    {
      icon: <DvrIcon sx={{ fontSize: 50, color: '#11295a' }}/>,
      title: t("Front-end: Transforming Vision into Seamless User Experiences."),
      description:
        t("Front-end development focuses on the user-facing aspects of a website or application, encompassing the design and functionality that users interact with directly. Our front-end development team crafts captivating interfaces that seamlessly blend aesthetics with functionality. With expertise in HTML, CSS, and JavaScript, we breathe life into your digital presence, ensuring intuitive navigation and engaging interactions for your users. From responsive designs to interactive elements, we're here to elevate your online brand experience."),
      width: 40,
    },
    {
      icon: <AccountTreeIcon sx={{ fontSize: 50, color: '#11295a' }}/>,
      title: t("Project Management: Steering Your Success."),
      description:
        t("Our project management services are designed to ensure the smooth and efficient execution of your IT projects from start to finish. With a focus on Agile methodologies such as Scrum, we collaborate closely with your team to define clear objectives, establish timelines, and allocate resources effectively. From initial planning to final delivery, our experienced project managers oversee every aspect of your project, keeping stakeholders informed and projects on track. With a proactive approach to problem-solving and a commitment to transparency, we ensure that your projects are delivered on time, within budget, and to the highest standards of quality. Let us take the reins on your IT projects, allowing you to focus on your core business objectives while we drive your success forward."),
      width: 100,
    },
  ]
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Если блок уже раскрыт, скрыть его
  };

  
  return (
    <div className="expertise">
      <div className="bg-long bg-expertise"/>
      <h2 className="main-title-second poppins dark-blue">{t('Expertise')}</h2>
      <div
        className="services-blocks"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        {expertiseData.map((expData, index) => (
          <div
            className="service-block"
            style={{ width: `${expData.width}%` }}
            key={expData.icon}
          >
            {/* <img src={expData.icon} alt={expData.icon} /> */}
            {/* <div >{expData.icon}</div> */}
            {/* <FontAwesomeIcon icon={expData.icon} style={{ color: "#11295a", fontSize: "54px" }}/> */}
            <h2>{expData.icon}</h2>
            <div className="service-block-title dark-blue">{expData.title}</div>
            <p>
              {/* {expData.description.slice(0, 150)}... */}
                         {/* Если блок раскрыт, показываем полный текст */}
                         {expandedIndex === index
                ? expData.description
                : expData.description.slice(0, 150) + " ... "}
              {/* Кнопка для раскрытия текста */}
              {expData.description.length > 150 && (
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
    </div>
  );
};

export default Expertise;
