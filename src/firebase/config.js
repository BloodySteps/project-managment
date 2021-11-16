import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAi1b2rsESEpKnaMz0NylJKUb1a3sEmAVQ",
  authDomain: "the-dojo-4e24f.firebaseapp.com",
  projectId: "the-dojo-4e24f",
  storageBucket: "the-dojo-4e24f.appspot.com",
  messagingSenderId: "580308496665",
  appId: "1:580308496665:web:a7de563bb7db99581c1588"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }