import React from 'react'
// import {useState,useEffect} from 'react'
// import {Questions1,Questions2,Questions3} from '../../mock/Questions';
// import { Link, useParams } from 'react-router-dom';
// import ItemDetail from '../../components/itemDetail/ItemDetail';






// function getQuiestions1() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(Questions1)
//     }, 1000)
    
// })
// }
// function getQuiestions2() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//         resolve(Questions2)
//     }, 1000)
    
// })
// }
// function getQuiestions3() {
//     return new Promise((resolve) => {
        
//         setTimeout(() => {
//         resolve(Questions3)
//     }, 1000)
    
// })
// }




function ItemDetailContainer(props) {

  
//   const [questions, setQuestions]=useState([])
 
//   const {categoryId} =useParams()
 
//   useEffect(() => {
    
 
//     if (categoryId==="Facil") {
      
//       getQuiestions1(categoryId)
//       .then((asa)=>setQuestions(asa))
//   }

//   else if (categoryId==="Dificil"){
     
//       getQuiestions2(categoryId)
//       .then((asa)=>setQuestions(asa))
//   }

//   else if (categoryId==="Fanatico"){
    
//       getQuiestions3(categoryId)
//       .then((asa)=>setQuestions(asa))
//   }
  


// }, [categoryId])

 
    //   if (itemId<=5) {
         
    //      getQuiestions1(itemId)
    //      .then((asa)=>setQuestions(asa))
    //  }
 
    //  else if (itemId > 5 && itemId <= 10){
         
    //      getQuiestions2(itemId)
    //      .then((asa)=>setQuestions(asa))
    //  }
 
    //  else if (itemId > 10 && itemId <= 15){
         
    //      getQuiestions3(itemId)
    //      .then((asa)=>setQuestions(asa))
    //  }
     
 
 
//  }, [itemId])
 
 
  
   

  return (
    <div>
      {/* <ItemDetail item={questions}/> */}
        {/* <Link className="navli" to="/category/Dificil" >FÁCIL</Link>
        <Link className="navli" to="/category/Dificil" >DIFÍCIL</Link>
        <Link className="navli" to="/category/Fanatico" >FANÁTICO</Link> */}
    </div>
  )
}

export default ItemDetailContainer;