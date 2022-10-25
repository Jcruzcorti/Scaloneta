import React from 'react'
import './itemlistcontainer.css'
import ItemList from '../../components/itemList/ItemList';
import {useState,useEffect} from 'react'
import {Questions} from '../../mock/Questions';
import { Link, useNavigate, useParams } from 'react-router-dom';



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

// function getQuestions() {
//     return new Promise((resolve) => {
        
//         setTimeout(() => {
//         resolve(Questions)
//     }, 1000)
    
// })
// }



 function ItemListContainer(props) {





//  const [welcome, setWelcome] = useState(true)
//  const [questions, setQuestions]=useState([])

//  const {categoryId} =useParams()
//  const navigation = useNavigate()

// function asss(params) {
//     navigation("/category/Facil")
// }
//  useEffect(() => {
   
    // if (Questions) {
    //     setWelcome(false)
    //     getQuestions(Questions)
    //     // navigation("/category/Facil")
    //     .then((asa)=>setQuestions(asa))
    // }

    //  if (categoryId==="Facil") {
    //     setWelcome(false)
    //     getQuiestions1(categoryId)
    //     .then((asa)=>setQuestions(asa))
    // }

    // else if (categoryId==="Dificil"){
    //     setWelcome(false)
    //     getQuiestions2(categoryId)
    //     .then((asa)=>setQuestions(asa))
    // }

    // else if (categoryId==="Fanatico"){
    //     setWelcome(false)
    //     getQuiestions3(categoryId)
    //     .then((asa)=>setQuestions(asa))
    // }
    

// }, [categoryId])


const [actualQuestion, setActualQuestion]=useState(0)
const [score, setScore]=useState(0)
const [isFinished, setIsFinished ]=useState(false)
const [timeLeft, setTimeLeft] =useState(90 , " segundos")
const [finishedTime, setFinishedTime] =useState(false)
const [answersShown, setAnswersShown] =useState(false)



function handleAnswerSubmit(isCorrect,e) {
    if (isCorrect){
        // capaz va un e prevent default aca
        setScore(score + 1)
    }
    e.target.classList.add(isCorrect ? "correct" : "incorrect")

    setTimeout(()=>{
        if (actualQuestion === Questions.length - 1){
            setIsFinished(true)
        }
        else {
            setActualQuestion(actualQuestion + 1);
        }
    },1000);
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
                <span>Tu puntuación fue {score} respuestas correctas de {Questions.length}</span>
                <button
                onClick={()=>{
                    setIsFinished(false);
                    setAnswersShown(true)
                    setActualQuestion(0)
                }}>
                Ver Respuestas</button>
            </div>

        </div>
    )

if (answersShown) 
    return  (<div className='DivPrimary'>
    <div className='DivQuestions'>
        <div>
            <span>Pregunta {actualQuestion + 1} de </span> {Questions.length}

        </div>
        <div className='DivTitle'>
            {Questions[actualQuestion].question}
        </div>
        <div className='DivAnswer'>
        {Questions[actualQuestion].options.filter((opt)=>opt.isCorrect)[0].option}
            
        </div>
        <button onClick={()=>{
              if (actualQuestion === Questions.length - 1){
                // window.location.href="/"; ESTO ES PARA QUE SE ACTUALICE LA PÁGINA, PERO PODRIA PONER QUE ENVIE ESTOS DATOS A FIREBASE
            }
            else {
                setActualQuestion(actualQuestion + 1);
            }
        }}>
            Continuar
        </button>
    </div>
</div>)
    


  return (
    <div className='DivPrimary'>
        
        <h1 className="H1Tittle"> {props.greet}</h1>

        <div className='DivQuestions'>
            <div>
                <span>Pregunta {actualQuestion + 1} de </span> {Questions.length}

            </div>
            <div className='DivTitle'>
                {Questions[actualQuestion].question}
            </div>
            <div className='DivTime'>
                {
                    (!finishedTime)
                    ?<span>Tiempo restante {timeLeft}</span>
                    :<button onClick={()=>{
                        setTimeLeft(5)
                        setFinishedTime(false)
                        setActualQuestion(actualQuestion + 1)                
                    }}>Siguiente pregunta</button>
                }
                
            </div>
        </div>


        <div>
            <div className='DivOptions'>
                {Questions[actualQuestion].options.map((resp)=>(
                    <button 
                        key={Questions.id}
                        onClick={(e)=> handleAnswerSubmit(resp.isCorrect,e)}
                        disabled={finishedTime}>
                    {resp.option}
                    </button>
                ))}
            </div>

        </div>
        {        
            // welcome                      
            // ?<>
            //     <h3 className="H1Tittle"> Selecciona el nivel fácil para comenzar</h3> 
            //     {/* <Link className="navli" to="/category/Facil" >Nivel fácil</Link>
            //     <Link className="navli" to="/category/Dificil" >Nivel difícil</Link>
            //     <Link className="navli" to="/category/Fanatico" >Nivel fanático</Link> */}
    
            //     {/* <Link className="navli" to="/category/Facil" >Comenzar ya</Link> */}
     
            //     {/* <ItemList items={questions}/> */}
            // </>              
            // :null
            }
       
            {/* <div>            
                <ItemList items={questions}/>         
            </div> */}
    </div>

)}

export default ItemListContainer;