import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import "../styles/payment.scss"
import {useState,useEffect} from 'react'
import { actions } from '../store/actionCreator'
import ModalCard from './CreditCard'
import FillPlate from './FillPlate'
import calculate from '../utils/calculator'
const mapStateToProps = (state,currentProps)=>{
    return {selectedItems:state.selectedItems,
    allItems:state.menu,
all:currentProps.all}
  }
   const mapDispatchToProps = (dispatch,currentProps)=>{
        return {
          increment:(id)=>{dispatch(actions("inc",{id:id}))},
          decrement:(id)=>{dispatch(actions("desc",{id:id}))}
        }
      }
    
const Payment = ({selectedItems,allItems,increment,decrement,all}) => {
    const countNonZero = (store)=>{
        let count = 0
        Object.keys(store).map((ele)=>{
            if(store[ele].qty!=0){
                count++
            }
        })
        return count
    }

    const buttonClick = (op,id)=>{
        switch(op){
            case "+":
                increment(id)
                break
            case "-":
                decrement(id)
        }
    }

    const [isOpen, setIsOpen] = useState(false)
    const [alertMessage , setAlertMessage] = useState("")
    const [discount,setDiscount] = useState("none")
    const [store,setStore] = useState(allItems.filter(ele=>selectedItems[ele.id]!=undefined))
    const applyCoupon = ()=>{
        const value = document.getElementById("coupon-feild").value
        if(value.toUpperCase()=="ALL2022")
        {setDiscount("all")
            document.getElementById("couponAlertOuter").style.display="flex"
            setAlertMessage("Coupon Added")
    }
        else if(value.toUpperCase()=="NOVEGAN2022")
        {   document.getElementById("couponAlertOuter").style.display="flex"
            setDiscount("nonVeg")
            setAlertMessage("Coupon Added")
}else
        {   document.getElementById("couponAlertOuter").style.display="flex"//replace this
            setDiscount("none")
            setAlertMessage("Not a Valid Coupon")

        }
        document.getElementById("coupon-feild").value=value.toUpperCase()//replace this
    }
    // make utils
    // change to switch
    

console.log(Object.keys(selectedItems).length,'kkjjjjjjj')
    return (
        Object.keys(selectedItems).length==0?<FillPlate></FillPlate>:
        <div id="payment">
        <div id="left-payment">
            <div className='left corrected-height'>
                <div className="box go corrected-height">S.No</div>
                <div className="box corrected-height">Name</div>
                <div className="box corrected-height">Price</div>
                <div className="box onGo corrected-height">Qty</div>
            </div>
             
             {  
                 store.map((ele,index)=>{
                     return selectedItems[ele.id]==undefined?null:selectedItems[ele.id].qty!=0?<div className='left corrected-height'>
                    <div className="box go corrected-height">{index+1}</div>
                    <div className="box corrected-height">{ele.veg==true?<span style={{"color":"green"}}>{ele.menuname}</span>:<span style={{"color":"red"}}>{ele.menuname}</span>}</div>
                    <div className="box corrected-height">{ele.price}</div>
                    <div className="box onGo corrected-height "><button onClick={()=>{buttonClick("-",ele.id)}}>
                     -
                 </button>
                 &nbsp;&nbsp;
                  { selectedItems[ele.id].qty } &nbsp;&nbsp;
                  <button onClick={()=>{buttonClick("+",ele.id)}}>
                     +
                 </button> 
                 </div>
                 </div>:null
                })
             }
             
        </div>
        <div id="right-payment">
        <div className='left'>
            <div className="box">Calculation</div>
        </div>
        {store.map((ele,index)=>{
               return selectedItems[ele.id]==undefined?null:selectedItems[ele.id].qty!=0?<div className='left'>
               <div className="box">{Number(selectedItems[ele.id].qty)*Number(ele.price)}</div>
           </div>:null})}
        <div className='left special'>
            <div id="coupon">
                <label htmlFor="coupon-feild">COUPON </label>
                <input type="text" name="coupon-feild" id="coupon-feild" />
                &nbsp;
            </div>
        </div>
        <div className='left' id="couponAlertOuter">
        <div id="couponAlert">{alertMessage}</div>
        </div>
        <div className='left'>
        <button id="coupon-button" onClick={()=>applyCoupon()
                }>APPLY COUPON</button>
        </div>
        <div className='left'>
               <div className="box">{calculate(selectedItems,allItems,discount,setDiscount)}</div>
           </div>
           <div className='left'><ModalCard setIsOpen={setIsOpen} isOpen={isOpen}></ModalCard></div>
        </div>
        </div>
)
}
    


export default connect(mapStateToProps,mapDispatchToProps)(Payment)