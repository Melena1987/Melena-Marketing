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
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Safely access environment variables to prevent crashes when import.meta.env is undefined.
const env = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY,
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.VITE_FIREBASE_APP_ID
};

let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;


// Check if all required config values are present and are non-empty strings
const isConfigValid = Object.values(firebaseConfig).every(
  (value) => typeof value === 'string' && value.length > 0
);

if (isConfigValid) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (error) {
    console.error("Firebase initialization failed:", error);
    db = null; // Ensure db is null if initialization fails
    storage = null;
  }
} else {
  // This message is helpful for developers in the console.
  console.warn(
    "Firebase configuration is incomplete. Contact form will be disabled. " +
    "Ensure all VITE_FIREBASE_* environment variables are set correctly."
  );
}

// Export the instances, which will be null if initialization fails
export { db, storage };