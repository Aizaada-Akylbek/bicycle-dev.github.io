import React, { useState } from 'react';
import './PartnersFeedback.css';
import kamasys from '../../assets/partners/kamasys.svg';
import avatarkamasys from '../../assets/partners/AvatarKamasys.png';
import mkLogic from '../../assets/partners/mk_logic_rgb_338_white.png';
import HTP from '../../assets/partners/Copy of htpkr_logo PNG.png';
import Osma from '../../assets/partners/logo.a80f457e.svg';
import { useTranslation } from 'react-i18next';


const PartnersFeedback = () => {
  const {t}=useTranslation()
  const slides = [
    {
      text: t("We have been working with Bicycle Dev in the format of outsourcing and outstaffing. Currently, several specialists have been working on our projects for over a year as frontend developers and backend engineers. They are effectively integrated into our team and continue to make a significant contribution to the development of our products. In particular, they help us with the optimization and migration of an administrative panel for restaurant managers, which significantly streamlines process management."),
      text2:t("We recommend Bicycle Dev as a reliable and flexible IT service provider for companies looking for long-term and effective cooperation."),
      name: t('Marcel Konrad'),
      position: t('CEO, Kamasys GmbH'),
      img:avatarkamasys, 
      logo:kamasys
    },
    {
      text:t( "We needed temporary reinforcement for the optimization and migration of the smart home gadget certification platform from one technology stack to another, and Bicycle Dev quickly provided us with a frontend developer in the format of outstaffing. The specialist quickly integrated into the workflow, helped us bridge the staffing gap, ensured the smooth operation of the project, and made a valuable contribution to the final result."),
      text2:t("We appreciate the flexibility and professionalism of Bicycle Dev and can recommend them as a reliable partner for both short-term and long-term tasks."),
      name: t('Mirko Klefker'),
      position: t('CEO, MK Logic GmbH'),
      img:avatarkamasys, 
      logo:mkLogic
    },
    {
      text:
       t( "Bicycle Dev is an active resident of the High Technology Park of the Kyrgyz Republic and is successfully expanding IT exports to Europe. Thanks to its professional team and high work standards, the company demonstrates steady growth, creates new job opportunities, and contributes to the development of the country's IT industry."),
        text2:t("We are proud that Bicycle Dev represents Kyrgyzstan in the international market as a reliable technology partner, affirming the high level of domestic IT specialists."),
      name: '',
      position: t('Director, HTP KR'),
      img:avatarkamasys,
      logo:HTP
    },
    {
      text:
      t(  "Bicycle Dev has developed a user-friendly and functional website for us and continues to provide ongoing support. Additionally, their team assists us to automate the process of receiving construction materials, which significantly simplifies our operations on site."),
        text2:t("We value Bicycle Dev’s professionalism and attentive approach to our needs, and we recommend them as a reliable IT partner for construction companies."),
      name: t('Abdykerim Oskonbaev'),
      position: t('CEO, OSMA Group'),
      img:avatarkamasys,
      logo:Osma
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='partners dark-blue'>
      <div className="container">
        <img src={slides[currentSlide].logo} alt="#" className='company-title' />
        <h2>{slides[currentSlide].text}</h2>
        <h2>{slides[currentSlide].text2}</h2>
        <div className='partner-user'>
          {/* <img src={slides[currentSlide].img} alt="avatar" /> */}
          <h4>{slides[currentSlide].name}</h4>
          <h5>{slides[currentSlide].position}</h5>
        </div>
        <div className="slider-buttons">
          <button className='slide-button-square' onClick={goToPreviousSlide}></button>
          {slides.map((slide, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'slide-button-circle active' : 'slide-button-circle'}
              onClick={() => goToSlide(index)}
            >
              
            </button>
          ))}
          {/* <button className='slide-button-circle' onClick={goToNextSlide}></button> */}
        </div>
      </div>
    </div>
  );
};

export default PartnersFeedback;