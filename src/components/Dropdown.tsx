import { useState } from "react";
import arrowDown from "../assets/images/icon-arrow-down.svg";
import arrowUp from "../assets/images/icon-arrow-up.svg";

type DropdownProps = {
  title: string;
  children: React.ReactNode;
};

const Dropdown: React.FunctionComponent<DropdownProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(): void {
    setIsOpen(!isOpen);
  }

  return (
    <li className="relative-li">
      <a href="#" className="dropdown" onClick={handleClick}>
        <span>{title}</span>
        <img src={isOpen ? arrowUp : arrowDown} alt="" className="arrow" />
      </a>
      {isOpen && (
        <ul
          className={
            title == "Features" ? "dropdown-content right" : "dropdown-content"
          }
        >
          {children}
        </ul>
      )}
    </li>
  );
};

export default Dropdown;
