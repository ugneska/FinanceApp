import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCXoxcf69KtmR1ZZTlrDhhSsOFDurEQbdU",
    authDomain: "covid-project-95c4f.firebaseapp.com",
    databaseURL: "https://covid-project-95c4f.firebaseio.com",
    projectId: "covid-project-95c4f",
    storageBucket: "covid-project-95c4f.appspot.com",
    messagingSenderId: "703919498212",
    appId: "1:703919498212:web:9e5a441d36e06c2f05ddf1",
    measurementId: "G-DVSXBQ0VEW"
};

const fire = firebase.initializeApp(firebaseConfig)
export default fire