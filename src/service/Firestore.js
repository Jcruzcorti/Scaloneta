import { initializeApp } from "firebase/app";
import {addDoc, collection, getFirestore, Timestamp} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCijWki-jNWEQH92-j1vDFvB0JI0S6qtWI",
  authDomain: "scaloneta-2b2e2.firebaseapp.com",
  projectId: process.env.REACT_APP_PROYECT_FB_ID,
  storageBucket: "scaloneta-2b2e2.appspot.com",
  messagingSenderId: "237419110846",
  appId: "1:237419110846:web:498ad6b2b54d32a589d9ef"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);


    export async function quizAnswer(dataAnswer){


    const quizCollection = collection(appFirestore, "newAnswers")
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