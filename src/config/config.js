import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyBnrOMqIebiuviIe5ocPE989WtIyO0S0t0",
    authDomain: "instragram-myversion.firebaseapp.com",
    databaseURL: "https://instragram-myversion.firebaseio.com",
    projectId: "instragram-myversion",
    storageBucket: "instragram-myversion.appspot.com",
    messagingSenderId: "698695687287",
    appId: "1:698695687287:web:c5ecaab18546dfe8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();

