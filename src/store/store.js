/** @format */

import { createStore } from "redux";

function filterReducer(state, action) {
  console.log("액션값은?", action.type);
  if (action.type === "/") {
    return (state = "인기");
  }

  if (action.type === "/beach") {
    return (state = "해변");
  }
}
const store = createStore(filterReducer);
export default store;
