import React from 'react'
import "../styles/finalMessage.scss"
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux'
const FinalMessage = () => {
  const dispatch = useDispatch()
  const store = useSelector((element)=>element.allItem)
  return (
    <div id="finalMessage">
      <div id="success">SUCCESS</div>
      <div id="uniId">Order Id : {uniqid()}</div>
      {store.map(ele=>ele.qty!=0?<div>{ele.name}</div>:null)}</div>
  )
}

export default FinalMessage