import React from 'react'
import {Modal} from 'pretty-modal'
import "../styles/modal.scss"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const ModalCard = ({setIsOpen,isOpen}) => {
  const [cardDetails,setCardDetails] = useState({})
  const validation = ()=>{
    const cardNumber = document.getElementById("cardNumber")
    const cardName = document.getElementById("cardName")
    const cardDate = document.getElementById("cardDate")
    const CVV = document.getElementById("cardCVV")
    let check = true
    const messageDiv = document.createElement("div");
    messageDiv.className="cardInnerDiv"
    if(!(check && cardName.value!="" && /[a-zA-Z]*/.test(cardName.value))){
      messageDiv.innerHTML = "Enter valid Card Name"
      cardName.after(messageDiv);
    }
    if(check && String(cardNumber).length==16){

    }
  }
  return (
    <div className="modal">
      <button id="modalButton"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        MAKE PAYMENT
      </button>
      <Modal
        onClose={() => {
          setIsOpen(false)
        }}
        open={isOpen}
      >
        <div id="modalDiv">
            <span>CARD INFORMATION</span>
            <div className="cardInnerDiv"><input className="cardInput" type="text" name="cardName" id="cardName" /></div>
            <div className="cardInnerDiv">Card Holder Name</div>
            <div className="cardInnerDiv"><input type="number" className="cardInput" name="cardNumber" id="cardNumber" /></div>
            <div className="cardInnerDiv">Card Holder Number</div>
            <div className="cardInnerDiv"><input className="cardInput" type="date" name="cardDate" id="cardDate" /></div>
            <div className="cardInnerDiv">Expiry Name</div>
            <div className="cardInnerDiv"><input type="number" className="cardInput"name="cardCvv" id="cardCvv" /></div>
            <div className="cardInnerDiv">CVV</div>
        </div>
        <button id="modalClose"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Close
        </button>
        <Link to="/success"><button id="modalSubmit"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          SUBMIT
        </button></Link>
      </Modal>
    </div>
  )
}

export default ModalCard