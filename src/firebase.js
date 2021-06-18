import firebase from 'firebase/app'
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAHG9xVlI1BML18A3FR0uKNHI45hjNSG5w",
    authDomain: "permira-13.firebaseapp.com",
    databaseURL: "https://permira-13-default-rtdb.firebaseio.com",
    projectId: "permira-13",
    storageBucket: "permira-13.appspot.com",
    messagingSenderId: "737540360406",
    appId: "1:737540360406:web:0b5e4b34237d8f9b802177",
    measurementId: "G-FP3NPPJX9B"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default }