import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0bWaiN2ysuMnPoAB_-r9W-8swvVkdctA",
  authDomain: "facebook-clone-3b43b.firebaseapp.com",
  projectId: "facebook-clone-3b43b",
  storageBucket: "facebook-clone-3b43b.appspot.com",
  messagingSenderId: "343194380943",
  appId: "1:343194380943:web:37fd4e63c89005ac3a9efa",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
