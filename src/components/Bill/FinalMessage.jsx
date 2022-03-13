import React from 'react'
import "../../styles/finalMessage.scss"
import uniqid from 'uniqid';
import { connect } from 'react-redux'
import { Link , useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
const mapStateToProps = (state,currentProps)=>{
  return {selectedItems:state.selectedItems,allItems:state.menu,tag:currentProps.tag}
}
const FinalMessage = ({allItems,selectedItems,tag}) => {
  const navigate = useNavigate()
  useEffect(() => {
    if(Object.keys(selectedItems).length==0){
      navigate("/")
    }
  }, []);
  const [store,setStore] = useState(allItems.filter(ele=>selectedItems[ele.id]!=undefined))
    return tag=="true"?(
      <div id="finalMessage">
        <div id="success">SUCCESS</div>
        <div id="uniId">Order Id : {uniqid()}</div>
        {store.map(ele=><div>{ele.menuname}</div>)}<Link to="/"><button>Eat More</button></Link></div>
    ):<div id="finalMessage">
    <div id="success">UnSuccessfull</div>
    <div id="uniId">Order Id : {uniqid()}</div>
    {store.map(ele=>ele.qty!=0?<div>{ele.menuname}</div>:null)}
    <Link to="/payment"><button>no Worry Back to payment Again</button></Link>
    </div>
  
}

export default connect(mapStateToProps)(FinalMessage)