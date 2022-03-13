import React from 'react'
import NavBar from './home/NavBar'
import { useSelector, useDispatch } from 'react-redux'
import Banner from './home/Banner'
import CardContainer from './home/CardContainer'
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
const Root = (props) => {
  props.getAll()
  const selectedItems = props.allItems
  return (
    <div id="outsideRoot">
      <NavBar currentCart={selectedItems}></NavBar>
      <Banner></Banner>
      <CardContainer></CardContainer>
      {console.log(props.allItems)}
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Root)