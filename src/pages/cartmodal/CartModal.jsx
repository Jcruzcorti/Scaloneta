import React, { useState } from 'react';
import './cartmodal.css'
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2'
import {quizAnswer} from '../../service/Firestore'
import picture from '../../img/messicampeon.png'
import picture2 from '../../img/messiaprueba.png'
import picture3 from '../../img/messitriste.png'




function CartModal({score}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const [player,setPlayer] = useState({
    name:""
  })


    function handleChange(e) {
      const field =e.target.name;
      const value = e.target.value;
        setPlayer({
          ...player,
          [field]: value})
    }


  const score2 = JSON.stringify(score)


    function handleFin(e) {
      e.preventDefault();
      const dataAnswer ={
        player,
        score: score
      }

      if (player.name === ""){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          iconColor:'#8bbcf5',
          title: 'Complete el formulario para continuar por favor',
        })
      }

      else {
        quizAnswer(dataAnswer).then((answerCreated)=>{

          if (score<=7) {
            Swal.fire({
              title: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas y pusiste triste a Messi.', 
              imageUrl: `${picture3}`,
              imageWidth: `80%`,
              imageHeight: `80%`,
              imageAlt: 'Messi desepcionado',
              showConfirmButton:false,
            })
          }
          else if (score>7 && score2<=12){
            Swal.fire({
              title: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas y Messi te aprueba.',
              imageUrl: `${picture2}`,
              imageWidth: `80%`,
              imageHeight: `80%`,
              imageAlt: 'Messi aprueba',
              showConfirmButton:false,
            })
          }

          else if (score>12){
            Swal.fire({
              title: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas y sacaste campeón a Lionel.',
              imageUrl: `${picture}`,
              imageWidth: `80%`,
              imageHeight: `80%`,
              imageAlt: 'Messi campeón',
              showConfirmButton:false,
            })
          }
        
          handleClose()
          setTimeout(() => {
            window.location.href="/";
          }, 4000); 
        });
      }
    }



  return (
    <>
      <button className='ButtonStart' onClick={handleShow}>
        Ver puntuación
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>    
          <Modal.Title>Ingrese su nombre para ver su puntuación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <div >
          <form>
            <div className="form-group">
            <Modal.Title>
               <input onChange={handleChange} type="text" name='name' className="form-control" id="formGroupExampleInput" placeholder="Nombre completo" aria-required/>
            </Modal.Title>
   
            </div>
          </form>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <button className='ButtonModal' onClick={handleClose}>
            Cerrar
          </button>
          <button className='ButtonModal'onClick={handleFin}>Enviar</button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
export default CartModal;