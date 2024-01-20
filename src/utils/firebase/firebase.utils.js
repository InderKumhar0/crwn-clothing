import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJPUTby7pbBKOcZrnUB14huLmsMd2UXrQ",
  authDomain: "crwn-clothing-db-b7c76.firebaseapp.com",
  projectId: "crwn-clothing-db-b7c76",
  storageBucket: "crwn-clothing-db-b7c76.appspot.com",
  messagingSenderId: "510820609161",
  appId: "1:510820609161:web:5a4d3954d24fed73c2aa58",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// ///////////////////////////////////////
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // if user data does not exists
  //create / set the document with the data from userAuth in my collection

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
  //return userDocRef
};
