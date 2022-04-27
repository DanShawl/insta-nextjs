// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA69t70KtKq34TTAXNWbL7ovlTcIIfKsSQ',
  authDomain: 'insta-next-firebase.firebaseapp.com',
  projectId: 'insta-next-firebase',
  storageBucket: 'insta-next-firebase.appspot.com',
  messagingSenderId: '204340309407',
  appId: '1:204340309407:web:484043fb1d3aa72c9761aa',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
//  get the apps that were currently initialized
//  if the length = null, initialize a new app
//  otherwise, use the current app we already initialized

const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
