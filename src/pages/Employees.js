import React, { useState } from "react";
import "../styles/Employees.css";
import Aizaada from "../assets/team/Aizaada.png";
import Adilet from "../assets/team/AdiletRyskulov.jpg";
import linkedin from "../assets/employeesImgs/LinkedIn.png";
import DevOperations from "../components/ui/devOperations/DevOperations";
import { useTranslation } from "react-i18next";

const Employees = () => {
  const { t } = useTranslation();
  const users = [
    {
      name: "Adilet ",
      social: linkedin,
      job: "Backend",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: Adilet,
    },
    {
      name: "Aizaada Akylbekova",
      social: linkedin,
      job: "Frontend",
      descr: "There are many variations of passages of Lorem Ipsum available",
      img: Aizaada,
    },
  ];
  const [filter, setFilter] = useState("All");

  const btns = [t("All"), "Backend", "Frontend"];

  const filterPosition = (position) => {
    setFilter(position);
  };

  const filteredUsers =

    filter === "All" || filter==="Все" ? users : users.filter((user) => user.job === filter);

  return (
    <div className="container">
      <div className="employees">
        <div className="bg-small bg-employees" />
        <div className="employees-block">
          <h3 className="main-title middle-blue poppins">
            {t("Our employees")}
          </h3>
          <div className="employees-btns">
            {btns.map((el) => (
              <button className="dark-blue" onClick={() => filterPosition(el)}>
                {el}
              </button>
            ))}
          </div>

          <div className="employees-cards dark-blue">
            {filteredUsers.map((el, index) => (
              <div key={index} className="employees-user">
                <img className="user-img" src={el.img} alt="user" />
                <div className="employees-info">
                  <img
                    className="employees-lnkdn"
                    src={el.social}
                    alt="social"
                  />
                  <h4>{el.name}</h4>
                  <h6>{el.job} {t("developer")}</h6>
                  <p>{el.descr}</p>
                  <button className="main-btn">{t("Contact our experts")}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="circle m-circle-employees">
            <div className="circle-inner" />
          </div>
          <DevOperations />
        </div>
        <div className="circle s-circle-employees1">
          <div className="circle-inner" />
        </div>
        <div className="circle s-circle-employees2">
          <div className="circle-inner" />
        </div>
      </div>
    </div>
  );
};

export default Employees;
