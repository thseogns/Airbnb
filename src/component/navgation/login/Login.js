/** @format */

import React from "react";
import styles from "./Login.module.css";
import { useLoginDispatch, useLogin } from "../../../reducer/LoginPro";
import Sns from "./Sns";
const Login = () => {
  const value = useLogin();
  const disfatch = useLoginDispatch();
  const handleView = () => {
    disfatch({ type: true });
    console.log("벨류는 anjs?", value);
  };
  const handleClose = () => {
    handleView();
  };
  return (
    <div>
      <div className={styles.background} onClick={handleClose}></div>
      <div className={styles.loginBox}>
        <div className={styles.textBox}>
          {" "}
          <div className={styles.xBox}>엑스 박스</div>
          <strong>로그인 또는 회원가입</strong>
        </div>
        <div className={styles.welcome}>
          <strong>에어비앤비에 오신 것을 환영합니다.</strong>
        </div>
        <div className={styles.addressBox}>
          <div>
            <select name="cuntry">
              <option value="콩고">콩고(+242)</option>{" "}
              <option value="콩고민주공화국">콩고 민주 공화국(+242+)</option>{" "}
              <option value=""></option> <option value=""></option>{" "}
              <option value=""></option>{" "}
            </select>
          </div>
          <div>
            <input placeholder="전화번호"></input>
          </div>
        </div>
        <div className={styles.persnal}>
          <span>
            전화나 문자로 전화번호를 확인하겠습니다. 일반 문자 메시지 요금 및
            데이터 요금이 부과됩니다.
          </span>
          <a href="#!">
            <strong>개인정보 처리방침</strong>
          </a>
        </div>
        <div className={styles.continuBox}>
          <button className={styles.continu}>계속</button>
          <div>또는</div>
        </div>
        <Sns />
      </div>
    </div>
  );
};

export default Login;
