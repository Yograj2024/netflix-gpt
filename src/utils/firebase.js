// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCf0J78ueQ_pK62pu962OoPtcOpEDS5bwc",
  authDomain: "netflixgpt-356b2.firebaseapp.com",
  projectId: "netflixgpt-356b2",
  storageBucket: "netflixgpt-356b2.firebasestorage.app",
  messagingSenderId: "946626276776",
  appId: "1:946626276776:web:3facf225e95184b204419d",
  measurementId: "G-J7D95J4RMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();




