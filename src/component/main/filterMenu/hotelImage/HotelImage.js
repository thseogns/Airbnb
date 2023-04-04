/** @format */

import { React, useEffect, useState, useCallback } from "react";

import styles from "./HotelImage.module.css";
const HotelImage = (props) => {
  const [filterValue, setFilterValue] = useState("");
  const value = props.value;
  const filterImage = useCallback(() => {
    switch (value) {
      case "인기":
        setFilterValue("populer");

        break;
      case "해변":
        setFilterValue("beach");

        break;
      default:
    }
  }, [value]);

  useEffect(() => {
    filterImage();
  }, [filterImage]);

  const imgID = props.id;

  return (
    <div className={styles.box}>
      <img
        className={styles.img}
        src={process.env.PUBLIC_URL + `img/${filterValue}${imgID}.webp`}
        alt="aa"
      />
    </div>
  );
};

export default HotelImage;
