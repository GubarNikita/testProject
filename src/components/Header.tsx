import "./header.scss";

import IconMenu from "assets/icons/iconMenu.svg";
import IconShare from "assets/icons/iconShare.svg";
import { useState } from "react";

export const Header = () => {
  const [buttonAction, setButtonAction] = useState(false);

  return (
    <div className="header">
      <button className="header-button-menu">
        <IconMenu width={16} height={16} fill="red" />
      </button>
      <button className="header-button-share">
        <IconShare width={24} height={24} fill="red" />
      </button>
      <button className="header-button">Просмотр</button>
      <button className="header-button">Управление</button>
    </div>
  );
};
