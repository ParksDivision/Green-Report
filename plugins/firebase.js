'use strict';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkPfCajEYToFWNWHPtysaqKSXSaYdS3So",
  authDomain: "green-report.firebaseapp.com",
  projectId: "green-report",
  storageBucket: "green-report.appspot.com",
  messagingSenderId: "625910950860",
  appId: "1:625910950860:web:e5582f3fc80f8fd0eb0b69",
  databaseURL: 'https://green-report-default-rtdb.firebaseio.com/'
};
// Initialize Firebase

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth()
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase
