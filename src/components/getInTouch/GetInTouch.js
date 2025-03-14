// import React, { useState, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import emailjs from "emailjs-com";
// import Linkedin from '../../assets/contactUs/LinkedIn.svg'
// import WhatsApp from '../../assets/logoLinks/Whatsapp.svg'
// import "./GetInTouch.css"

// const Modal = ({ isOpen, message }) => {
//     if (!isOpen) return null;
//     return <div className="modal-overlay">{message}</div>;
//   };
// const GetInTouch = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [formValues, setFormValues] = useState({
//       user_name: "",
//       user_email: "",
//       message: "",
//       user_phone: "",
//     });
//     const form = useRef();
//     const { t } = useTranslation();
  
//     const handleInputChange = (e) => {
//       setFormValues({ ...formValues, [e.target.name]: e.target.value });
//       setErrors({ ...errors, [e.target.name]: "" });
//     };
  
//     const validate = () => {
//       let newErrors = {};
//       if (!formValues.user_name.trim()) newErrors.user_name = t('Please fill out the required field');
//       if (!formValues.user_email.trim()) newErrors.user_email = t('Please fill out the required field');
//       if (!formValues.message.trim()) newErrors.message = t('Please fill out the required field');
//       return newErrors;
//     };
  
//     const sendEmail = (e) => {
//       e.preventDefault();
//       const newErrors = validate();
//       if (Object.keys(newErrors).length > 0) {
//         setErrors(newErrors);
//         return;
//       }
      
//       emailjs.sendForm('service_nqcwraa', 'template_5f6kff7', form.current, 'kaXtgRdirwWqDEySs')
//         .then(() => {
//           setIsModalOpen(true);
//           setTimeout(() => setIsModalOpen(false), 3000);
//         }, (error) => {
//           console.log('FAILED...', error.text);
//         });
      
//       setFormValues({ user_name: "", user_email: "", message: "", user_phone: "" });
//     };
//   return (
//     <div className="footerLogos">
//     <div className="main-title-info dark-blue">
//       {t('Get in touch')}
//     </div>
//     <form ref={form} onSubmit={sendEmail} className="formGetInTouch">
//       <div className="input-bottom-line">
//         <input
//           type="text"
//           name="user_name"
//           placeholder={t("Full name")}
//           className={`footerInput input-bottom-line ${errors.user_name ? 'invalid' : ''}`}
//           value={formValues.user_name}
//           onChange={handleInputChange}
//         />
//       </div>
//       {errors.user_name && <div className="error">{errors.user_name}</div>}

//       <div className="input-bottom-line">
//         <input
//           type="email"
//           name="user_email"
//           placeholder={t("Business email")}
//           className={`footerInput input-bottom-line ${errors.user_email ? 'invalid' : ''}`}
//           value={formValues.user_email}
//           onChange={handleInputChange}
//         />
//       </div>
//       {errors.user_email && <div className="error">{errors.user_email}</div>}

//       <div className="input-bottom-line">
//         <input
//           type="text"
//           name="user_phone"
//           placeholder={t("Phone number")}
//           className="footerInput input-bottom-line"
//           value={formValues.user_phone}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className="footerContact input-bottom-line">
//         <input
//           type="text"
//           name="message"
//           placeholder={t("How we can help you?")}
//           className={`footerInput input-bottom-line ${errors.message ? 'invalid' : ''}`}
//           value={formValues.message}
//           onChange={handleInputChange}
//         />
    
//       </div>

//       {errors.message && <div className="error">{errors.message}</div>}
//       <div style={{display:'flex', justifyContent:'flex-end'}}>
//                     <button type="submit" className="getTouchBtn">Submit</button>
//       </div>

//     </form>
//     <Modal isOpen={isModalOpen} message={t('Your message has been sent successfully!')} />
//     <div className="logoLinks">
//       <NavLink to="https://www.linkedin.com/company/bicycle-dev/"><img src={Linkedin} alt="LinkedIn" /></NavLink>
//       <NavLink to="https://wa.me/00491775571132"><img src={WhatsApp} alt="Whatsapp" style={{ width: "36px" }} /></NavLink>
//     </div>
//   </div>
//   )
// }


//2nd version 

import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Linkedin from '../../assets/contactUs/LinkedIn.svg';
import WhatsApp from '../../assets/logoLinks/Whatsapp.svg';
import "./GetInTouch.css";

const Modal = ({ isOpen, message }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
      </div>
    </div>
  );
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
  const [isSending, setIsSending] = useState(false);  // новое состояние для отслеживания отправки
  const form = useRef();
  const { t } = useTranslation();

  // Обработчик изменений в инпутах
  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Валидация формы
  const validate = () => {
    let newErrors = {};
    if (!formValues.user_name.trim()) newErrors.user_name = t('Please fill out the required field');
    if (!formValues.user_email.trim()) newErrors.user_email = t('Please fill out the required field');
    if (!formValues.message.trim()) newErrors.message = t('Please fill out the required field');
    return newErrors;
  };

  // Отправка формы
  const sendEmail = async (e) => {
    e.preventDefault();
  
    // Проверка на ошибки
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    setIsSending(true);
  
    const formData = new FormData();
    formData.append("name", formValues.user_name);
    formData.append("email", formValues.user_email);
    formData.append("message", formValues.message);
    formData.append("phone", formValues.user_phone);
    formData.append("_captcha", "false"); // Отключаем капчу
  
    try {
      const response = await fetch("https://formsubmit.co/askat.baktiyar@bicycle-dev.com", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        setIsModalOpen(true);
        setFormValues({
          user_name: "",
          user_email: "",
          message: "",
          user_phone: "",
        });
        setTimeout(() => setIsModalOpen(false), 3000);
      } else {
        alert("Ошибка при отправке сообщения. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Ошибка в сети:", error);
      alert("Ошибка при отправке сообщения. Попробуйте снова.");
    } finally {
      setIsSending(false);
    }
  };
  

  return (
    <div className="footerLogos">
      <div className="main-title-info dark-blue">
        {t('Get in touch')}
      </div>

      <form ref={form} onSubmit={sendEmail} className="formGetInTouch">
        {/* Имя */}
        <div className="input-bottom-line">
          <input
            type="text"
            name="user_name"
            placeholder={t("Full name")}
            className={`footerInput input-bottom-line ${errors.user_name ? 'invalid' : ''}`}
            value={formValues.user_name}
            onChange={handleInputChange}
          />
        </div>
        {errors.user_name && <div className="error">{errors.user_name}</div>}

        {/* Email */}
        <div className="input-bottom-line">
          <input
            type="email"
            name="user_email"
            placeholder={t("Business email")}
            className={`footerInput input-bottom-line ${errors.user_email ? 'invalid' : ''}`}
            value={formValues.user_email}
            onChange={handleInputChange}
          />
        </div>
        {errors.user_email && <div className="error">{errors.user_email}</div>}

        {/* Телефон */}
        <div className="input-bottom-line">
          <input
            type="text"
            name="user_phone"
            placeholder={t("Phone number")}
            className="footerInput input-bottom-line"
            value={formValues.user_phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Сообщение */}
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
       

<button type="submit" className="getTouchBtn" disabled={isSending}>
  {isSending ? <span className="spinner"></span> : t('Submit')}
</button>
        {/* Кнопка */}
        {/* <div style={{display:'flex', justifyContent:'flex-end'}}>
          <button type="submit" className="getTouchBtn">
            {t('Submit')}
          </button>
        </div> */}
      </form>

      {/* Модалка с уведомлением */}
      <Modal isOpen={isModalOpen} message={isSending ? t('Sending data, please wait...') : t('Your message has been sent successfully!')} />
      {/* <Modal isOpen={isModalOpen} message={isSending ? t('Sending data, please wait...') : t('Your message has been sent successfully!')} /> */}

      {/* Логотипы */}
      <div className="logoLinks">
        <NavLink to="https://www.linkedin.com/company/bicycle-dev/">
          <img src={Linkedin} alt="LinkedIn" />
        </NavLink>
        <NavLink to="https://wa.me/00491775571132">
          <img src={WhatsApp} alt="Whatsapp" style={{ width: "36px" }} />
        </NavLink>
      </div>
    </div>
  );
};




// import React, { useState } from "react";

// const GetInTouch = () => {
//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Отправляем данные напрямую на FormSubmit (без перехода)
//     const response = await fetch("https://formsubmit.co/askat.baktiyar@bicycle-dev.com", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(formValues)
//     });

//     if (response.ok) {
//       // Если письмо успешно отправлено, показываем уведомление
//       setIsSuccess(true);
//       setFormValues({
//         name: "",
//         email: "",
//         message: ""
//       });

//       // Прячем уведомление через 3 секунды
//       setTimeout(() => setIsSuccess(false), 3000);
//     } else {
//       alert("Ошибка при отправке сообщения. Попробуйте снова.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formValues.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formValues.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formValues.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Send</button>
//       </form>

//       {/* ✅ Уведомление о том, что письмо успешно отправлено */}
//       {isSuccess && (
//         <div style={{ color: "green", marginTop: "10px" }}>
//           ✅ Сообщение успешно отправлено!
//         </div>
//       )}
//     </div>
//   );
// };

export default GetInTouch;
