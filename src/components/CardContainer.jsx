import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {fetchAll} from "../store/actions";
import {addItem,reduceItem} from "../store/spicer"
import "../styles/cardContainer.scss"
import Card from './Card'
const CardContainer = () => {
    const store = useSelector((element)=>element.allItem)
    const selectedItems = useSelector((element)=>element.selectedItems)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchAll())
    },[])
  return (
    <div id="cardContainer">{store.map(ele=>{
    {console.log(ele)}
    return <Card all={ele} qty={ele.qty}></Card>})}</div>
  )
}

export default CardContainer