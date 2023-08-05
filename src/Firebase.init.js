// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "API_Firebase",
  authDomain: "domain_Firebase",
  projectId: "project_firebase",
  storageBucket: "storage_bucket",
  messagingSenderId: "ID",
  appId: "App_ID_firebase",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
