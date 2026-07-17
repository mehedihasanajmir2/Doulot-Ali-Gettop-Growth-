import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import config from '../../firebase-applet-config.json';

const firebaseConfig = {
  projectId: (import.meta as any).env.VITE_FIREBASE_PROJECT_ID || config.projectId,
  appId: (import.meta as any).env.VITE_FIREBASE_APP_ID || config.appId,
  apiKey: (import.meta as any).env.VITE_FIREBASE_API_KEY || config.apiKey,
  authDomain: (import.meta as any).env.VITE_FIREBASE_AUTH_DOMAIN || config.authDomain,
  firestoreDatabaseId: (import.meta as any).env.VITE_FIREBASE_FIRESTORE_DATABASE_ID || config.firestoreDatabaseId,
  storageBucket: (import.meta as any).env.VITE_FIREBASE_STORAGE_BUCKET || config.storageBucket,
  messagingSenderId: (import.meta as any).env.VITE_FIREBASE_MESSAGING_SENDER_ID || config.messagingSenderId,
  measurementId: (import.meta as any).env.VITE_FIREBASE_MEASUREMENT_ID || config.measurementId || ""
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore with specific database ID.
// Fallback to the custom named database ID 'ai-studio-doulotali-3645692c-26a0-4df1-a411-4549148162cc' if not specified in the environment or config.
const dbId = firebaseConfig.firestoreDatabaseId || "ai-studio-doulotali-3645692c-26a0-4df1-a411-4549148162cc";
export const db = getFirestore(app, dbId);

export default app;
