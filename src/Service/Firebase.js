import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-091t3gYyDrtgu92OUJ_ak4Gxw4RjSz8",
  authDomain: "landingpage-izzyway.firebaseapp.com",
  projectId: "landingpage-izzyway",
  storageBucket: "landingpage-izzyway.appspot.com",
  messagingSenderId: "717139463376",
  appId: "1:717139463376:web:ac1c5cc050174d7841a2d5",
  measurementId: "G-M7XG42CXLT",
};

const initFirebaseApp = initializeApp(firebaseConfig);

const authFirebase = getAuth(initFirebaseApp);

const dbBanco = getFirestore(initFirebaseApp);

export { authFirebase, dbBanco };
