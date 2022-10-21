import React from 'react'
import {useState,useEffect} from 'react'
// import {Questions1,Questions2,Questions3} from '../../mock/Questions';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/itemDetail/ItemDetail';



// function getQuiestions1() {
//     return new Promise((resolve, reject) => {
        
//         // setWelcome(false)
//         // setQuestions(Questions)
//         setTimeout(() => {
//         resolve(Questions1)
//     }, 3000)
    
// })
// }
// function getQuiestions2() {
//     return new Promise((resolve, reject) => {
        
//         // setWelcome(false)
//         // setQuestions(Questions)
//         setTimeout(() => {
//         resolve(Questions2)
//     }, 3000)
    
// })
// }
// function getQuiestions3() {
//     return new Promise((resolve, reject) => {
        
//         // setWelcome(false)
//         // setQuestions(Questions)
//         setTimeout(() => {
//         resolve(Questions3)
//     }, 3000)
    
// })
// }




function ItemDetailContainer(props) {

    const [questions, setQuestions]=useState([])

    const {categoryId} =useParams()
   
    useEffect(() => {
      
   //  ACA ENTRARÍAN LOS IF Y ELSE IF
       // getQuiestions1()
       // .then((asa)=>setQuestions(asa),setWelcome(false))
   
   
       // getQuiestions2()
       // .then((asa)=>setQuestions(asa),setWelcome(false))
   
   
    //     if (categoryId) {
    //        getQuiestions1(categoryId)
    //        .then((asa)=>setQuestions(asa))
    //    }
   
    //    else if (categoryId){
    //        getQuiestions2(categoryId)
    //        .then((asa)=>setQuestions(asa))
    //    }
   
    //    else if (categoryId){
    //        getQuiestions3(categoryId)
    //        .then((asa)=>setQuestions(asa))
    //    }
       
       
   // if (questions==""){
   //     setQuestions(Questions)
   // }
   // else{
   //     setQuestions(questions)
   // }
   
   }, [categoryId])
   

  return (
    <div>
        <ItemDetail item={questions}/>
    </div>
  )
}

export default ItemDetailContainer;