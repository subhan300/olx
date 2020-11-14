import {combineReducers} from "redux"
import PostReducer from "./PostReducer"

import AuthReducer from "./AuthReducer"
 const RootReducer=combineReducers(
    {PostAds:PostReducer,Auth:AuthReducer}
)


export default  RootReducer