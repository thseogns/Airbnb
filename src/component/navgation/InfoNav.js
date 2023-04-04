/** @format */

import { React, useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RxTextAlignJustify } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
import styles from "./infoNav.module.css";
import InfoBar from "./InfoBar";
import { useLogin } from "../../reducer/LoginPro";
const InfoNav = () => {
  const [toggle, setToggle] = useState(false);
  const handleOnClick = () => {
    setToggle(!toggle);
  };
  const loginValue = useLogin();
  useEffect(() => {
    if (toggle === true) {
      setToggle(!loginValue);
    }
  }, [toggle, loginValue]);
  console.log("토글 상태", toggle);
  return (
    <div className={styles.right__info}>
      <button className={styles.ex}>당신의 공간을 에어비앤비하세요</button>
      <button className={`${styles.ex} ${styles.size}`}>
        <MdLanguage />
      </button>
      <button
        onClick={handleOnClick}
        className={`${styles.info} ${styles.size}`}
      >
        <RxTextAlignJustify />
        <BsPersonCircle />
      </button>
      {toggle && <InfoBar />}
    </div>
  );
};

export default InfoNav;
