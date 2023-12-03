// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDexnYXdoZysCEg7QlqYrbdQq041Vs3VDI",
//   authDomain: "tktr-flow.firebaseapp.com",
//   projectId: "tktr-flow",
//   storageBucket: "tktr-flow.appspot.com",
//   messagingSenderId: "96470271505",
//   appId: "1:96470271505:web:894d168f0e5be58c4393b0",
//   measurementId: "G-S30T5F4DKM",
// };

// Initialize Firebase
const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

const firestore = getFirestore(app);

export { firestore };

// import * as admin from "firebase-admin";
// import serviceAccount from "./admin.json";

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });

// const db = admin.firestore();
// export { admin, db };
