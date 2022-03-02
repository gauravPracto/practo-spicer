// all action and reducer here 
import  {createSlice} from "@reduxjs/toolkit";

const itemSlice = createSlice({
    name:"food",
    initialState:{allItem:[],selectedItems:{}},
    reducers:{
        addAllFood:(state,action)=>{
            state.allItem = action.payload.allItems
        }
        ,
        addItem:(state,action)=>{
            if(action.payload.id in state.selectedItems){
                state.selectedItems = {...state.selectedItems , [action.payload.id]:{...state.selectedItems[action.payload.id],qty:state.selectedItems[action.payload.id].qty+1}}
            }
            else{
                state.selectedItems = {...state.selectedItems,
                [action.payload.id]:{...state.allItem.find(ele=>ele.id==action.payload.id),qty:1}}
            }

    },
    reduceItem:(state,action)=>{
        if(action.payload.id in state.selectedItems){
            state.selectedItems = {...state.selectedItems , [action.payload.id]:{...state.selectedItems[action.payload.id],qty:state.selectedItems[action.payload.id].qty-1<0?0:state.selectedItems[action.payload.id].qty-1}}
        }

    }
    }});

console.log(itemSlice.actions)
export const {addAllFood,addItem,reduceItem} = itemSlice.actions;
export default itemSlice.reducer;