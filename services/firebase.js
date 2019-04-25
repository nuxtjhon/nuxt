import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDbUKxg5Yd7YCNXx3-Mm-JJBefsRMUC37Q",
  authDomain: "nuxt-b4d4d.firebaseapp.com",
  databaseURL: "https://nuxt-b4d4d.firebaseio.com",
  projectId: "nuxt-b4d4d",
  storageBucket: "nuxt-b4d4d.appspot.com",
  messagingSenderId: "995140486240"
};

if(!firebase.apps.length){
  firebase.initializeApp(config);
}
  
const db = firebase.firestore()
export default firebase
export { db }