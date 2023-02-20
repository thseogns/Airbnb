/** @format */

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./CheckIn.module.css";

const CheckIn = () => {
  return (
    <div className={styles.check}>
      <button className={`${styles.rLine} ${styles.back}`}>어디든지</button>
      <button className={`${styles.rLine} ${styles.back}`}>
        언제든 일주일
      </button>
      <button className={styles.back}>게스트 추가</button>{" "}
      <AiOutlineSearch className={styles.circle} />
    </div>
  );
};

export default CheckIn;
