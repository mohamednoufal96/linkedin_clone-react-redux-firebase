import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOAMIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_CENTER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

const firebaseApp = initializeApp(firebaseConfig);

const firebaseDb = getFirestore(firebaseApp);
// const firebaseAuth = firebaseApp.auth();
// const firebaseTimestamp = firebaseApp.firestore.FieldValue.serverTimestamp();

export { firebaseDb };
