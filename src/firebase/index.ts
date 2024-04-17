import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { browserLocalPersistence, browserPopupRedirectResolver, initializeAuth, onAuthStateChanged } from 'firebase/auth'

import { firebaseOptions } from './options.js'

export const firebaseApp = initializeApp(firebaseOptions())
const db = getFirestore(firebaseApp) // Firestore (Database)

// https://github.com/firebase/firebase-js-sdk/issues/1420#issuecomment-1601277470
const auth = initializeAuth(firebaseApp, {
  persistence: [browserLocalPersistence],
  popupRedirectResolver: browserPopupRedirectResolver,
})

// Helper function to get the user's authentication state asynchronously.
function getUserState() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, resolve, reject)
  })
}

export { db, auth, getUserState }
