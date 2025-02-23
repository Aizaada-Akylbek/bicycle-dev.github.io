import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import Linkedin from '../../assets/contactUs/LinkedIn.svg'
import WhatsApp from '../../assets/logoLinks/Whatsapp.svg'
import "./GetInTouch.css"

const Modal = ({ isOpen, message }) => {
    if (!isOpen) return null;
    return <div className="modal-overlay">{message}</div>;
  };
const GetInTouch = () => {
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
  return (
    <div className="footerLogos">
    <div className="main-title-info dark-blue">
      {t('Get in touch')}
    </div>
    <form ref={form} onSubmit={sendEmail} className="formGetInTouch">
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
          className={`footerInput input-bottom-line ${errors.message ? 'invalid' : ''}`}
          value={formValues.message}
          onChange={handleInputChange}
        />
    
      </div>

      {errors.message && <div className="error">{errors.message}</div>}
      <div style={{display:'flex', justifyContent:'flex-end'}}>
          <NavLink
                  >
                    <button type="submit" className="getTouchBtn">Submit</button>
                  </NavLink>
      </div>

    </form>
    <Modal isOpen={isModalOpen} message={t('Your message has been sent successfully!')} />
    <div className="logoLinks">
      <NavLink to="https://www.linkedin.com/company/bicycle-dev/"><img src={Linkedin} alt="LinkedIn" /></NavLink>
      <NavLink to="https://wa.me/00491775571132"><img src={WhatsApp} alt="Whatsapp" style={{ width: "36px" }} /></NavLink>
    </div>
  </div>
  )
}

export default GetInTouch