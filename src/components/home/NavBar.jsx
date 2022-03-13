import React from 'react'
import "../../styles/navBar.scss"
import navImage from "../../public/navImage.png"
import shopping_cart from "../../public/shopping-cart.png"
import {connect} from "react-redux"
import { Link } from 'react-router-dom'
const mapStateToProps = (state)=>{
  return {
    selectedItems:state.selectedItems
  }
}
const NavBar = (props) => {
  const count = (element)=>{
    return Object.keys(element).length
  }
  return <div id="navBar">
    <img id="navImage" src={navImage}></img>
    
    <Link to="/payment">{count(props.selectedItems)}<img id="shoppingCart" src={shopping_cart} /></Link>
  </div>
}

export default connect(mapStateToProps)(NavBar)