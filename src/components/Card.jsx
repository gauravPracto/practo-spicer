import React from 'react'
import {useDispatch } from 'react-redux'
import {addItem,reduceItem} from "../store/spicer"
import "../styles/card.scss"
const Card = (props) => {
    const dispatch = useDispatch()
  return (
    <div className="card">
        {console.log(props.all)}
    <img src={props.all.images[0]} alt="Avatar" style={{"width":"100%"}}></img>
    <div className="container">
      <h4><b>{props.all.veg==true?<span style={{"color":"green"}}>{props.all.menuname}</span>:<span style={{"color":"red"}}>{props.all.menuname}</span>}</b></h4> 
      <h4><b>{props.all.price}</b></h4> 
      <div id="card-footer">
      <button onClick={()=>{dispatch(reduceItem({
        id:props.all.id
    }))}}>
                -
            </button>
            {props.qty}
            <button onClick={()=>{dispatch(addItem({
        id:props.all.id
    }))}}>
                +
            </button>
      </div>
    </div>
  </div>
  )
}

export default Card

