import React,{useState} from 'react'

// import {UseValue} from "../PostReducer.js"
import {useSelector} from "react-redux"
import Header from "./Header.js"
// import {Link} from "react-router-dom"
import "./Header.css"
import "./Header.css"
function ProductItem(props) {

  console.log("without",props.location.aboutProp.v)
  
  const l=props.location.aboutProp.v
  // console.log(v,"v")
  // const u=useSelector(state=>state.Transactions)
  // const {id}=useParams()
  


    return (
        <div>
    
<Header  />


        
{/* yaha sa apka product item ai ga */}
<div className="container py-4">
  <div className="row py-4">
    <div className="py-4 col-8 ">
    <div class="card">
  <div class="card-body">
  <img src={l.src} class="img-fluid" alt="Responsive image"></img>
  </div>
  <div class="card">
 
  <div class="card-body">
  <h4>Details</h4>
  <p>{l.type}</p>
  <hr></hr>
  <h4>Descriptions</h4>
  <p>{l.description} </p>

  </div>
</div>
</div>
    </div>







    <div className="col-4">
    {/* 1 card */}
        <div className="card py-4 m-4">
            
            <div className="card-body d-flex justify-content-around">
                <h1>RS <span>{l.price}</span></h1>
            </div>
            <div className="card-body d-flex justify-content-around">
                <p> <span>{l.title}</span></p>
            </div>

            <div className="card-body d-flex justify-content-around">
                <p>{l.CurrentLocation}</p> <span>october 2</span>
            </div>

        </div>
        {/* 1 card */}
        {/* 2 card */}
        <div className="card  m-4">
            
            <div className="card-body p-4">
               <h4 >Seller description</h4>
              
               <button className="p-2">chat with seller</button>
               <p className="p-2">phone no : 0321-9318302</p>
            </div>


        </div>
        {/* 2 card */}
    </div>
  </div>
</div>


{/* yaha lhtm */}




        </div>
    )
}

export default ProductItem
