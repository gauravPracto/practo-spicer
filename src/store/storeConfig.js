import { configureStore } from "@reduxjs/toolkit";
import fetchAllMiddleware from "../middlewares/fetchAllItems"
import reducer from "./spicer"
const store = configureStore({
reducer,
middleware:[fetchAllMiddleware]
})
export default store