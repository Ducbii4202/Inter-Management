import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '
  AIzaSyCAf0Gwg8bvIH73wEk3XTYY7nNJZVMBMHo',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export { auth, firebase };