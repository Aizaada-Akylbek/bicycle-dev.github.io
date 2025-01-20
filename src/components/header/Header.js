import React, { useState, useEffect, useRef } from "react";
import whiteLogo from "../../assets/logos/WhiteMainLogo.png";
import darkLogo from "../../assets/logos/MainLogo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";
import TranslateBtn from "../ui/translateBtn/TranslateBtn";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);


  const navRef = useRef(null);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        setIsFixed(window.scrollY >= navRef.current.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} id="myNav" className={isFixed ? "fixed-nav" : ""}>
      <div
        className={`navbar ${isOpen ? "open" : ""} container`}
        ref={navbarRef}
      >
        <div className="navbar-container">
          <NavLink to="/">
            <div className={`navbar__logo ${isOpen ? "open" : ""}`} />
            <img src={isOpen ? whiteLogo : darkLogo} alt="" />
          </NavLink>
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <div className="close-button" onClick={() => setIsOpen(false)}>
                {" "}
                <i className="bi bi-x"></i>
              </div>
            ) : (
              <>
                <div className={"bar"} />
                <div className={"bar-2"} />
                <div className={"bar"} />
              </>
            )}
          </div>

          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to="/">{t("Company")}</NavLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to="/services">{t("Services")}</NavLink>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to="/industries">{t("Industries")}</NavLink>
            </li>
            {/* <li onClick={() => setIsOpen(false)}>
              <NavLink to="/partners">{t("Partners")}</NavLink>
              
            </li> */}
            <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setIsOpen(false)}
          >
            <NavLink to="/partners">{t("Partners")}</NavLink>

            {/* Выпадающее меню с календарем */}
            {isDropdownOpen && (
              <ul className="dropdown">
                <li>
                  <NavLink to="/calendar">{t("Calendar for planning")}</NavLink>
                </li>
              </ul>
            )}
          </li>
            <li onClick={() => setIsOpen(false)}>
              <NavLink to="/careers">{t("Careers")}</NavLink>
            </li>
            {/* <li><NavLink to="/insights">Insights</NavLink></li> */}
            {/* <li onClick={() => setIsOpen(false)}>
              <NavLink to="/calendar">{t("Calendar")}</NavLink>
            </li> */}
            {/* <li onClick={() => setIsOpen(false)}>
              <NavLink to="/employees">{t("Employees")}</NavLink>
            </li> */}
            <li onClick={() => setIsOpen(false)}>
              <NavLink to="/contacts">{t("Contacts")}</NavLink>
            </li>
            <li>
              <TranslateBtn />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
