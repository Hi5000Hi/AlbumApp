import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB9Uuehl066Lmt3z0G0NtDuDTdNfA6A2DQ",
  authDomain: "album-3c929.firebaseapp.com",
  databaseURL: "https://album-3c929.firebaseio.com",
  projectId: "album-3c929",
  storageBucket: "album-3c929.appspot.com",
  messagingSenderId: "414304714523",
  appId: "1:414304714523:web:927486529e68a0f79c9dbe"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
