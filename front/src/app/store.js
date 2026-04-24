import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";


const createStore=()=>{
  const store=configureStore({
    reducer: rootReducer(),
    devTools: process.env.NODE_ENV !== "production",
  })

  return store
}

export default createStore;