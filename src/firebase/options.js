export function firebaseOptions() {
  const {
    VITE_FIREBASE_APP_ID,
    VITE_FIREBASE_API_KEY,
    VITE_FIREBASE_PROJECT_ID,
    VITE_FIREBASE_AUTH_DOMAIN,
    VITE_FIREBASE_STORAGE_BUCKET,
    VITE_FIREBASE_MESSAGING_SENDER_ID,
  } = import.meta.env

  return {
    appId: VITE_FIREBASE_APP_ID,
    apiKey: VITE_FIREBASE_API_KEY,
    projectId: VITE_FIREBASE_PROJECT_ID,
    authDomain: VITE_FIREBASE_AUTH_DOMAIN,
    storageBucket: VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGING_SENDER_ID,
  }
}
