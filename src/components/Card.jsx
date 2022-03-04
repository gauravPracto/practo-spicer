import React from 'react'
import {useDispatch } from 'react-redux'
import {addItem,reduceItem} from "../store/spicer"
import "../styles/card.scss"
const Card = (props) => {
    const dispatch = useDispatch()
  return (
    <div className="card">
    <img src="https://source.unsplash.com/random/300x300/?fruit" alt="Avatar" style={{"width":"100%"}}></img>
    <div className="container">
      <h4><b>{props.all.name}</b></h4> 
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


{/* <div id="card" >
        <div id="card-header">{props.all.name}</div>
        <div id="card-body"><img id="cardImage" src="https://source.unsplash.com/random/300x300/?fruit" alt="" /></div>
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
        
    </div> */}