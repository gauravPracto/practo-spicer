import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {fetchAll} from "../store/actions";
const Payment = () => {
    const dispatch = useDispatch()
    const store = useSelector((element)=>element.allItem)
  return (
    <div>{store.map(ele=>{return ele.qty>0?<p>{ele.name},{ele.qty}</p>:null})}</div>
  )
}

export default Payment