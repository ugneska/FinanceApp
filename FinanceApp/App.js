// Imports: Dependencies
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
import React from 'react';
import * as firebase from 'firebase';
import 'firebase/firestore';
import firebaseConfig from './config';
// Imports: Screens
import InfiniteScroll from './screens/InfiniteScroll';
// Firebase: Initialize
firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  databaseURL: firebaseConfig.databaseURL,
  projectId: firebaseConfig.projectId,
  storageBucket: firebaseConfig.storageBucket,
  messagingSenderId: firebaseConfig.messagingSenderId,
});
// Firebase: Cloud Firestore
const database = firebase.firestore();
// React Native: App
export default function App() {
  return (
    
    <InfiniteScroll database={database}/>
  );
}