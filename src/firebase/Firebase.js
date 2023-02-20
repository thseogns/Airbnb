/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCPsoGWPe9LA_1FoP2ULOB0YgFoqtBtA-0",
  authDomain: "airb-23ec7.firebaseapp.com",
  databaseURL: "https://airb-23ec7-default-rtdb.firebaseio.com",
  projectId: "airb-23ec7",
  storageBucket: "airb-23ec7.appspot.com",
  messagingSenderId: "474195310866",
  appId: "1:474195310866:web:cecbe35dd037e251e61bcb",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
