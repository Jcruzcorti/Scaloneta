import React,{useState, useEffect} from 'react'
// import { Link } from 'react-router-dom';
// import { Questions } from '../../mock/Questions'
// import {useNavigate } from 'react-router-dom';
// import {Questions1,Questions2,Questions3} from '../../mock/Questions';


 function Item({item}) {

  // const [actualQuestion, setActualQuestion]=useState(0)
  // const [score, setScore]=useState(0)
  // const [isFinished, setIsFinished ]=useState(false)


  // const urlDetail = `/detail/${item.category}`
  return (

    <div>
   
        {/* <h2>A continuación deberas seleccionar el nivel fácil </h2> */}
        {/* <h2>Click para comezar</h2> */}
        {/* <div> 
          <p>Pregunta {actualQuestion + 1} de {Questions.length}</p> 
          <h3>{Questions[actualQuestion].question}</h3>
        </div>

        <div>
          {Questions[actualQuestion].options.map((resp)=>(
            <button key={resp.option}>{resp.option}</button>
          ))}
         
          
           
        
        </div> */}
 

        <div> 
          <h3>{item.name} {item.question}</h3>
        </div>

        <div>
        
          <p>{item.options1}{<input type="radio" name="answer"/>}</p>
          <p>{item.options2}{<input type="radio" name="answer"/>}</p>
          <p>{item.options3}{<input type="radio" name="answer"/>}</p>
          <p>{item.options4}{<input type="radio" name="answer"/>}</p>
          
           
        
        </div>
    </div>
    
  )
}


export default Item;