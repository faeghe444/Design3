import React from "react";

const Register02 = () => {
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
            <h2 className="titleRegister01">تایید کد ارسال شده</h2>
            <p className="titleRegister02">
              لطفا کد ارسال شده به شماره همراه 09381235486 را وارد کنید
            </p>
          </div>
          <div className="input">
            کد تایید
            <input
              type="text"
              placeholder="کد تایید خود را وارد کنید"
              className="acceptNumber"
            />
          </div>
          <div className="sendCode">تایید</div>

          <div className="backBottom">
            بازگشت
            <div className="backBottomIcon"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register02;
