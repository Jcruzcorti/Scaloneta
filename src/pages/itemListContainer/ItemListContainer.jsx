import React from 'react'
import ItemList from '../../components/itemList/ItemList';
import {useState,useEffect} from 'react'
import {Questions1,Questions2,Questions3} from '../../mock/Questions';
import { Link, useParams } from 'react-router-dom';



function getQuiestions1() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Questions1)
    }, 1000)
    
})
}
function getQuiestions2() {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(Questions2)
    }, 1000)
    
})
}
function getQuiestions3() {
    return new Promise((resolve) => {
        
        setTimeout(() => {
        resolve(Questions3)
    }, 1000)
    
})
}





 function ItemListContainer(props) {

 const [welcome, setWelcome] = useState(true)
 const [questions, setQuestions]=useState([])

 const {categoryId} =useParams()

 useEffect(() => {
   


     if (categoryId==="Facil") {
        setWelcome(false)
        getQuiestions1(categoryId)
        .then((asa)=>setQuestions(asa))
    }

    else if (categoryId==="Dificil"){
        setWelcome(false)
        getQuiestions2(categoryId)
        .then((asa)=>setQuestions(asa))
    }

    else if (categoryId==="Fanatico"){
        setWelcome(false)
        getQuiestions3(categoryId)
        .then((asa)=>setQuestions(asa))
    }
    


}, [categoryId])


 
  return (
    <div>
        
        <h1 className="H1Tittle"> {props.greet}</h1>
        {        
            welcome                      
            ?<>
                <h3 className="H1Tittle"> Selecciona el nivel fácil para comenzar</h3> 
                <Link className="navli" to="/category/Facil" >FÁCIL</Link>
                <Link className="navli" to="/category/Dificil" >DIFÍCIL</Link>
                <Link className="navli" to="/category/Fanatico" >FANÁTICO</Link>
            </>              
            :null
        }
           
        <div>
            <ItemList items={questions}/>
        </div>
    
    </div>

)}

export default ItemListContainer;