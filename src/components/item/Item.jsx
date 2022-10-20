import React from 'react'

 function Item({item}) {

  return (

    <div>
        
        <div>
            <h3>{item.name}</h3>
            <p>{item.question}</p>
        </div>
        
    </div>
  )
}


export default Item;