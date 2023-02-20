/** @format */

import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";

import MenuNav from "./component/main/menuNav/MenuNav";
import HotelPList from "./component/main/filter/HotelPList";
import HotelBList from "./component/main/filter/HotelBList";
import { v4 as uuidv4 } from "uuid";

import { storage } from "./firebase/Firebase";
import { ref } from "firebase/storage";
import { listAll, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";

function App() {
  const [hotelInfo, setHotelInfo] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);
  let filter = useSelector((state) => state);
  if (filter === undefined) {
    filter = "인기";
  }

  //재사용을 위해 만든거

  const imgArray = useCallback(async () => {
    console.log("이미지어레이 안의 필터", filter);
    const newImgUrl = [];
    const imgFilterListRef = ref(storage, `호텔이미지/${filter}`);
    const array = await listAll(imgFilterListRef);
    const promises = array.items.map((item) => getDownloadURL(item));
    const urls = await Promise.all(promises);
    setImgUrl(urls);
    console.log("출력되는지", urls);
  }, [filter]);

  // response.items.forEach((item) => {
  //   getDownloadURL(item).then((url) => {
  //     setImgUrl(url);
  //   });
  // });}
  console.log("이미지Url");

  const hotel = useCallback(async () => {
    const response = await fetch(
      "https://airb-23ec7-default-rtdb.firebaseio.com/hotal__info.json"
    );
    const data = await response.json();

    const loadhotels = [];

    for (const key in data) {
      loadhotels.push({
        id: uuidv4(),
        value: data[key].value,
        country: data[key].country,
        name: data[key].name,
        가격: data[key].가격,
        거리: data[key].거리,
        날짜: data[key].날짜,
      });
    }

    setHotelInfo(loadhotels);
  }, []);

  useEffect(() => {
    imgArray();
    hotel();
  }, [imgArray, hotel]);
  console.log("실행전 필터는?", filter);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <MenuNav />
        <Routes>
          <Route
            path="/"
            element={<HotelPList imgUrl={imgUrl} hotelInfo={hotelInfo} />}
          ></Route>
          <Route
            path="/beach"
            element={<HotelBList imgUrl={imgUrl} hotelInfo={hotelInfo} />}
          ></Route>
          <Route
            path="/"
            element={<HotelPList imgUrl={imgUrl} hotelInfo={hotelInfo} />}
          ></Route>
        </Routes>
      </BrowserRouter>
      <button onClick={imgArray}>버튼</button>
    </div>
  );
}

export default App;
