/** @format */

import React, { useEffect } from "react";
import styles from "./HotelInfo.module.css";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const HotelInfo = (props) => {
  // const filter = useSelector((state) => state.filter); //리덕스 함수의 state가 변경되면 이 컴포넌트가 재실행된다.
  console.log("실행 순서 1");
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch({ type: `${location.pathname}` });
    console.log("asdas", location.pathname.substring(1));
  }, []);

  return (
    <li className={styles.width}>
      <img src={props.img} />
      <p> {props.name}</p>
      <p> {props.country}</p>
      <p> {props.가격}</p>
      <p> {props.거리}</p>
      <p> {props.날짜}</p>
    </li>
  );
};

export default HotelInfo;
