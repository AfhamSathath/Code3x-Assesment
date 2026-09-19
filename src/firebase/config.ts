import { initializeApp, getApps } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration from environment variables or sensible default placeholders
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDemoConfigKeyForAssessmentOnly_X1",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "code3x-94308.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "code3x-94308",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "code3x-94308.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1234567890",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1234567890:web:abcdef123456"
};

// Initialize Firebase App
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Auth & Providers
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export default app;
