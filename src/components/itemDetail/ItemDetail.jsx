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
        </div>
    </div>
  )
}

export default ItemDetail;