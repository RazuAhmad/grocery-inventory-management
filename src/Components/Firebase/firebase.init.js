import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPAyLtuNj-MQvqLxNwdBZwA_MEVwIHSsE",
  authDomain: "grocery-store-app-5c413.firebaseapp.com",
  projectId: "grocery-store-app-5c413",
  storageBucket: "grocery-store-app-5c413.appspot.com",
  messagingSenderId: "833335885952",
  appId: "1:833335885952:web:92dc8cd3de22d601946665",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
