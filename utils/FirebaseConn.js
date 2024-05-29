import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyATPf-e7j7it4PCQk7slJ6V3f_jmLJSNCg",
  authDomain: "weather-21c06.firebaseapp.com",
  databaseURL: "https://weather-21c06-default-rtdb.firebaseio.com",
  projectId: "weather-21c06",
  storageBucket: "weather-21c06.appspot.com",
  messagingSenderId: "859201617919",
  appId: "1:859201617919:web:8a563398dd7e016f0571ca",
  measurementId: "G-4R14WBPPW7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, onValue };