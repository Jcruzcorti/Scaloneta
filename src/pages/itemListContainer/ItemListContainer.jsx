import React,{useState} from 'react'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';

function ItemListContainer(props) {

    const [welcome, setWelcome] =useState(true)

  return (
    <div>
        <h1 className="H1Tittle"> {props.greet}</h1>    
        {
            welcome
            ?<button onClick={()=>setWelcome(false)}>Iniciar juego</button>
            :<ItemDetailContainer/>
        }
    </div>
  )
}

export default ItemListContainer;