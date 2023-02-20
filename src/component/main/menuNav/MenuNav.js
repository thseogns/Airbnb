/** @format */

import React from "react";
import { Link } from "react-router-dom";
import styles from "./MenuNav.module.scss";
import { GiSettingsKnobs } from "react-icons/gi";

const MenuNav = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.cover}>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/popule.jpg" alt="이미지" />
            인기 급상승
          </Link>
        </div>
        <div className={styles.inline}>
          <Link to="/beach" className={styles.flexC}>
            <img src="/img/filter/beach.jpg" alt="이미지" />
            해변 바로 앞
          </Link>
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/castle.jpg" alt="이미지" />
            캐슬
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/country.jpg" alt="이미지" />
            한적한 시골
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>{" "}
        </div>
        <div className={styles.inline}>
          <Link to="/" className={styles.flexC}>
            <img src="/img/filter/unble.jpg" alt="이미지" />
            기상 천외한 숙소
          </Link>
        </div>
      </div>
      <div className={styles.buttonCover}>
        <button className={styles.button}>
          <GiSettingsKnobs />
          <span className={styles.text}>필터</span>
        </button>
      </div>
    </div>
  );
};

export default MenuNav;
