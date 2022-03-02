import {addAllFood} from "../store/spicer";
import data from "../dataStore.json"
export default ({dispatch})=>next=>action=>{
    next(action)
    if(action.type=="food/fetchAll"){
        dispatch(addAllFood({
            allItems:data
        }))
    }
}