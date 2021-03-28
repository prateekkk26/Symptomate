import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCSHXOgfkEia12MFm8vU-UgLsmsTHDmLxU",
	authDomain: "symptomate-110c9.firebaseapp.com",
	databaseURL: "https://symptomate-110c9-default-rtdb.firebaseio.com/",
	projectId: "symptomate-110c9",
	storageBucket: "symptomate-110c9.appspot.com",
	messagingSenderId: "433282736531",
	appId: "1:433282736531:web:b866b684b069570a090866"
}

const fire = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const db = firebase.firestore();

export default fire;