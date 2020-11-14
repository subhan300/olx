import { Card } from '@material-ui/core'
import React,{useEffect} from 'react'
import Attributes from "./Attributes"

import {Link} from "react-router-dom"
function PostAds() {

 

    return (
        <>

<div   id="Header_Post">
   

     

        
        <Link  to="/"><ion-icon name="chevron-back-outline"></ion-icon></Link>
        
        
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"
          fillRule="evenodd" style={{marginLeft:"7px",padding:"4px"}}>
         <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">

         </path></svg>
      
       
         
        </div>
 


   <div style={{display:"flex",justifyContent:"center",padding:'18px'}}><h1>Post Your Ads</h1></div>


   <div className="main_cards">
   <div className="card" id="post_cards">
   <div className="cardTitle" style={{textAlign:"left",marginLeft:"15px",padding:"12px"}}>CHOOSE A CATEGORY</div>
  <div className="card-body" id="post_cards_body">
        <div className="main_cards_2">
         <div className="card" id="cards_inside">
             <div className="card-body" id="cards_inside_body">Mobiles
              <span>

            
  <button         type="button" id="dropdownMenuButton" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white",
  height:"30px",width:"150px",border:"none",textAlign:"right"}}>
     <ion-icon name="chevron-forward-outline" size="large"></ion-icon>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
   <div> <Link to="/PostAds/Attributes">tablet</Link></div>
    <div><Link to="/PostAds/Attributes">phone</Link></div>
   
  </div>




             </span></div>
             <div className="card-body" id="cards_inside_body">Laptop
              <span>

            
  <button         type="button" id="dropdownMenuButton" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white",
  height:"30px",width:"150px",border:"none",textAlign:"right"}}>
     <ion-icon name="chevron-forward-outline" size="small"></ion-icon>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>




             </span></div>
             <div className="card-body" id="cards_inside_body">Cars
              <span>

            
  <button         type="button" id="dropdownMenuButton" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white",
  height:"30px",width:"150px",border:"none",textAlign:"right"}}>
     <ion-icon name="chevron-forward-outline" size="small"></ion-icon>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>




             </span></div>
             <div className="card-body" id="cards_inside_body">bikes
              <span>

            
  <button         type="button" id="dropdownMenuButton" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white",
  height:"30px",width:"150px",border:"none",textAlign:"right"}}>
     <ion-icon name="chevron-forward-outline" size="small"></ion-icon>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>




             </span></div>
             <div className="card-body" id="cards_inside_body">Camera
              <span>

            
  <button         type="button" id="dropdownMenuButton" 
  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{backgroundColor:"white",
  height:"30px",width:"150px",border:"none",textAlign:"right"}}>
     <ion-icon name="chevron-forward" size="small"></ion-icon>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>




             </span></div>     
         </div>
         </div>
      

  </div>
</div>
   </div>

        </>
    )
}

export default PostAds
