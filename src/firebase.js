import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBObfcN-E4hWacAGy_t83mST82t0g-n2ao",
	authDomain: "messenger-app-ab4b4.firebaseapp.com",
	projectId: "messenger-app-ab4b4",
	storageBucket: "messenger-app-ab4b4.appspot.com",
	messagingSenderId: "1092961808913",
	appId: "1:1092961808913:web:fcdbe31a1dec26679e37b0",
	measurementId: "G-39PGPM8F9V",
});

const db = firebaseApp.firestore();
export default db;
