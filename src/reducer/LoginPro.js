/** @format */

import React, { useReducer, useContext } from "react";
import { LoginContext, LoginDispatchContext } from "./reducer";

const LoginPro = ({ children }) => {
  const [loginValue, disfatch] = useReducer(loginReducer, false);
  console.log("콘텍스트에 있는 값", loginValue);
  return (
    <div>
      <LoginContext.Provider value={loginValue}>
        <LoginDispatchContext.Provider value={disfatch}>
          {children}
        </LoginDispatchContext.Provider>
      </LoginContext.Provider>
    </div>
  );
};
export function useLogin() {
  return useContext(LoginContext);
}
export function useLoginDispatch() {
  return useContext(LoginDispatchContext);
}
function loginReducer(state = false, action) {
  if (action.type === false) {
    return (state = true);
  } else {
    return (state = false);
  }
}

export default LoginPro;
