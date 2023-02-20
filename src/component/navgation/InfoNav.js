/** @format */

import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { RxTextAlignJustify } from "react-icons/rx";
import { MdLanguage } from "react-icons/md";
import styles from "./infoNav.module.css";
const InfoNav = () => {
  return (
    <div className={styles.right__info}>
      <button className={styles.ex}>당신의 공간을 에어비앤비하세요</button>
      <button className={`${styles.ex} ${styles.size}`}>
        <MdLanguage />
      </button>
      <button className={`${styles.info} ${styles.size}`}>
        <RxTextAlignJustify />
        <BsPersonCircle />
      </button>
    </div>
  );
};

export default InfoNav;
