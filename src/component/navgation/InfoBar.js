/** @format */

import React from "react";
import styles from "./InfoBar.module.css";
import { useLoginDispatch, useLogin } from "../../reducer/LoginPro";
const InfoBar = () => {
  const value = useLogin();
  const disfatch = useLoginDispatch();
  const handleView = () => {
    disfatch({ type: value });
    console.log("벨류는?", value);
  };

  return (
    <div className={styles.position}>
      <button>회원가입</button>
      <button onClick={handleView}>로그인</button>
      <div></div>
      <a href="#!">당신의 공간을 에어비앤비하세요</a>
      <a href="#!">체험 호스팅하기</a> <a href="#!">도움말</a>
    </div>
  );
};

export default InfoBar;
