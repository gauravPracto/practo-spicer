import React from 'react'
import "../styles/navBar.scss"
import navImage from "../public/navImage.png"
import shopping_cart from "../public/shopping-cart.png"
import { Link } from 'react-router-dom'
const NavBar = ({currentCart}) => {
  const count = (element)=>{
    let i =0
    element.map(ele=>{
      if(ele.qty!=0)
      i++
    })
    return i
  }
  return <div id="navBar">
    <img id="navImage" src={navImage}></img>
    
    <Link to="/payment">{count(currentCart)}<img id="shoppingCart" src={shopping_cart} /></Link>
  </div>
}

export default NavBar