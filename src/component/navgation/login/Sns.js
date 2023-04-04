/** @format */

import React from "react";

const Sns = () => {
  const snsName = [
    "페이스북으로 로그인하기",
    "구글로 로그인하기",
    "애플로 로그인하기",
    "이메일로 로그인하기",
  ];
  return (
    <div>
      {snsName.map((Name) => {
        return (
          <div>
            <img alt="sns이미지"></img>
            <span>{Name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Sns;
