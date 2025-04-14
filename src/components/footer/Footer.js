import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import LN from "../../assets/logoLinks/LinkedIn.svg";
// import WhatsApp from '../../assets/logoLinks/Whatsapp.svg';
import BicycleWhiteLogo from '../../assets/logos/WhiteMainLogo.png';
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import WhatsApp from "../../assets/logoLinks/Whatsapp.svg";
import Phone from "../../assets/logos/Phone.svg";
import Facebook from "../../assets/contactUs/Facebook.svg";
import Twitter from "../../assets/contactUs/Twitter.svg";
import LinkedIn from "../../assets/contactUs/LinkedIn.svg";
import Instagram from "../../assets/contactUs/Instagram.svg";
import YouTube from "../../assets/contactUs/YouTube.svg";

const Modal = ({ isOpen, message }) => {
  if (!isOpen) return null;
  return <div className="modal-overlay">{message}</div>;
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
    user_phone: "",
  });
  const form = useRef();
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};
    if (!formValues.user_name.trim()) newErrors.user_name = t('Please fill out the required field');
    if (!formValues.user_email.trim()) newErrors.user_email = t('Please fill out the required field');
    if (!formValues.message.trim()) newErrors.message = t('Please fill out the required field');
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    emailjs.sendForm('service_nqcwraa', 'template_5f6kff7', form.current, 'kaXtgRdirwWqDEySs')
      .then(() => {
        setIsModalOpen(true);
        setTimeout(() => setIsModalOpen(false), 3000);
      }, (error) => {
        console.log('FAILED...', error.text);
      });
    
    setFormValues({ user_name: "", user_email: "", message: "", user_phone: "" });
  };
    const renderNavList = (title) => (
    <ul className="footerNavList">
      <h2><img src={BicycleWhiteLogo} /></h2>
      <li><NavLink to="/">{t('Company')}</NavLink></li>
      <li><NavLink to="/services">{t('Services')}</NavLink></li>
      <li><NavLink to="/industries">{t('Industries')}</NavLink></li>
      <li><NavLink to="/partners">{t('Partners')}</NavLink></li>
      <li><NavLink to="/careers">{t('Careers')}</NavLink></li>
      <li><NavLink to="/contacts">{t('Contacts')}</NavLink></li>
    </ul>
  );

  return (
    <footer>
      <div className="container">
        <div>
          <div className="footerBlocks">
            {/* <div className="footerLogos">
              <div className="titleWork">
                {t('Get in touch')}
              </div>
              <form ref={form} onSubmit={sendEmail}>
                <div className="input-bottom-line footer-inp">
                  <input
                    type="text"
                    name="user_name"
                    placeholder={t("Full name")}
                    className={`footerInput ${errors.user_name ? 'invalid' : ''}`}
                    value={formValues.user_name}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.user_name && <div className="error">{errors.user_name}</div>}

                <div className="input-bottom-line footer-inp">
                  <input
                    type="email"
                    name="user_email"
                    placeholder={t("Business email")}
                    className={`footerInput ${errors.user_email ? 'invalid' : ''}`}
                    value={formValues.user_email}
                    onChange={handleInputChange}
                  />
                </div>
                {errors.user_email && <div className="error">{errors.user_email}</div>}

                <div className="input-bottom-line footer-inp">
                  <input
                    type="text"
                    name="user_phone"
                    placeholder={t("Phone number")}
                    className="footerInput input-bottom-line"
                    value={formValues.user_phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="footerContact input-bottom-line">
                  <input
                    type="text"
                    name="message"
                    placeholder={t("How we can help you?")}
                    className={`footerInput ${errors.message ? 'invalid' : ''}`}
                    value={formValues.message}
                    onChange={handleInputChange}
                  />
                  <NavLink
                  type="submit" className="footerBtn">Submit</NavLink>
                </div>
                {errors.message && <div className="error">{errors.message}</div>}

              </form>
              <Modal isOpen={isModalOpen} message={t('Your message has been sent successfully!')} />
              <div className="logoLinks">
                <NavLink to="https://www.linkedin.com/company/bicycle-dev/"><img src={LN} alt="LinkedIn" /></NavLink>
                <NavLink to="https://wa.me/00491775571132"><img src={WhatsApp} alt="Whatsapp" style={{ width: "40px" }} /></NavLink>
              </div>
            </div> */}
            <div className="contact-address">
          <h3 className="poppins main-text-h3 ">
            {t("Interested in")}{" "}
            <span className="middle-blue">{t("working together?")}</span>
          </h3>

          <div className="contact-location">
            <h4>{t("Our offices")}:</h4>
            <div>
              {t("Leipzig")}, {t("Germany")}
            </div>
            <div>
              {t("Bishkek")}, {t("Kyrgyz Republic")}
            </div>
          </div>

          <div className="contact-location">
            <h4>{t("Contact us")}:</h4>
            <div>
              <a href="mailto:askat.baktiyar@bicycle-dev.com" > askat.baktiyar@bicycle-dev.com
              </a>
            </div>
            <div className="contact-us">
              <div className="contact-tel">
               <NavLink> <img src={Phone} alt="" /></NavLink>

                <NavLink to="https://wa.me/00491774705440"><img src={WhatsApp} alt="" /></NavLink>

                <div>+49 177 470 54 40</div>
              </div>
            </div>
            <div className="contact-us">
              <div className="contact-tel">
               <NavLink> <img src={Phone} alt="" /> </NavLink>
                <NavLink to="https://wa.me/00491775571132"><img src={WhatsApp} alt="" /></NavLink>

                <div>+49 177 557 11 32</div>
              </div>
            </div>
          </div>

          {/* <div className="contact-socials">
            <a className="contact-logo contact-logo-big" href="#">
              <img src={Facebook} alt="" />
            </a>
            <a className="contact-logo-big contact-logo" href="#">
              <img src={Twitter} alt="" />
            </a>
            <a className="contact-logo-big contact-logo" href="#">
              <img src={Instagram} alt="" />
            </a>
            <a className="contact-logo contact-logo-big" href="#">
              <img src={LinkedIn} alt="" />
            </a>
            <a className="contact-logo contact-logo-big" href="#">
              <img src={YouTube} alt="" />
            </a>
          </div> */}
   
        </div>
            <div className="footerNav">
               {renderNavList('About')}
             </div>
          </div>
          <div className="copyright">© Bicycle Dev - 2025. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
