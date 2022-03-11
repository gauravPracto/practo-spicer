import store from "../dataStore.json"
export const spicerReducer = (initialState={menu:[],selectedItems:{}},action)=>{
    console.log(action.type)
    switch(action.type){
        case "inc":
            return {
                ...initialState,
                selectedItems:{
                    ...initialState.selectedItems,
                    [action.payload.id]:{qty:initialState.selectedItems[action.payload.id]==undefined?1:initialState.selectedItems[action.payload.id].qty+1}
                }
            }
        case "desc":
            const res = initialState.selectedItems[action.payload.id]==undefined?0:initialState.selectedItems[action.payload.id].qty-1<0?0:initialState.selectedItems[action.payload.id].qty-1
            const temp = {
                ...initialState,
                selectedItems:{
                    ...initialState.selectedItems,
                    [action.payload.id]:{qty:res}
                }

            }
            Object.keys(temp.selectedItems).map(ele=>{if(temp.selectedItems[ele].qty==0){
                delete temp.selectedItems[ele]
            } })
            return temp
        case "fetchAll":
            return {
                ...initialState,
                menu:store
            }
        default:
            return initialState;
    }
}

