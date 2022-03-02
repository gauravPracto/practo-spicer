// all action and reducer here 
import  {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name:"food",
    initialState:{allItem:[]},
    reducers:{
        addAllFood:(state,action)=>{
            state.allItem = action.payload.allItems
        }
        ,
        addItem:(state,action)=>{
            state.allItem = state.allItem.map(ele=>{
                if(ele.id==action.payload.id){
                    return {...ele,qty:ele.qty+1}
                }
                else{
                    return ele
                }
            })

    },
    reduceItem:(state,action)=>{
        state.allItem = state.allItem.map(ele=>{
            if(ele.id==action.payload.id){
                return {...ele,qty:ele.qty-1<0?0:ele.qty-1}
            }
            else{
                return ele
            }
        })
    }
    }});

console.log(itemSlice.actions)
export const {addAllFood,addItem,reduceItem} = itemSlice.actions;
export default itemSlice.reducer;