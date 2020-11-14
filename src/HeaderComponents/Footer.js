import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faFacebook,faTwitter,faInstagramSquare,faYoutube} from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <>
        <div className="container-fluid text-center  p-3" style={{backgroundColor:"#EBEEEF"}}>

           <div className="row text-center p-4">
               <div className="col-md-2" >
               <h6>POPULAR CATEGORY </h6>
            <ul style={{listStyle:"none"}}>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>flats for rents</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>cars</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>jobs</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>mobile phones</li>

            </ul>
               
               
               
               
               
               
               
               
               
               
               </div>
               <div className="col-md-2" >
               <h6>Trending Searches </h6>
            <ul style={{listStyle:"none"}}>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>flats for rents</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>cars</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>jobs</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>mobile phones</li>

            </ul>
               </div>
               <div className="col-md-2" >       <h6>About Us</h6>
            <ul style={{listStyle:"none"}}>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>flats for rents</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>cars</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>jobs</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>mobile phones</li>

            </ul>
               </div>
               <div className="col-md-2" >
               <h6>Olx</h6>
            <ul style={{listStyle:"none"}}>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>Help</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>site map</li>
                <li style={{fontFamily:"sans-serif",fontStyle:"normal",fontSize:"14px",color:"grey"}}>Legal & Privacy information
</li>
             

            </ul>
                   

               </div>
               <div className="col-md-4  " >
               <h6>Follow Us</h6>
           <div  style={{display:"flex",justifyContent:"center"}}>
           <i class="fab fa-facebook" style={{backgroundColor:"green"}}></i>
           <FontAwesomeIcon icon={faFacebook}  size="2x"  />
        
       <FontAwesomeIcon icon={faTwitter}   size="2x"  style={{marginLeft:"4px"}}></FontAwesomeIcon>
       <FontAwesomeIcon icon={faInstagramSquare}   size="2x" style={{marginLeft:"4px"}}></FontAwesomeIcon>
       <FontAwesomeIcon icon={faYoutube}   size="2x" style={{marginLeft:"4px"}}></FontAwesomeIcon>

           </div>

           <div style={{display:"flex",justifyContent:"center",marginTop:"13px"}}>
               
           <img  src="https://statics.olx.com.pk/external/base/img/appstore.webp"   type="button" class="  mx-2"></img>
           <img  src="https://statics.olx.com.pk/external/base/img/appstore.webp"   type="button" class="  mx-2"></img>

           </div>



               </div>
           </div>
        </div>
        {/* style={{display:"flex",border:"2px solid blue",justifyContent:"space-around"}} */}
        <div className="container-fluid py-3" style={{backgroundColor:"#002F34",color:"white",
        display:"flex",justifyContent:"space-between",height:"100px",alignItems:"center"}}>
  <div className="row text-center" style={{width:"1400px"}}>
      
 <div className="col-sm-6 col-12 "> <div style={{fontStyle:"oblique"}}>Other Countries India <span>- South Africa - Indonesia</span></div></div>
             <div className="col-12 col-sm-6  ">  <div  style={{fontStyle:"oblique"}}>Free Classifieds in Pakistan. © 2006-2020 OLX</div></div>
  </div>
            </div>

     

        </>
    )
}

export default Footer
