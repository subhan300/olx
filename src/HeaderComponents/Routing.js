import React from 'react'

import PostAds from "./PostAds.js"
// import Header from "./Header.js"
import Home from "./Home.js"
import {Attributes} from "./Attributes.js"
import ProductItem from "./ProductItem.js"

import { BrowserRouter as Router, Route ,Switch} from "react-router-dom"
function Routing() {

    return (
        <div>
        <Router>
        {/* <Home /> */}
            <Switch>
            <Route exact path="/"   component={Home} />
            <Route path="/Product/:id"  component={ProductItem}></Route>
                <Route exact path="/PostAds"  component={PostAds} />
                <Route  path="/PostAds/:id"  component={Attributes} />
            </Switch>
        </Router>
            
        </div>
    )
}

export default Routing
