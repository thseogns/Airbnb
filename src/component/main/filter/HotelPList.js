/** @format */

import React from "react";
import HotelInfo from "./hotelInfo/HotelInfo";
import styles from "../filter/hotelInfo/HotelInfoList.module.css";

const HotelPList = (props) => {
  if (Array.isArray(props.imgUrl) && props.imgUrl.length > 0) {
    for (let i = 0; i < props.imgUrl.length; i++) {
      console.log("유알엘 잘건너왔나", props.imgUrl[i]);
      if (!props.hotelInfo[i]) {
        continue; // Skip to the next iteration if props.hotelInfo[i] is undefined
      }
      props.hotelInfo[i].img = props.imgUrl[i];
      console.log("호텔인포", props.hotelInfo[i]);
    }
  }
  props.hotelInfo.map(
    (hotel) => hotel.value === "인기" && console.log("url의길이 ", hotel)
  );
  return (
    <ul className={styles.flex}>
      {props.hotelInfo.map(
        (hotel) =>
          hotel.value === "인기" && (
            <HotelInfo
              img={hotel.img}
              key={hotel.id}
              name={hotel.name}
              country={hotel.country}
              가격={hotel.가격}
              거리={hotel.거리}
              날짜={hotel.날짜}
            />
          )
      )}
    </ul>
  );
};

export default HotelPList;
