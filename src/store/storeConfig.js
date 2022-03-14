import { createStore,combineReducers} from 'redux';
import {spicerReducer,menu} from "./reducers"
const store = createStore(
    combineReducers({spicerReducer,menu}    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store;