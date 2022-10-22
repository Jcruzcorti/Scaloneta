import React from 'react'
// import {useNavigate } from 'react-router-dom';


function ItemDetail({item}) {

    // ESTO LO VOY A USAR DESPUES PARA NAVEGAR APENAS TERMINA LA QUIZ, AL RESULTADO
    // const navigation = useNavigate()

    // navigation("/resultado")


  return (
    <div>
        <div>
        <h3>{item.name}</h3>
            <p>{item.question}</p>
            <p>{item.option1}<input type="checkbox"/></p>
            <p>{item.option2}<input type="checkbox"/></p>
            <p>{item.option3}<input type="checkbox"/></p>
            <p>{item.option4}<input type="checkbox"/></p>
        </div>
    </div>
  )
}

export default ItemDetail;