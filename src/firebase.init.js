// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyAkw-ljDTIUAFv6o9YPI4teQgDclpXlGD0",
//   authDomain: "doctors-portal-8be69.firebaseapp.com",
//   projectId: "doctors-portal-8be69",
//   storageBucket: "doctors-portal-8be69.appspot.com",
//   messagingSenderId: "522557529365",
//   appId: "1:522557529365:web:d661e5e67e30001bc41d1c"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;