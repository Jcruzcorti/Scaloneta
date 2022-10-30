import React, {useState,useEffect } from 'react'
import {Questions} from '../../mock/Questions';
import CartModal from '../cartmodal/CartModal';
import './itemdetailcontainer.css'



 function ItemDetailContainer(props) {


    const [actualQuestion, setActualQuestion]=useState(0)
    const [score, setScore]=useState(0)
    const [isFinished, setIsFinished ]=useState(false)
    const [timeLeft, setTimeLeft] =useState(100)
    const [finishedTime, setFinishedTime] =useState(false)



    function handleAnswerSubmit(isCorrect,e) {
        if (isCorrect){
            setScore(score + 1)
        }
        // e.target.classList.add(isCorrect ? "correct" : "incorrect")
        // setTimeout(()=>{
            if (actualQuestion === Questions.length - 1){
                setIsFinished(true)
            }
            else {
                setActualQuestion(actualQuestion + 1);
            }
        // },500);
    }



    useEffect(() => {

        const interval= setInterval(() => {
          
            if (timeLeft>0){
                setTimeLeft(timeLeft-1)
            }
            else if (timeLeft===0){
                setFinishedTime(true)
            }
        }, 1000);
        
        return () => clearInterval(interval);          
        
    },[timeLeft]);



    if (isFinished)
    return(
        <div className='DivPrimary'>
          <div>
            <h1 className="H1Tittle"> {props.greet}</h1>     
            <CartModal  score={score}/> 
          </div>
        </div>
    )
    



  return (
    <div className='DivPrimary'>
        
      <h1 className="H1Tittle"> {props.greet}</h1>
        <div className='DivQuestions'>

        <div>
            {
              (!finishedTime)
              ?<><p>Pregunta {actualQuestion + 1} de {Questions.length}</p></>
              :null
            }

        </div>
        
        <div className='DivTitle'>
            {
              (!finishedTime)
              ?<><p className='PQuestion'> {Questions[actualQuestion].question}</p></>
              :null
            }
                            
        </div>

        <div className='DivTime'>
            {
                (!finishedTime)
                ?<p>Tiempo restante {timeLeft} segundos</p>
                :<>
                  <p>Se terminó el tiempo</p>
                  <CartModal  score={score}/>
                </>
            }

        </div>
        </div>


     
      <div className='DivOptions'>
        {
            (!finishedTime)
            ?<>
                {Questions[actualQuestion].options.map((resp,index)=>(                   
                <button className='ButtonOption'
                    key={index}
                        onClick={(e)=> handleAnswerSubmit(resp.isCorrect,e)}
                        disabled={finishedTime}>
                    {resp.option}
                </button>
            ))}
            </>                  
            :null
        }                       
      </div>
    </div>

)}

export default ItemDetailContainer;