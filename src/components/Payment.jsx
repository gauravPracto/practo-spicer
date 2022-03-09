import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import "../styles/payment.scss"
import {useState} from 'react'
import {addItem,reduceItem} from "../store/spicer"
import ModalCard from './CreditCard'
import NoElement from './NoElement'
const Payment = () => {
    const countNonZero = (store)=>{
        let count = 0
        store.map((ele)=>{
            if(ele.qty!=0){
                count++
            }
        })
        return count
    }
    const [isOpen, setIsOpen] = useState(false)
    const [alertMessage , setAlertMessage] = useState("")
    const [discount,setDiscount] = useState("none")
    const dispatch = useDispatch()
    const store = useSelector((element)=>element.allItem)
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
        {   document.getElementById("couponAlertOuter").style.display="flex"
            setDiscount("none")
            setAlertMessage("Not a Valid Coupon")

        }
        document.getElementById("coupon-feild").value=value.toUpperCase()
    }
    const calculate = (store)=>{
        var veg=0;
        var nonVeg=0;
         store.map(ele=>{
             if(ele.veg)
             veg+=(Number(ele.qty)*Number(ele.price))
             else
             nonVeg+=(Number(ele.qty)*Number(ele.price))
         })
         const answer = veg+nonVeg
         if(discount=="all")
            return answer-(answer*(25/100))
        else if(discount=="nonVeg")
            return answer - (nonVeg*(50/100))
        else
            return answer
    }
    return countNonZero(store)==0?<NoElement></NoElement>:(
    <div id="payment">
        <div id="left-payment">
            {console.log(store)}
            <div className='left corrected-height'>
                <div className="box go corrected-height">S.No</div>
                <div className="box corrected-height">Name</div>
                <div className="box corrected-height">Price</div>
                <div className="box onGo corrected-height">Qty</div>
            </div>
            {store.map((ele,index)=>{
               return ele.qty!=0?<div className='left corrected-height'>
               <div className="box go corrected-height">{index}</div>
               <div className="box corrected-height">{ele.menuname}</div>
               <div className="box corrected-height">{ele.price}</div>
               <div className="box onGo corrected-height "><button onClick={()=>{dispatch(reduceItem({
        id:ele.id
    }))}}>
                -
            </button>
            &nbsp;&nbsp;
             { ele.qty } &nbsp;&nbsp;
            <button onClick={()=>{dispatch(addItem({
        id:ele.id
    }))}}>
                +
            </button></div>
           </div>:null})}
        </div>

        <div id="right-payment">
        <div className='left'>
            <div className="box">Calculation</div>
        </div>
        {store.map((ele,index)=>{
               return ele.qty!=0?<div className='left'>
               <div className="box">{Number(ele.qty)*Number(ele.price)}</div>
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
               <div className="box">{calculate(store)}</div>
           </div>
           <div className='left'><ModalCard setIsOpen={setIsOpen} isOpen={isOpen}></ModalCard></div>
        </div>
    </div>
  )
}

export default Payment
// {store.map(ele=>{return ele.qty>0?<p>{ele.name},{ele.qty}</p>:null})}