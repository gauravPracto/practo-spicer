import React from 'react'
import {connect } from 'react-redux'
import coupons from '../../utils/coupon'
import "../../styles/payment.scss"
import {useState} from 'react'
import { actions } from '../../store/actionCreator'
import ModalCard from './CreditCard'
import FillPlate from './FillPlate'
import calculate from '../../utils/calculator'
import { decrementQty,incrementQty } from '../../store/actionTypes'



const mapStateToProps = (state,currentProps)=>{
    return {selectedItems:state.spicerReducer.selectedItems,
    allItems:state.menu.menu,
all:currentProps.all}
  }
   const mapDispatchToProps = (dispatch,currentProps)=>{
       
        return {
          increment:(id)=>{dispatch(actions(incrementQty,{id:id}))},
          decrement:(id)=>{dispatch(actions(decrementQty,{id:id}))}
        }
      }
    
const Payment = ({selectedItems,allItems,increment,decrement}) => {
    const buttonClick = (op,id)=>{
        switch(op){
            case "+":
                increment(id)
                break
            case "-":
                decrement(id)
        }
    }

    const makeFlex = ()=>{
        document.getElementById("couponAlertOuter").style.display="flex"
    }
    const [isOpen, setIsOpen] = useState(false)
    const [alertMessage , setAlertMessage] = useState("")
    const [discount,setDiscount] = useState("none")
    const [store,setStore] = useState(allItems.filter(ele=>selectedItems[ele.id]!=undefined))
    const [couponFeild , setCouponFeild] = useState("")
    const applyCoupon = ()=>{
        const inputCoupon = coupons()[couponFeild.toUpperCase()]
        switch(inputCoupon){
            case undefined:
                makeFlex()
                setDiscount("none")
                setAlertMessage("Invalid Coupon Added")
                break
            default:
                makeFlex()
                setDiscount(inputCoupon.appliedOn)
                setAlertMessage("Coupon Added")
            }
        //replace this
    }
    // make utils
    // change to switch
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
                {console.log(couponFeild)}
                <input onChange={(e)=>{
                    console.log(e.target)
                    setCouponFeild(e.target.value)}} value={couponFeild.toUpperCase()} type="text" name="coupon-feild" id="coupon-feild" />
                &nbsp;
            </div>
        </div>
        <div className='left' id="couponAlertOuter">
            {discount!="none"?<div id="couponAlert">{alertMessage}</div>:<div id="couponAlert" style={{
                backgroundColor:"#D2042D"
            }}>{alertMessage}</div>}
        </div>
        <div className='left'>
        <button id="coupon-button" onClick={()=>applyCoupon()
                }>APPLY COUPON</button>
        </div>
        <div className='left'>
            {console.log(calculate(selectedItems,allItems,discount,setDiscount)[1])}
               <div className="box">{calculate(selectedItems,allItems,discount,setDiscount)[1]}</div>
           </div>
           <div className='left'>
               <div className="box">Discount</div>
           </div>
           <div className='left'>
               <div className="box">-{isNaN(calculate(selectedItems,allItems,discount,setDiscount)[0]-calculate(selectedItems,allItems,discount,setDiscount)[1])?0:calculate(selectedItems,allItems,discount,setDiscount)[0]-calculate(selectedItems,allItems,discount,setDiscount)[1]}</div>
           </div>
           <div className='left'><ModalCard setIsOpen={setIsOpen} isOpen={isOpen}></ModalCard></div>
        </div>
        </div>
)
}
    


export default connect(mapStateToProps,mapDispatchToProps)(Payment)