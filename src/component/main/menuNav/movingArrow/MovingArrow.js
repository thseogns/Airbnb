/** @format */

import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./MovingArrow.module.css";
const MovingArrow = () => {
  return (
    <div className={styles.box}>
      <div className={`${styles.gradation_block}`}>
        <MdKeyboardArrowRight
          className={`${styles.arrow} ${styles.left_arrow}`}
        />
      </div>
      <div
        className={`${styles.gradation_block}  ${styles.gradation_block_right}`}
      >
        <MdKeyboardArrowRight
          className={`${styles.arrow} ${styles.right_arrow}`}
        />
      </div>
    </div>
  );
};

export default MovingArrow;
