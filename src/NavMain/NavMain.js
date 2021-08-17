import React from "react";
import "./nav-main.scss";

function NavMain() {
  return (
    <div className="nav-main">
      <h2 className="heading-secondry">Diary</h2>
      <svg className="nav-main__icon">
        <use xlinkHref="img/sprite.svg#icon-search"></use>
      </svg>
    </div>
  );
}

export default NavMain;
