import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyDd5kx5-9Bul6A8z4wf7ni_g6cKu8G_cSw",
    authDomain: "reactcyoamasangcayj.firebaseapp.com",
    projectId: "reactcyoamasangcayj",
    storageBucket: "reactcyoamasangcayj.appspot.com",
    messagingSenderId: "1010744420832",
    appId: "1:1010744420832:web:15c2fd79e48c7c0c622385"
  };

  const firebase = initializeApp(firebaseConfig);
  const db = getFirestore();
  const posts = [];
  const firstId = [];
  async function getData() {
    posts.length = 0;

    const querySnapshot = await getDocs(collection(db, "CYOA.MASANGCAY"));
    querySnapshot.forEach((doc) => {
      posts.push(doc.data());
      console.log(doc.data().ID)
   
    });  
  }

  function getPosts(){
    console.log(posts)
    return posts.sort((a, b)=> a.ID - b.ID);
  }

  function getFirstId(){
      return firstId;
  }

export {getData, firebase, db, getPosts, getFirstId}