import React,{createContext,useState} from 'react'
import { Questions } from '../mock/Questions'


export const CartContext = createContext()

function CartProvider({children}) {


    const [actualQuestion, setActualQuestion]=useState(0)
    const [score, setScore]=useState(0)
    const [isFinished, setIsFinished ]=useState(false)



    function handleAnswerSubmit(isCorrect,e) {
        if (isCorrect){
            // capaz va un e prevent default aca
            setScore(score + 1)
        }
        // e.target.classList.add(isCorrect ? "correct" : "incorrect")
    
        setTimeout(()=>{
            if (actualQuestion === Questions.length - 1){
                setIsFinished(true)
            }
            else {
                setActualQuestion(actualQuestion + 1);
            }
        },1000);
    }


  return (
    <div>
         <div>
        <CartContext.Provider value={{score,handleAnswerSubmit}}>
            {children}
        </CartContext.Provider>
    </div>
    </div>
  )
}

export default CartProvider;