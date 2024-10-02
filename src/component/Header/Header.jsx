import React from "react";

const Header = () => {
  return (
    <>
      <div className="headerBox">
        <div className="notifMode">
          <div className="nightMode"></div>
          <div className="notif"></div>
        </div>
        <div className="menu">
          <div className="login">ثبت نام یاورود</div>
          <div className="itemMenu">
            <div>درباره ما</div>
            <div>بلاگ ها</div>
            <div>دوره ها</div>
            <div>خانه</div>
          </div>
        </div>
        <div className="logo">
          <div className="titleLogo"></div>
          <div className="imgLogo"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
