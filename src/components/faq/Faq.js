import React, { useState } from "react";
import "./Faq.css";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Faq = () => {
  const {t}=useTranslation()

  const faqText=[
    {
      text: t("1. What is outstaffing and outsourcing, and how do they differ?"),
      desc:t("Outstaffing involves hiring dedicated professionals who work remotely but are fully integrated into your team and under your management. Outsourcing, on the other hand, entails delegating specific tasks or projects to an external team or company. See:"),linkTitle:t("Services"), link:'/services'
    },
    {
      text: t("2. What types of IT services do you offer through outstaffing and outsourcing?"),
      desc: t("We offer a comprehensive range of IT services, including software development, web development, mobile app development, QA and testing, UI/UX design, IT infrastructure management, and more. See:"),linkTitle:t('Industries'), link:''
    },
    {
      text: t("3. How does your outstaffing service work?"),
      desc: t("With our outstaffing service, we provide you with highly skilled IT professionals who work exclusively for your company on a full-time or part-time basis. You have full control over the team, and they become an extension of your in-house staff, working collaboratively to achieve your project goals."),linkTitle:'', link:''
    },
    {
      text: t("4. How does your outsourcing service work?"),
      desc: t("Our outsourcing service works by providing you access to a dedicated team of skilled professionals who handle specific tasks or projects on your behalf. We start by understanding your project requirements and goals through detailed consultations. Then, we tailor a solution to meet your needs, assembling a team with the right expertise and experience. Throughout the project, we maintain open communication channels, deliver regular updates, and ensure adherence to timelines and quality standards. Ultimately, our goal is to streamline your project development process, delivering high-quality results while allowing you to focus on your core business activities."),linkTitle:'', link:''
    },
    {
      text: t("5. How do you ensure the quality of work with outstaffing and outsourcing?"),
      desc: t("We have a rigorous recruitment process to select top-notch professionals with the right skills and experience for your project. Additionally, we implement quality assurance measures, provide ongoing training and support, and maintain open communication channels to ensure the delivery of high-quality work."),linkTitle:'', link:''
    },
    {
      text: t("6. What are the benefits of outstaffing with your company?"),
      desc: t("Some key benefits include access to a larger talent pool, cost-effectiveness, scalability, flexibility, reduced administrative burden, and the ability to quickly ramp up or downsize your team based on project requirements."),linkTitle:'', link:''
    },
    {
      text: t("7. What are the benefits of outsourcing with your company?"),
      desc: t("Outsourcing with our company offers numerous benefits. Firstly, you gain access to a pool of skilled professionals with expertise in various IT domains, ensuring high-quality results. Secondly, outsourcing allows for cost-effectiveness as you only pay for the services you need, without the overhead of hiring and training full-time employees. Additionally, outsourcing enables scalability, flexibility, and the ability to focus on core business functions while we handle the technical aspects efficiently."),linkTitle:'', link:''
    },
    {
      text: t("8. How do you ensure the quality of work with outstaffing and outsourcing?"),
      desc: t("We have a rigorous recruitment process to select top-notch professionals with the right skills and experience for your project. Additionally, we implement quality assurance measures, provide ongoing training and support, and maintain open communication channels to ensure the delivery of high-quality work."),linkTitle:'', link:''
    },
    {
      text: t("9. Can we choose the team members for our project?"),
      desc: t("Yes, you have the flexibility to handpick the team members based on their expertise, experience, and compatibility with your project requirements. We provide you with candidate profiles and facilitate interviews to help you make informed decisions."),linkTitle:'', link:''
    },
    {
      text: t("10. How do you handle communication and collaboration with remote teams?"),
      desc: t("We utilize various communication and collaboration tools such as video conferencing, instant messaging, project management software, and version control systems to ensure seamless communication and collaboration between your team and ours."),linkTitle:'', link:''
    },
    {
      text: t("11. What are the terms of engagement for your outstaffing and outsourcing services?"),
      desc: t("Service-level agreement (SLA) outlining the scope of work, timelines, deliverables, payment terms, confidentiality agreements, and other relevant terms and conditions tailored to your specific needs."),linkTitle:'', link:''
    },
    {
      text: t("12. Do you provide ongoing support and maintenance for the projects delivered through outstaffing or outsourcing?"),
      desc: t("Yes, we offer post-delivery support and maintenance services to ensure the smooth operation and performance of your software applications or IT infrastructure. We can provide ongoing updates, enhancements, troubleshooting, and technical assistance as needed."),linkTitle:'', link:''
    },
    {
      text: t("13. How do we get started with your outstaffing or outsourcing services?"),
      desc: t("Simply reach out to us through our website or contact information, and one of our representatives will schedule a consultation to discuss your project requirements, goals, and preferences. We'll then work together to create a customized plan that meets your needs and exceeds your expectations.See:"),linkTitle:'Contacts', link:'/contacts'
    },
  ]

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="faq container">
      <div className="circle m-circle-faq">
        <div className="circle-inner"/>
      </div>
      <div className="faq-title">
        <h3 className="poppins main-title-second">
          {t("Frequently Asked")}{" "}
          <span className="question poppins middle-blue">{t("Questions")}</span>
        </h3>

        <h5>
      {t("We tried to answer most common questions, if you have any additional, please get in touch with our friendly team")}
        </h5>
<div className="bg-medium bg-faq"/>
        <div className="faq-toggle">
          {faqText.map((el, index) => (
            <div className="faqs" key={index}>
                     <NavLink className='dark-blue' >
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h4>{el.text}</h4>
                <button onClick={() => toggleAnswer(index)}>
                  {openIndex === index ? (
                    <i className="bi bi-dash-circle"></i>
                  ) : (
                    <i className="bi bi-plus-circle dark-blue"></i>
                  )}
                </button>
              </div>
              {openIndex === index && (
                <div className="faq-answer">{el.desc}
                  <NavLink className='light-blue' to={el.link}> {el.linkTitle}</NavLink>
               </div>
              )}
                      </NavLink> 

            </div>

          ))}
        </div>
  
      </div>
    </div>
  );
};

export default Faq;
