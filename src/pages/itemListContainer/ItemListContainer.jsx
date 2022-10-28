import React,{useState} from 'react'
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer';
import './itemlistcontainer.css'

function ItemListContainer(props) {

    const [welcome, setWelcome] =useState(true)

  return (
    <div className='DivStart'>
        <h1 className="H1Tittle"> {props.greet}</h1>    
        {
            welcome
            ?<button onClick={()=>setWelcome(false)} className='ButtonStart'>Iniciar juego</button>
            :<ItemDetailContainer/>
        }
    </div>
  )
}

export default ItemListContainer;