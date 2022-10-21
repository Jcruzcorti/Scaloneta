import React from 'react'

 function Item({item}) {

  return (

    <div>
        
        <div>
            <h3>{item.name}</h3>
            <p>{item.question}</p>
            <p>{item.option1}<input type="checkbox"/></p>
            <p>{item.option2}<input type="checkbox"/></p>
            <p>{item.option3}<input type="checkbox"/></p>
            <p>{item.option4}<input type="checkbox"/></p>

            {/* BUSCAR OPCION ESTILIZADA Y QUE ESTA INFO SE GUARDE EN UN ESTADO PARA IR ACUMULANDO RESPUESTAS CORRECTAS PARA EL RESULTADO */}
        
        </div>
        
    </div>
  )
}


export default Item;