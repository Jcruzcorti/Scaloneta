import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Questions } from '../../mock/Questions';
import Swal from 'sweetalert2'
import {quizAnswer} from '../../service/Firestore'
import {useNavigate} from 'react-router-dom'
import picture from '../../img/messicampeon.png'
import picture2 from '../../img/messiaprueba.png'
import picture3 from '../../img/messitriste.png'




function CartModal({score}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const navigation = useNavigate();

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


  //  const score2 = JSON.stringify([new Number({score})])
  const score2 = JSON.stringify(score)
  // const picture2 = JSON.stringify(picture)

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
          // <><span>Pregunta {actualQuestion + 1} de </span> {Questions.length}</>
          console.log(answerCreated.id);
          

          if (score<=5) {
            Swal.fire({
              title: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas y pusiste triste a Messi.', 
              // text: score2 + "Puntos sobre 15",
              imageUrl: `${picture3}`,
              imageWidth: 400,
              imageHeight: 250,
              imageAlt: 'Messi desepcionado',
              
            })
          }
          else if (score>5 && score2<=10){
            Swal.fire({
              title: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas y Messi te aprueba.',
              // text: score2 + "Puntos sobre 15",
              imageUrl: `${picture2}`,
              imageWidth: 400,
              imageHeight: 250,
              imageAlt: 'Messi aprueba',
              
            })
          }

          else if (score>10){
            Swal.fire({
              title: 'Obtuviste una puntuación de ' + score2 + ' respuestas correctas y sacaste campeón a Lionel.',
              imageUrl: `${picture}`,
              imageWidth: 300,
              imageHeight: 250,
              imageAlt: 'Messi campeón',
              
            })
          }
        
          
          

          
        });
        // <><span>Pregunta {actualQuestion + 1} de </span> {Questions.length}</>
        // ACA VA UN SWEET ALERT QUE MUESTRE PUNTAJE CON MESSI CAMPEON, SONRIENDO, O LLORANDO
        
      }
    }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ver puntuación
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ingrese su nombre para conocer su puntuación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      
          <div >
          <form>
            <div className="form-group">
                {/* <label htmlFor="formGroupExampleInput">Nombre completo</label> */}
                <input onChange={handleChange} type="text" name='name' className="form-control" id="formGroupExampleInput" placeholder="Nombre completo" aria-required/>
            </div>
          </form>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleFin}>Enviar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );

  // HACER QUE CUANDO ENVIA INFO CON EL MODAL, SE RENDERICE UNA FOTO DE MESSI DE ACUERDO A SU PUNTUACIÓN CON LAS RESPUESTAS CORRECTAS
}
export default CartModal;