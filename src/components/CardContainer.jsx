import React from 'react'
import "../styles/cardContainer.scss"
import Card from './Card'
import { connect} from 'react-redux'
import {actions} from "../store/actionCreator"
import {fetchAll} from "../store/actionTypes"

const mapStateToProps = (state,ownProps)=>{
return {
  allItems:state.menu
}
}
const mapDispatchToProps = (dispatch,ownProps)=>{
  return {
    getAll:()=>dispatch(actions(fetchAll))
  }
}
const CardContainer = ({getAll,allItems}) => {
  getAll()
    const store = allItems
  return (
    <div id="cardContainer">{store.map(ele=>{ return <Card all={ele} qty={ele.qty}></Card>})}</div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(CardContainer)