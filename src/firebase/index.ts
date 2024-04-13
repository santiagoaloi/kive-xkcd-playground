import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { browserLocalPersistence, browserPopupRedirectResolver, initializeAuth, onAuthStateChanged } from 'firebase/auth'

import { getFunctions } from 'firebase/functions'

import { firebaseOptions } from './options.js'

// Initialize Firebase with a "default" Firebase project
const app = initializeApp(firebaseOptions())

// https://github.com/firebase/firebase-js-sdk/issues/1420#issuecomment-1601277470
const auth = initializeAuth(app, {
  persistence: [browserLocalPersistence],
  popupRedirectResolver: browserPopupRedirectResolver,
})

const db = getFirestore(app) // Firestore (Database)
const storage = getStorage(app) // Firebase Storage
const functions = getFunctions(app) // Cloud Functions

// Helper function to get the user's authentication state asynchronously.
function getUserState() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, resolve, reject)
  })
}

// Export the initialized Firebase app and various Firebase modules.
export { app, db, storage, auth, functions, getUserState }
