import { createStore} from 'redux';
import {spicerReducer} from "./reducers"
const store = createStore(
    spicerReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store;