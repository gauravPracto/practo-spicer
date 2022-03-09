import React from 'react'
import "../styles/finalMessage.scss"
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
const FinalMessage = (props) => {
  const dispatch = useDispatch()
  const store = useSelector((element)=>element.allItem)
  
  return props.tag=="true"?(
    <div id="finalMessage">
      <div id="success">SUCCESS</div>
      <div id="uniId">Order Id : {uniqid()}</div>
      {store.map(ele=>ele.qty!=0?<div>{ele.menuname}</div>:null)}</div>
  ):<div id="finalMessage">
  <div id="success">UnSuccessfull</div>
  <div id="uniId">Order Id : {uniqid()}</div>
  {store.map(ele=>ele.qty!=0?<div>{ele.menuname}</div>:null)}
  <Link to="/payment"><button>no Worry Back to payment Again</button></Link>
  </div>
}

export default FinalMessage