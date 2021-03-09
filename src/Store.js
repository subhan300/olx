import {createStore,applyMiddleware} from "redux";
// import PostReducer from "./PostReducer.js"
// import AuthReducer from "./ALL_REDUCER/AuthReducer"
// import PostAds from "./HeaderComponents/PostAds.js";
// import {createStore, } from "redux"
import thunk from "redux-thunk"

import RootReducer from "./RootReducer"

 const store=createStore(
    RootReducer,applyMiddleware(thunk)
)
export default store


// [build]
 
// command ="CI= npm run build"