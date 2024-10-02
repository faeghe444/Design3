import React from "react";

const Register03 = () => {
  return (
    <>
      <div className="register">
        <div className="leftSideRegister">
          <div className="logos">
            <img className="logo" src="imgRegister/Untitled-1 3.svg" />
            <img className="nameLogo" src="imgRegister/Untitled-1 4.svg" />
          </div>
          <div className="title">
            <h2>شروع یک ماجراجویی</h2>
            <p>هر دوره ای که بخوای رو به راحتی پیدا کن و یاد بگیر</p>
          </div>
          <div className="image"></div>
        </div>
        <div className="rightSideRegister">
          <div className="tabs">
            <div className="itemTabs itemTab1">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab3">
                وارد کردن اطلاعات شخصی
              </div>
            </div>
            <div className="itemTabs itemTab2">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab2">
                تایید کد ارسال شده
              </div>
            </div>
            <div className="itemTabs itemTab3">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab1">
                وارد کردن شماره همراه
              </div>
            </div>
          </div>
          <div className="titleRegister">
            <h2 className="titleRegister01">وارد کردن اطلاعات شخصی</h2>
            <p className="titleRegister02">
              لطفا اطلاعات اولیه خواسته شده را وارد کنید
            </p>
          </div>
          <div className="inputEmail">
            ایمیل
            <input
              type="text"
              placeholder="ایمیل خود را وارد کنید"
              className="acceptEmail"
            />
          </div>
          <div className="inputPassword">
            رمز عبور جدید
            <input
              type="password"
              placeholder="رمزعبور جدید خود را وارد کنید"
              className="acceptPassword"
            />
            <div className="passIcon"></div>
          </div>
          <div className="sendInfo">تایید</div>
        </div>
      </div>
    </>
  );
};

export default Register03;
