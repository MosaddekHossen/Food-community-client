import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAJan_ba98Nga2iBULWNEqQuVmbEYZBjyo",
    authDomain: "community-food-sharing-c4adb.firebaseapp.com",
    projectId: "community-food-sharing-c4adb",
    storageBucket: "community-food-sharing-c4adb.appspot.com",
    messagingSenderId: "199332751211",
    appId: "1:199332751211:web:43870a9c45332df5d10e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;