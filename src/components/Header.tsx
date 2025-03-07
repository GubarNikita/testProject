import "./header.scss";

import IconMenu from "src/assets/icons/iconMenu.svg";
import IconShare from "src/assets/icons/iconShare.svg";
import { useState } from "react";

export const Header = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleClick = (buttonNumber: number) => {
    setActiveButton(buttonNumber);
  };

  return (
    <div className="header">
      <button className="header-button">
        <IconMenu width={16} height={16} fill="#A1A1AA" />
      </button>
      <button className="header-button">
        <IconShare width={24} height={24} fill="#A1A1AA" />
      </button>
      <button
        className={`header-button ${activeButton === 1 && "active"}`}
        onClick={() => handleClick(1)}
      >
        Просмотр
      </button>
      <button
        className={`header-button ${activeButton === 2 && "active"}`}
        onClick={() => handleClick(2)}
      >
        Управление
      </button>
    </div>
  );
};
