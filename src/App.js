/** @format */

import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Footer from "./component/footer/Footer";
import MenuNav from "./component/main/menuNav/MenuNav";
import HotelPList from "./component/main/filterMenu/HotelPList";
import HotelBList from "./component/main/filterMenu/HotelBLIst";
import { useLogin } from "./reducer/LoginPro";
import Login from "./component/navgation/login/Login";

function App() {
  const [loginToggle, setLoginToggle] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  const loginValue = useLogin();
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    setLoginToggle(loginValue);
  }, [loginValue]);
  console.log("프롭스 되었는가?", loginToggle);
  return (
    <div>
      <BrowserRouter>
        {loginToggle && <Login />}
        <Header scrollPosition={scrollPosition} />

        <MenuNav scrollPosition={scrollPosition} />

        <Routes>
          <Route
            path="/populer"
            element={<HotelPList scrollPosition={scrollPosition} />}
          ></Route>
          <Route
            path="/beach"
            element={<HotelBList scrollPosition={scrollPosition} />}
          ></Route>
          <Route
            path="/"
            element={<HotelPList scrollPosition={scrollPosition} />}
          ></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
