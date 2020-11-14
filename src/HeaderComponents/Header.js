import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

// import PostAds from "./PostAds"
// import AddIcon from '@material-ui/icons/Add';
import {useSelector,useDispatch} from "react-redux"
import Popup from "./Popup.js"
import {signin, LogOutFunction} from "../ACTIONS/Action"
import  SignPopup from "../PopupLogin"
import {SIGNOUT} from "../index.js"

function Header() {
  const Auth_Data_Use_Redux=useSelector(state=>state.Auth)
  console.log(Auth_Data_Use_Redux,"authreduxeredux")
    const icon=<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>

  const dispatch = useDispatch()

    return (
        <>
   
        {/* <div className="py-4 container-fluid  "   id="Header">
        <div className="row d-flex align-items-center">

        <div   className="py-4   col-12 col-md-1 "><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"
         className="" fillRule="evenodd">
         <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">

         </path></svg></div>

        <div   className="d-flex col-12 col-md-3 text-center align-items-center" style={{border:"3px solid black",backgroundColor:"white"}}>
        <div><ion-icon  name="search" size="large"
        style={{backgroundColor:"white",color:"black"}}></ion-icon></div> 
        <input  id="Input" ></input>         
      </div>

      
        <div  className="d-flex col-4 col-md-6 text-center" id="INPUT_PART2">


        <input  id="Input_part2" ></input>
        <div><ion-icon  name="search" className="ion-icon"
        style={{backgroundColor:"black",color:"white"}}></ion-icon></div>
        
        </div>
        <div  className="py-2 col-12   col-md-2  d-flex align-items-center justify-content-center" >         
         
        
      {  Auth_Data_Use_Redux.authenticated==true?
      <>
      
      <div onClick={()=>{dispatch(SIGNOUT())}}   id="login">LOGOUT</div>
       <div className="d-flex  align-items-center " ><Link to="/PostAds"  className="
        align-items-center d-flex rounded-pill   " id="sell_button">
                    {icon  } SELL 
                        



        </Link></div></>: <> <div><SignPopup /></div> <Popup></Popup></>}
        
       
        
        </div>
       
         </div>   
        </div>

 */}



{/* ?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
{/* menu rewponsive */}



<nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
  <div   className="py-4   "><svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"
         className="" fillRule="evenodd">
         <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">

         </path></svg></div>



  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse ml-3" id="navbarSupportedContent" style={{
  width:"600px"}}>
    <ul class="navbar-nav mr-auto">


      <li class="nav-item active text-center">
        <a class="nav-link" href="#">
        <div   className="d-flex text-center align-items-center" 
        style={{border:"3px solid black",backgroundColor:"white"}}>
        <div><ion-icon  name="search" size="large"
        style={{backgroundColor:"white",color:"black"}}></ion-icon></div> 
        <input  id="Input1" ></input>         
      </div>
    </a>
      </li>


      <li class="nav-item active text-center">
        <a class="nav-link text-center" href="#">
          
        <div  className="d-flex col-4 text-center" >


        <input  id="Input_part2" style={{width:"250px",}} ></input>
        <div>
        <ion-icon  name="search" className="ion-icon"
        style={{backgroundColor:"black",color:"white"}}>

        </ion-icon>
        </div>
        
        </div>
    </a>
      </li>





{/* sell and login */}
      <li className="nav-item text-center">
      <div className="text-center" >
           <form class="form-inline my-2 my-lg-0 text-center" >
    <div  id="sellWidth"  className="  py-2     d-flex align-items-center justify-content-center">
         
        
         {  Auth_Data_Use_Redux.authenticated==true?
         <>
         
         <div onClick={()=>{dispatch(SIGNOUT())}}   id="login">LOGOUT</div>
          <div className="d-flex  align-items-center " ><Link to="/PostAds"  className="
           align-items-center d-flex rounded-pill   " id="sell_button">
                       {icon  } SELL 
                           
   
   
   
           </Link></div></>: <> <div><SignPopup /></div> <Popup></Popup></>}
           
          
           
           </div>
    </form>
      </div>

      </li>
   
    </ul>
   
  </div>
</nav>













{/* resoponsive menu */}



























{/* nechay wala menu ka */}




















        </>
    )
}

export default Header

// <div className="container-fluid py-4"  id="header_left_main">
//         <div  className="   row     header_part2">

//             <div className="col-12   col-md-2 header_part2_left text-center ml-3"  >
// ALL categories SORT            </div>



//            <div id="e" className=" d-flex justify-content-space-between   container-fluid col-12 col-md-9   header_part2_right">

//         <div className="container text-center py-3">
//         <div  className="row text-center " style={{border:"2px solid red"}}> 
//                <div className="header_part2_left_parts1  col-sm-3 col-md-3 col-6">Mobile Phones</div>
//               <div className="header_part2_left_parts2  col-sm-3 col-md-3 col-6">Cars</div>
//               <div className="header_part2_left_parts3  col-sm-3 col-md-3 col-6">AutoMobiles</div>
              
//               {/* &nbsp; &nbsp; &nbsp; */}
//               <div className="header_part2_left_parts4  col-sm-3 col-md-3 col-6">TV</div>
        
//          </div>

           


//         </div>
               

//             </div>




//         </div>
    
// </div>