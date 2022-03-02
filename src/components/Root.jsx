import React from 'react'
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux'
import Banner from './Banner'
import CardContainer from './CardContainer'
const Root = () => {
  const selectedItems = useSelector((element)=>element.selectedItems)
  return (
    <div id="root">
      <NavBar></NavBar>
      <Banner></Banner>
      <CardContainer></CardContainer>
    </div>
  )
}

export default Root