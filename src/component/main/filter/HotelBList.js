/** @format */

import React, { useState, useEffect } from "react";
import HotelInfo from "./hotelInfo/HotelInfo";
import styles from "../filter/hotelInfo/HotelInfoList.module.css";

const HotelBList = (props) => {
  const [hotelList, setHotelList] = useState(props.hotelInfo);

  useEffect(() => {
    const loadImages = async () => {
      const promises = props.hotelInfo.map(async (hotel) => {
        if (!hotel.img) {
          const response = await fetch(hotel.imgUrl);
          const blob = await response.blob();
          hotel.img = URL.createObjectURL(blob);
        }
        return hotel;
      });
      const updatedHotels = await Promise.all(promises);
      setHotelList(updatedHotels);
    };

    loadImages();
  }, [props.hotelInfo]);
  console.log(hotelList);
  return (
    <ul className={styles.flex}>
      {hotelList.map(
        (hotel) =>
          hotel.value === "해변" && (
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

export default HotelBList;
