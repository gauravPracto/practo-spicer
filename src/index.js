import React from 'react';
import ReactDOM from 'react-dom';
import data from "./dataStore.json"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "../src/store/storeConfig"
import { Provider } from 'react-redux'
// store.subscribe(()=>{console.log(store.getState())})
// console.log(data)
// store.dispatch({
//   type:"food/addAllFood",
//   payload:{
//     allItems:["one","two","three"]
//   }
// })
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
