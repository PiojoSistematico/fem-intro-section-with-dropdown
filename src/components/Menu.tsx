import logo from "../assets/images/logo.svg";
import iconMenu from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close-menu.svg";
import Dropdown from "./Dropdown";
import iconToDo from "../assets/images/icon-todo.svg";
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconReminders from "../assets/images/icon-reminders.svg";
import iconPlanning from "../assets/images/icon-planning.svg";

import { useState } from "react";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={isMenuOpen ? "overlay" : ""}>
      <a href="#">
        <img src={logo} alt="" className="logo" />
      </a>

      <button
        className="btn-menu mobile"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={handleClick}
      >
        {isMenuOpen ? (
          <img
            className="icon-close"
            src={iconClose}
            alt="Close Menu"
            aria-hidden="false"
          />
        ) : (
          <img
            className="icon-hamburger"
            src={iconMenu}
            alt="Open Menu"
            aria-hidden="false"
          />
        )}

        <span className="visually-hidden">Menu</span>
      </button>
      <nav
        className={
          isMenuOpen
            ? "menu-open primary-navigation desktop"
            : "primary-navigation desktop"
        }
        id="primary-navigation"
      >
        <ul aria-label="Primary" role="list">
          <Dropdown title={"Features"}>
            <a href="#" className="flex-anchor">
              <img src={iconToDo} alt="" />
              <span>Todo List</span>
            </a>
            <a href="#" className="flex-anchor">
              <img src={iconCalendar} alt="" />
              <span>Calendar</span>
            </a>
            <a href="#" className="flex-anchor">
              <img src={iconReminders} alt="" />
              <span>Reminders</span>
            </a>
            <a href="#" className="flex-anchor">
              <img src={iconPlanning} alt="" />
              <span>Planning</span>
            </a>
          </Dropdown>
          <Dropdown title={"Company"}>
            <a href="#">
              <span>History</span>
            </a>
            <a href="#">
              <span>Our Team</span>
            </a>
            <a href="#">
              <span>Blog</span>
            </a>
          </Dropdown>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <ul className="buttons-section" role="list">
          <li>
            <button className="btn-login">Login</button>
          </li>
          <li>
            <button className="btn-register">Register</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
