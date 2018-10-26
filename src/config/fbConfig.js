import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBy21o6L9a8jqkdcMloOyHAShazNB0ZL3A",
    authDomain: "net-ninja-marioplan-53df1.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-53df1.firebaseio.com",
    projectId: "net-ninja-marioplan-53df1",
    storageBucket: "net-ninja-marioplan-53df1.appspot.com",
    messagingSenderId: "573364980133"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;