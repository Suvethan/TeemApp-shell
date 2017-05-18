import firebase from 'firebase'
let config = {
   	apiKey: "AIzaSyBK4uEY_wPtqJ7frnSA6Iq5ed9aDWVc-dc",
    authDomain: "teemweb-ffac9.firebaseapp.com",
    databaseURL: "https://teemweb-ffac9.firebaseio.com",
    projectId: "teemweb-ffac9",
    storageBucket: "teemweb-ffac9.appspot.com",
    messagingSenderId: "529479076399"
};

var TeemApp = firebase.initializeApp(config);
export default {
 	teemApp:TeemApp
   }

