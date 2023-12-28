import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAf0Gwg8bvIH73wEk3XTYY7nNJZVMBMHo",
  authDomain: "Managament-System.firebaseapp.com",
  projectId: "managament-system",
  storageBucket:
    "https://console.firebase.google.com/u/0/project/managament-system/storage/managament-system.appspot.com/files",
  messagingSenderId: "200924850658",
  appId: "managament-system",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth, firebase };
