import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-storage'

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAMl0QsDMvgM8BjRf5ewrkIJe7BREgUqVw',
  authDomain: 'capstone-project-aaa24.firebaseapp.com',
  databaseURL: 'https://capstone-project-aaa24.firebaseio.com',
  projectId: 'capstone-project-aaa24',
  storageBucket: 'capstone-project-aaa24.appspot.com',
  messagingSenderId: '939139240918',
  appId: '1:939139240918:web:9793cd615a09db52a08a77',
  measurementId: 'G-K5W8EYWVLX',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
