import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {fetchAll} from "../store/actions";
import {addItem,reduceItem} from "../store/spicer"
const Trying = () => {
    const store = useSelector((element)=>element.allItem)
    const selectedItems = useSelector((element)=>element.selectedItems)
    const dispatch = useDispatch();
    const count = (selectedItems)=>{
        let i = 0;
        console.log(selectedItems)
        Object.keys(selectedItems).forEach(ele=>{
            if(selectedItems[ele].qty>0)
            i+=1
        })
        return i
    }
    useEffect(()=>{
        dispatch(fetchAll())
    },[])
  return (
    <div>{store!=undefined?store.map(ele=><p key={ele.id}>{ele.name}</p>):null}
    <button onClick={()=>{dispatch(addItem({
        id:1
    }))}}>add item with 1</button>
    <button onClick={()=>{dispatch(reduceItem({
        id:1
    }))}}>reduce item with 1</button>
    <button onClick={()=>{dispatch(addItem({
        id:2
    }))}}>add item with 2</button>
    <button onClick={()=>{dispatch(reduceItem({
        id:2
    }))}}>reduce item with 2</button>
    {count(selectedItems)}</div>
    
  )
}

export default Trying