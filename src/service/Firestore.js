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

        
    //  const Questions = [

    //     {
    //         id: 1,
    //         name: "1-",
    //         name2: "Fácil",
    //         category: 'Facil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Quién es el actual director técnico de la selección Argentina?',
    //         options: [
    //             {option: "Alejandro Sabella", isCorrect: false},
    //             {option: "Lionel Scaloni", isCorrect: true},
    //             {option: "Edgardo Bauza", isCorrect: false},
    //             {option: "Marcelo Gallardo", isCorrect: false},
    //         ]       
        
    //     },

    //     {
    //         id: 2,
    //         name: "2-",
    //         name2: "Fácil",
    //         category: 'Facil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Cuál es el primer nombre del "Dibu" Martinez?',
    //         options: [
    //                 {option: "Esteban", isCorrect: false},
    //                 {option: "Emilio", isCorrect: false},
    //                 {option: "Emiliano", isCorrect: true},
    //                 {option: "Ezequiel", isCorrect: false},
    //             ]     
            

    //     },

    //     {
    //         id: 3,
    //         name: "3-",
    //         name2: "Fácil",
    //         category: 'Facil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿A qué futbolista de la selección se le atribuye el famoso "Baila como el papu"?',
    //         options: [
    //             {option: "Nicolás Tagliafico", isCorrect: false},
    //             {option: "Lautaro Martinez", isCorrect: false},
    //             {option: "Leandro Paredes", isCorrect: false},
    //             {option: "Alejandro Gómez", isCorrect: true},
    //         ]  
    

    //     },

    //     {
    //         id: 4,
    //         name: "4-",
    //         name2: "Fácil",
    //         category: 'Facil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿A qué jugador de la selección lo apodan el "Toro"?', 
    //             options: [
    //                 {option: "Lisandro Martinez", isCorrect: false},
    //                 {option: "Giovani Lo Celso", isCorrect: false},
    //                 {option: "Lautaro Martinez", isCorrect: true},
    //                 {option: "Julián Álvarez", isCorrect: false},
    //             ]      


    //     },

    //     {
    //         id: 5,
    //         name: "5-",
    //         name2: "Fácil",
    //         category: 'Facil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Quién de estos futbolistas no jugó nunca en Boca jrs?', 
    //             options: [
    //                 {option: "Nahuel Molina Lucero", isCorrect: false},
    //                 {option: "Leandro Paredes", isCorrect: false},
    //                 {option: "Ángel Di María", isCorrect: true},
    //                 {option: "Alexis Mac Allister", isCorrect: false},
    //             ]   

    //     },


    //     {
    //         id: 6,
    //         name: "6-",
    //         category: 'Dificil',
    //         name2: "Díficil",
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Quién fue el máximo goleador de la scaloneta hasta el mundial 2022?', 
    //             options: [
    //                 {option: "Lionel Messi", isCorrect: true},
    //                 {option: "Julián Álvarez", isCorrect: false},
    //                 {option: "Ángel Di María", isCorrect: false},
    //                 {option: "Lautaro Martinez", isCorrect: false},
    //             ]   

    //     },

    //     {
    //         id: 7,
    //         name: "7-",
    //         name2: "Díficil",
    //         category: 'Dificil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿En qué club nunca jugó Giovani Lo Celso?', 
    //             options: [
    //                 {option: "Villarreal", isCorrect: false},
    //                 {option: "Paris Saint-Germain", isCorrect: false},
    //                 {option: "Inter de Milán", isCorrect: true},
    //                 {option: "Real Betis", isCorrect: false},
    //             ]   


    //     },

    //     {
    //         id: 8,
    //         name: "8-",
    //         name2: "Díficil",
    //         category: 'Dificil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Quién tiene el número 19 en la camiseta de la selección?', 
    //             options: [
    //                 {option: "Guido Rodriguez", isCorrect: false},
    //                 {option: "Nicolás Otamendi", isCorrect: true},
    //                 {option: "Cristian Romero", isCorrect: false},
    //                 {option: "Enzo Fernández", isCorrect: false},
    //             ]   


    //     },

    //     {
    //         id: 9,
    //         name: "9-",
    //         name2: "Díficil",
    //         category: 'Dificil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Cuál de los siguientes jugadores no debutó en Estudiantes de la Plata?', 
    //             options: [
    //                 {option: "Nehuen Pérez", isCorrect: true},
    //                 {option: "Gerónimo Rulli", isCorrect: false},
    //                 {option: "Joaquín Correa", isCorrect: false},
    //                 {option: "Juan Foyth", isCorrect: false},
    //             ]   
    //     },

    //     {
    //         id: 10,
    //         name: "10-",
    //         name2: "Díficil",
    //         category: 'Dificil',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Qué combinación de futbolistas jugaron alguna vez en River Plate?', 
    //             options: [
    //                 {option: "Giovanni Simeone - Marcos Senesi - Lucas Alario", isCorrect: false},
    //                 {option: "Guido Rodríguez - Nicolás González - Germán Pezzella", isCorrect: false},
    //                 {option: "Lucas Martinez Quarta- Lucas Ocampos - Emiliano Buendía", isCorrect: false},
    //                 {option: "Lucas Alario - Facundo Medina - Germán Pezzella", isCorrect: true},
    //             ]   


    //     },


    //     {
    //         id: 11,
    //         name: "11-",
    //         name2: "Fanático",
    //         category: 'Fanatico',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Qué combinación de jugadores son todos patrocinados por Nike?', 
    //             options: [
    //                 {option: "Leandro Paredes - Alejandro Gómez - Nicolás Tagliafico", isCorrect: false},
    //                 {option: "Lautaro Martinez - Nicolas Otamendi - Rodrigo De Paul", isCorrect: false},
    //                 {option: "Lisandro Martinez - Nicolás Otamendi - Nicolás Tagliafico", isCorrect: true},
    //                 {option: "Julián Álvarez - Rodrigo De Paul - Alejandro Gómez", isCorrect: false},
    //             ]   



    //     },

    //     {
    //         id: 12,
    //         name: "12-",
    //         name2: "Fanático",
    //         category: 'Fanatico',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Cuál de los siguientes jugadores no convirtió gol en la era Scaloni?', 
    //             options: [
    //                 {option: "Nicolás Otamendi", isCorrect: true},
    //                 {option: "Germán Pezzella", isCorrect: false},
    //                 {option: "Guido Rodríguez", isCorrect: false},
    //                 {option: "Cristian Romero", isCorrect: false},
    //             ]   


    //     },

    //     {
    //         id: 13,
    //         name: "13-",
    //         name2: "Fanático",
    //         category: 'Fanatico',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Qué jugador no nació en Buenos Aires?', 
    //             options: [
    //                 {option: "Nicolás González", isCorrect: false},
    //                 {option: "Rodrigo De Paul", isCorrect: false},
    //                 {option: "Thiago Almada", isCorrect: false},
    //                 {option: "Lisandro Martinez", isCorrect: true},
    //             ]  

    //     },

    //     {
    //         id: 14,
    //         name: "14-",
    //         name2: "Fanático",
    //         category: 'Fanatico',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Cuál de los siguientes jugadores tiene como pie hábil la zurda?', 
    //             options: [
    //                 {option: "Nehuen Pérez", isCorrect: false},
    //                 {option: "Nicolás Dominguez", isCorrect: false},
    //                 {option: "Marcos Senesi", isCorrect: true},
    //                 {option: "Thiago Almada", isCorrect: false},
    //             ] 


    //     },

    //     {
    //         id: 15,
    //         name: "15-",
    //         name2: "Fanático",
    //         category: 'Fanatico',
    //         // img: '../../img/tiemposg.png',
    //         img: 'Acá va la url de la imagen o la ruta de la misma',
    //         question: '¿Quiénes convirtieron en la finalissima vs Italia en Wembley?', 
    //         options: [
    //             {option: "Lionel Messi - Julián Álvarez - Paulo Dybala", isCorrect: false},
    //             {option: "Lautaro Martinez - Ángel Di María - Paulo Dybala", isCorrect: true},
    //             {option: "Lionel Messi - Ángel Di María - Paulo Dybala", isCorrect: false},
    //             {option: "Lautaro Martinez - Lionel Messi - Paulo Dybala", isCorrect: false},
    //         ] 


    //     },

    // ]


    const quizCollection = collection(appFirestore, "answers")
    const dataTimeStamp = Timestamp.now()
    const answersWidthDate = {
        player: dataAnswer.player,
        total: dataAnswer.total
    } 
    const answerCreated = await addDoc(quizCollection, answersWidthDate)
    return answerCreated;

    }


export default appFirestore;