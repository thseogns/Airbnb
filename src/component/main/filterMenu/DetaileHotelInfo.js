/** @format */

import React from "react";
import HotelImage from "./hotelImage/HotelImage";
import styles from "./DetaileHotelInfo.module.css";
const HotelInfo = (props) => {
  console.log("호텔인포", props.hotelInfo.country);
  return (
    <>
      {" "}
      <li key={props.hotelInfo.id} className={styles.flex}>
        {" "}
        <HotelImage value={props.hotelInfo.value} id={props.hotelInfo.id} />
        {props.hotelInfo.name && <span>{props.hotelInfo.name}</span>}
        {props.hotelInfo.country && <span>{props.hotelInfo.country}</span>}
        {props.hotelInfo.이름 && <span> {props.hotelInfo.name}</span>}
        {props.hotelInfo.거리 && <span>{props.hotelInfo.거리}거리</span>}
        {props.hotelInfo.조회수 && (
          <span>조회수: {props.hotelInfo.조회수}</span>
        )}
        <span> {props.hotelInfo.날짜}</span>{" "}
        <span> {props.hotelInfo.가격}</span>
      </li>
    </>
  );
};

export default HotelInfo;
