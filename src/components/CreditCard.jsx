  import React from 'react'
  import {Modal} from 'pretty-modal'
  import "../styles/modal.scss"
  import { useState } from 'react'
  import { useNavigate } from 'react-router-dom'
  const ModalCard = ({setIsOpen,isOpen}) => {
    const [cardDetails,setCardDetails] = useState({})
  const isFutureDate = (idate)=>{
    console.log('hjj')
      let yourDate = new Date()
      yourDate = yourDate.toISOString().split('T')[0]
      yourDate = yourDate.split('-')
      idate = idate.split('-')
      let check=true
      yourDate.map((ele,index)=>{
        if(Number(yourDate[index])<=Number(idate[index])&&check){
          check &&=true
        }
        else{
          check &&=false
        }
        console.log(check)

      })
      console.log(check)
      return check
  }
  let navigate = useNavigate();
    const validation = ()=>{
      const cardNumber = document.getElementById("cardNumber")
      const cardName = document.getElementById("cardName")
      const cardDate = document.getElementById("cardDate")
      const CVV = document.getElementById("cardCvv")
      let check=0
      if(!(cardName.value!="" && /^[a-zA-Z]+( )[a-zA-Z]+$/.test(cardName.value))){
        const cardNameAlert = document.getElementById("cardNameAlert")
        cardNameAlert.innerHTML = "Please Enter Card Name " 
      }
      else{
        check++
        const cardNameAlert = document.getElementById("cardNameAlert")
        cardNameAlert.innerHTML = "" 
      }
      if(String(cardNumber.value).length!=16){
        const cardNumberAlert = document.getElementById("cardNumberAlert")
        cardNumberAlert.innerHTML = "Please Enter Card Number " 
      }
      else{
        check++
        const cardNumberAlert = document.getElementById("cardNumberAlert")
        cardNumberAlert.innerHTML = "" 
      }
      if(isFutureDate(cardDate.value)==false || cardDate.value=="" ){
        const cardDateAlert = document.getElementById("cardDateAlert")
        cardDateAlert.innerHTML = "Please Enter Date in Future" 
      }
      else{
        check++
        const cardDateAlert = document.getElementById("cardDateAlert")
        cardDateAlert.innerHTML = "" 
      }
      if(String(CVV.value).length!=3){
        const cardCvvAlert = document.getElementById("cardCvvAlert")
        cardCvvAlert.innerHTML = "Please Enter valid CVV " 
      }
      else{
        check++
        const cardCvvAlert = document.getElementById("cardCvvAlert")
        cardCvvAlert.innerHTML = "" 
      }

      if(check==4){
        const answer =  window.confirm("successful or Unsuccessful")
        if(answer)
          return navigate("/success")
        else
        return navigate("/unsuccessfull")
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
              <span className="alertSpan" id="cardNameAlert"></span>
              <div className="cardInnerDiv">Card Holder Name</div>
              <div className="cardInnerDiv"><input type="number" className="cardInput" name="cardNumber" id="cardNumber" /></div>
              <span className="alertSpan" id="cardNumberAlert"></span>
              <div className="cardInnerDiv">Card Holder Number</div>
              <div className="cardInnerDiv"><input className="cardInput" type="date" name="cardDate" id="cardDate" /></div>
              <span className="alertSpan" id="cardDateAlert"></span>
              <div className="cardInnerDiv">Expiry Date</div>
              <div className="cardInnerDiv"><input type="number" className="cardInput"name="cardCvv" id="cardCvv" /></div>
              <span className="alertSpan" id="cardCvvAlert"></span>
              <div className="cardInnerDiv">CVV</div>
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
              validation()
            }}
          >
            SUBMIT
          </button>
        </Modal>
      </div>
    )
  }

  export default ModalCard