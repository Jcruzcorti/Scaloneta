import React from 'react'
// import { Questions } from '../../mock/Questions'
// import {useNavigate } from 'react-router-dom';
// import {Questions1,Questions2,Questions3} from '../../mock/Questions';


 function Item({item}) {

  // const [actualQuestion, setActualQuestion]=useState(0)
  // const [score, setScore]=useState(0)
  // const [isFinished, setIsFinished ]=useState(false)



  return (

    <div>
        
        <div>
           
            <h3>{item.name} {item.question}</h3>
            
            {/* <h3>{Questions[actualQuestion].question}</h3> */}
          
            {/* BUSCAR OPCION ESTILIZADA Y QUE ESTA INFO SE GUARDE EN UN ESTADO PARA IR ACUMULANDO RESPUESTAS CORRECTAS PARA EL RESULTADO */}
        
        </div>

        <div>
          {/* {Questions[actualQuestion].options.map((res)=>(
            <>
            <button >{res.Quiestions[options.option]}</button>
       
            </>
          )
          )} */}
          <p>{item.option1}{<input type="radio" name="answer"/>}</p>
          <p>{item.option2}{<input type="radio" name="answer"/>}</p>
          <p>{item.option3}{<input type="radio" name="answer"/>}</p>
          <p>{item.option4}{<input type="radio" name="answer"/>}</p>

          {/* <p>{item.options.find(op=>op.option1)}</p>
          <p>{item.options.find(op=>op.option2)}</p>
          <p>{item.options.find(op=>op.option3)}</p>
          <p>{item.options.find(op=>op.option4)}</p> */}

            {/* BUSCAR OPCION ESTILIZADA Y QUE ESTA INFO SE GUARDE EN UN ESTADO PARA IR ACUMULANDO RESPUESTAS CORRECTAS PARA EL RESULTADO */}
        
        </div>
        
    </div>
  )
}


export default Item;