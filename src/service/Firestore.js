// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCijWki-jNWEQH92-j1vDFvB0JI0S6qtWI",
  authDomain: "scaloneta-2b2e2.firebaseapp.com",
  projectId: "scaloneta-2b2e2",
  storageBucket: "scaloneta-2b2e2.appspot.com",
  messagingSenderId: "237419110846",
  appId: "1:237419110846:web:498ad6b2b54d32a589d9ef"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);


    export async function quizAnswer(dataAnswer){


    const quizCollection = collection(appFirestore, "answers")
    const dataTimeStamp = Timestamp.now()
    const answersWidthDate = {
        player: dataAnswer.player,
        score: dataAnswer.score,
        date: dataTimeStamp
    } 
    const answerCreated = await addDoc(quizCollection,answersWidthDate)
    return answerCreated;

    }


export default appFirestore;