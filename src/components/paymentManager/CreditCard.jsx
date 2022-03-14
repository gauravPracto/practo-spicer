  import React from 'react'
  import {Modal} from 'pretty-modal'
  import "../../styles/modal.scss"
  import validation from "../../utils/cardValidator"
  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  const ModalCard = ({setIsOpen,isOpen}) => {
    const [cardNumber , setCardNumber] = useState("")
    const [cardName , setCardName] = useState("")
    const [CVV , setCVV] = useState("")
    const [cardDate , setCardDate] = useState("")
    let navigate = useNavigate();
    const creditCheck = ()=>{
      console.log(cardName,cardNumber,cardDate,CVV)
      const validate = validation(cardDate,cardName,cardNumber,CVV)
      if(validate=="yes")
      navigate("/success")
      else if (validate=="no")
      navigate("/unsuccessfull")
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
              <br></br>
              <div className="cardInnerDiv">Card Holder Name</div>
              {console.log(cardNumber,"number")}
              <div className="cardInnerDiv"><input onChange={(event)=>{setCardName(event.target.value)}} className="cardInput" type="text" name="cardName" id="cardName" /></div>
              <span className="alertSpan" id="cardNameAlert"></span>
              <div className="cardInnerDiv">Card Holder Number</div>
              <div className="cardInnerDiv"><input onChange={(event)=>{setCardNumber(event.target.value)}}  type="number" className="cardInput" name="cardNumber" id="cardNumber" /></div>
              <span className="alertSpan" id="cardNumberAlert"></span>
              <div className="cardInnerDiv">Expiry Date</div>
              <div className="cardInnerDiv"><input onChange={(event)=>{setCardDate(event.target.value)}} className="cardInput" type="date" name="cardDate" id="cardDate" /></div>
              <span className="alertSpan" id="cardDateAlert"></span>
              <div className="cardInnerDiv">CVV</div>
              <div className="cardInnerDiv"><input onChange={(event)=>{setCVV(event.target.value)}} type="number" className="cardInput"name="cardCvv" id="cardCvv" /></div>
              <span className="alertSpan" id="cardCvvAlert"></span>
              
          </div>
          <button id="modalClose"
            onClick={() => {
              setIsOpen(false)
            }}
          >
            Close
          </button>
        <button id="modalSubmit"
            onClick={() => {
              creditCheck()
            }}
          >
            SUBMIT
          </button>
        </Modal>
      </div>
    )
  }

  export default ModalCard