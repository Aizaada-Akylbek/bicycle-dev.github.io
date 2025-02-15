// import React, { useState, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import "./Footer.css";
// import LN from "../../assets/logoLinks/LinkedIn.svg";
// import WhatsApp from '../../assets/logoLinks/Whatsapp.svg'
// import BicycleWhiteLogo from '../../assets/logos/WhiteMainLogo.png'
// import { useTranslation } from "react-i18next";
// import emailjs from "emailjs-com"; // Make sure to install emailjs-com

// const Modal = ({ isOpen, message }) => {
//   if (!isOpen) {
//     return null;
//   }

//   return <div className="modal-overlay">{message}</div>;
// };

// const Footer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [error, setError] = useState('');
//   const [formValues, setFormValues] = useState({
//     user_name: "",
//     user_phone: "",
//     user_email: "",
//     message: "",
//   });
//   const form = useRef();
//   const { t } = useTranslation();

//   const handleButtonClick = () => {
//     if (inputValue.trim() === '') {
//       setError(t('Please fill out this field'));
//       return;
//     }
//     setError('');
//     setIsModalOpen(true);
//     setTimeout(() => {
//       setIsModalOpen(false);
//     }, 3000); // Close modal after 3 seconds
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//     if (error) {
//       setError('');
//     }
//   };

//   const validate = () => {
//     // Add your validation logic here
//     return {};
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     const errors = validate();
//     if (Object.keys(errors).length > 0) {
//       setError(t('Please fix the errors in the form'));
//       return;
//     }

//     emailjs.sendForm('service_nqcwraa', 'template_5f6kff7', form.current, 'kaXtgRdirwWqDEySs')
//       .then(() => {
//         console.log('SUCCESS!');
//         setIsModalOpen(true);
//         setTimeout(() => {
//           setIsModalOpen(false);
//         }, 3000);
//       }, (error) => {
//         console.log('FAILED...', error.text);
//       });

//     form.current.reset();
//     setFormValues({ user_name: "", user_phone: "", user_email: "", message: "" });
//   };

//   const renderNavList = (title) => (
//     <ul className="footerNavList">
//       <h2><img src={BicycleWhiteLogo} /></h2>
//       <li><NavLink to="/">{t('Company')}</NavLink></li>
//       <li><NavLink to="/services">{t('Services')}</NavLink></li>
//       <li><NavLink to="/industries">{t('Industries')}</NavLink></li>
//       <li><NavLink to="/partners">{t('Partners')}</NavLink></li>
//       <li><NavLink to="/careers">{t('Careers')}</NavLink></li>
//       <li><NavLink to="/contacts">{t('Contacts')}</NavLink></li>
//     </ul>
//   );

//   return (
//     <footer>
//       <div className="container">
//         <div>
//           <div className="footerBlocks">
//             <div className="footerLogos">
//               <div className="titleWork">
//                 {t('Interested in')} <br />
//                 {t('working together?')}
//               </div>
//               <div className="input-bottom-line footer-inp">
//               <input
//                   type="text"
//                   placeholder={t("Full name")}
//                   className={`footerInput ${error ? 'invalid' : ''} input-bottom-line`}
//                   value={inputValue}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="input-bottom-line footer-inp">
//               <input
//                   type="text"
//                   placeholder={t("Business email")}
//                   className={`footerInput ${error ? 'invalid' : ''} input-bottom-line`}
//                   value={inputValue}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="input-bottom-line footer-inp">
//               <input
//                   type="text"
//                   placeholder={t("Phone number (optional)")}
//                   className={`footerInput ${error ? 'invalid' : ''} input-bottom-line`}
//                   value={inputValue}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="footerContact input-bottom-line">
//                 <input
//                   type="text"
//                   placeholder={t("How we can help you?")}
//                   className={`footerInput ${error ? 'invalid' : ''} input-bottom-line`}
//                   value={inputValue}
//                   onChange={handleInputChange}
//                 />
             
//                 <Modal isOpen={isModalOpen} message={t('Your message has been sent')} />
//                       <button onClick={handleButtonClick} className="footerBtn">
//                   {/* <i className="bi bi-arrow-right"></i> */}
//                   Submit
//                 </button>
//               </div>
        
//               {error && <div className="error">{error}</div>}
//               <div className="logoLinks">
//               <NavLink to="https://www.linkedin.com/company/bicycle-dev/">    <img src={LN} alt="LinkedIn" /></NavLink>
//               <NavLink to="https://wa.me/00491775571132"><img src={WhatsApp} alt="Whatsapp" style={{width:"40px"}}/></NavLink>
//               </div>
//             </div>
//             <div className="footerNav">
//               {renderNavList('About')}
//             </div>
//           </div>
//           <div className="copyright">
//             Copyright © 2025. Bicycle Dev. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import LN from "../../assets/logoLinks/LinkedIn.svg";
import WhatsApp from '../../assets/logoLinks/Whatsapp.svg';
import BicycleWhiteLogo from '../../assets/logos/WhiteMainLogo.png';
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";

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
            <div className="footerLogos">
              <div className="titleWork">
                {t('Interested in')} <br /> {t('working together?')}
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
                  <button type="submit" className="footerBtn">Submit</button>
                </div>
                {errors.message && <div className="error">{errors.message}</div>}

              </form>
              <Modal isOpen={isModalOpen} message={t('Your message has been sent successfully!')} />
              <div className="logoLinks">
                <NavLink to="https://www.linkedin.com/company/bicycle-dev/"><img src={LN} alt="LinkedIn" /></NavLink>
                <NavLink to="https://wa.me/00491775571132"><img src={WhatsApp} alt="Whatsapp" style={{ width: "40px" }} /></NavLink>
              </div>
    
            </div>
            <div className="footerNav">
              {renderNavList('About')}
             </div>
          </div>
          <div className="copyright">Copyright © 2025. Bicycle Dev. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
