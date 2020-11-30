import * as firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDmBiLvPVhk60NGpbV9JidJnf--l5mh1sQ",
  authDomain: "chat-app-e2e34.firebaseapp.com",
  databaseURL: "https://chat-app-e2e34.firebaseio.com",
  projectId: "chat-app-e2e34",
  storageBucket: "chat-app-e2e34.appspot.com",
  messagingSenderId: "400872159576",
  appId: "1:400872159576:web:26e2dc16ab361b126c4d2d",
  measurementId: "G-0YPNHH6HQN"
}

firebase.initializeApp(firebaseConfig)

export default firebase