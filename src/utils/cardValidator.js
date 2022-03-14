const validation = (cardDate,cardName,cardNumber,CVV)=>{
    let check=0
    console.log(cardDate,cardName,cardNumber,CVV)
    cardName = cardName||""
    cardDate = cardDate||""
    cardNumber = cardNumber||""
    CVV = CVV||""
    console.log(cardName,"card Number")
    if(!(cardName!="" || /^[a-zA-Z]+( )[a-zA-Z]+$/.test(cardName))){
      const cardNameAlert = document.getElementById("cardNameAlert")
      cardNameAlert.innerHTML = "Please Enter Card Name " 
    }
    else{
      check++
      const cardNameAlert = document.getElementById("cardNameAlert")
      cardNameAlert.innerHTML = "" 
    }
    if(String(cardNumber).length!=16){
      const cardNumberAlert = document.getElementById("cardNumberAlert")
      cardNumberAlert.innerHTML = "Please Enter Card Number " 
    }
    else{
      check++
      const cardNumberAlert = document.getElementById("cardNumberAlert")
      cardNumberAlert.innerHTML = "" 
    }
    if(isFutureDate(cardDate)==false || cardDate=="" ){
      const cardDateAlert = document.getElementById("cardDateAlert")
      cardDateAlert.innerHTML = "Please Enter Date in Future" 
    }
    else{
      check++
      const cardDateAlert = document.getElementById("cardDateAlert")
      cardDateAlert.innerHTML = "" 
    }
    if(String(CVV).length!=3){
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
        return "yes"
      else
      return "no"
    }



  }



  const isFutureDate = (idate)=>{
    var check = false
      let yourDate = new Date()
      yourDate = yourDate.toISOString().split('T')[0]
      yourDate = yourDate.split('-')
      idate = idate.split('-')
      for(let i=0;i<yourDate.length;i++){
        if(Number(yourDate[i])<Number(idate[i])){
          return true
        }
        else if(Number(yourDate[i])>Number(idate[i])){
          return false
        }
      }
      return false
  }


  export default validation