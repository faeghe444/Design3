import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./component/Header/Header";
import "./component/Header/header.css";
import "./App.css";
import Footer from "./component/Footer/Footer";
import "./component/Footer/footer.css";
import Content from "./component/Content/Content";
import "./component/Content/content.css";
import Register01 from "./component/Register/RegisterPages/Register01";
import "./component/Register/RegisterPages/Register01.css";
import Register02 from "./component/Register/RegisterPages/Register02";
import "./component/Register/RegisterPages/register02.css";
import Register03 from "./component/Register/RegisterPages/Register03";
import "./component/Register/RegisterPages/Register03.css";
function App() {
  return (
    <>
      <Header />
      <Content />
      {/* <Register01 /> */}
      {/* <Register02 /> */}
      {/* <Register03 /> */}
      <Footer />
    </>
  );
}

export default App;
