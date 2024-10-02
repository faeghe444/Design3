import React from "react";

const Register01 = () => {
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
              <div className="titleTabRegister">وارد کردن اطلاعات شخصی</div>
            </div>
            <div className="itemTabs itemTab2">
              <div className="rectangle"></div>
              <div className="titleTabRegister">تایید کد ارسال شده</div>
            </div>
            <div className="itemTabs itemTab3">
              <div className="rectangle"></div>
              <div className="titleTabRegister titleTab1">
                وارد کردن شماره همراه
              </div>
            </div>
          </div>
          <div className="titleRegister">
            <h2 className="titleRegister01">!خوش اومدی</h2>
            <p className="titleRegister02">
              لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود
            </p>
          </div>
          <div className="input">
            شماره همراه
            <input
              type="text"
              placeholder="شماره همراه خود را وارد کنید"
              className="phoneNumber"
            />
          </div>
          <div className="sendCode">ارسال کد تایید</div>
          <div className="accauntPart">
            <p className="accauntPartQuestion">
              حساب کاربری دارید؟<span>ورود به حساب کاربری</span>
            </p>
          </div>
          <div className="homeBottom">
            صفحه اصلی
            <div className="homeBottomIcon"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register01;
