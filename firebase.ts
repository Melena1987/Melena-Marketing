// Fix: The triple-slash directive for vite/client was causing an error.
// Manually defining the types for `import.meta.env` resolves both the
// directive error and the subsequent errors about 'env' not existing on 'ImportMeta'.
declare global {
  interface ImportMeta {
    readonly env: {
      readonly VITE_FIREBASE_API_KEY: string;
      readonly VITE_FIREBASE_AUTH_DOMAIN: string;
      readonly VITE_FIREBASE_PROJECT_ID: string;
      readonly VITE_FIREBASE_STORAGE_BUCKET: string;
      readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
      readonly VITE_FIREBASE_APP_ID: string;
    }
  }
}

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration.
// Using placeholder values because import.meta.env is not available in this environment.
// This prevents the app from crashing with a black screen.
const firebaseConfig = {
  apiKey: "AIzaSyYOUR_API_KEY_HERE",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);