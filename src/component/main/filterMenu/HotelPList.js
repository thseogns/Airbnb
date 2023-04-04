/** @format */

import React from "react";
import Hotel from "../populer.js";
import DetaileHotelInfo from "./DetaileHotelInfo";

import styles from "./HotelList.module.css";

const HotelPList = (props) => {
  const hotelInfo = Hotel.filter((data) => data.value === "인기");
  // Hotel.hotel__info.map((info) => {
  //   info.filter((data) => data.value === "인기");
  // })
  return (
    <div className={styles.ul_box}>
      {" "}
      <ul className={styles.flex}>
        {hotelInfo.map((info) => (
          <DetaileHotelInfo key={info.id} hotelInfo={info} />
        ))}
      </ul>
    </div>
  );
};

export default HotelPList;
