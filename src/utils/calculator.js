const calculate = (selectedItem,allItems,discount,setDiscount)=>{
    const store = allItems.map((ele)=>{
        if(selectedItem[ele.id]!=undefined)
        return {
            ...ele,
            qty:selectedItem[ele.id].qty
        }
        else
        return null
    })
    var veg=0;
    var nonVeg=0;
    console.log(store)
     store.map(ele=>{
        if(ele==null){

        }
         else if(ele.veg)
         veg+=(Number(ele.qty)*Number(ele.price))
         else
         nonVeg+=(Number(ele.qty)*Number(ele.price))
     })
     const answer = veg+nonVeg
     if(discount=="all")
        return [answer,answer-(answer*(25/100))]
    else if(discount=="nonVeg")
        return [answer,answer - (nonVeg*(50/100))]
    else
        return [answer,answer]
}

export default calculate;