import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const FinalMessage = () => {
  const dispatch = useDispatch()
  const store = useSelector((element)=>element.allItem)
  return (
    <div>{store.map(ele=>ele.qty!=0?<div>{ele.name}</div>:null)}</div>
  )
}

export default FinalMessage