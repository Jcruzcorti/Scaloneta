import React from 'react'
import ItemList from '../../components/itemList/ItemList';
import {useState,useEffect} from 'react'
import {Questions1} from '../../mock/Questions';


 function ItemListContainer(props) {

//  const [welcome, setWelcome] = useState(true)
 const [questions, setQuestions]=useState([])

 useEffect(() => {
   
    const getQuestions = new Promise((resolve, reject) => {
        
            // setWelcome(false)
            // setQuestions(Questions)
            setTimeout(() => {
            resolve(Questions1)
        }, 3000)
        
    
    })
    getQuestions
    .then((asa)=>setQuestions(asa))


// if (questions==""){
//     setQuestions(Questions)
// }
// else{
//     setQuestions(questions)
// }

}, [])

//    if (){
//     setWelcome(false)
//     setQuestions([])
//    }

//    else{
//     setWelcome(false)
//    }
 
   
//  }, [])

// function assss() {
//     setQuestions(Questions)
// }

 
  return (
    <div>
       <h1 className="H1Tittle"> {props.greet}</h1>
       {/* <button onClick={assss}>aca</button> */}
       <div>
            <ItemList items={questions}/>
        </div>           
    </div>

)}

export default ItemListContainer;