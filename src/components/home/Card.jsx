import React from 'react'
import "../../styles/card.scss"
import { actions } from "../../store/actionCreator"
import { connect } from 'react-redux'
import { incrementQty,decrementQty } from '../../store/actionTypes'
const mapStateToProps = (state,currentProps)=>{
  return {selectedItems:state.spicerReducer.selectedItems}
}
const mapDispatchToProps = (dispatch,currentProps)=>{
  return {
    increment:(id)=>{dispatch(actions(incrementQty,{id:id}))},
    decrement:(id)=>{dispatch(actions(decrementQty,{id:id}))}
  }
}
const Card = (props) => {

  
  const buttonClick = (op,id)=>{
    switch(op){
      case "+":
        props.increment(id)
        break
      case "-":
        props.decrement(id)
        break
      }
  }

  return (
    <div className="card">
    <img src={props.all.images[props.all.id%3]} alt="Avatar" style={{"width":"100%"}}></img>
    <div className="container">
      <h4><b>{props.all.veg==true?<span style={{"color":"green"}}>{props.all.menuname}</span>:<span style={{"color":"red"}}>{props.all.menuname}</span>}</b></h4> 
      <h4><b>{props.all.price}</b></h4> 
      <div id="card-footer">
      <button onClick={()=>{buttonClick("-",props.all.id)}}>
                -
            </button>
            {/* {console.log(props.selectedItems)} */}
            {props.selectedItems[props.all.id]==undefined?0:props.selectedItems[props.all.id].qty}
            <button onClick={()=>{buttonClick("+",props.all.id)}}>
                +
            </button>
      </div>
    </div>
  </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Card)

