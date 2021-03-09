import React,{useState} from 'react'
import "./Header.css"
import firebase from "firebase"
import TextField from '@material-ui/core/TextField';
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch,useSelector} from "react-redux"
// import {add} from "../PostReducer.js"
import { PostFormDataOfUser} from "../ACTIONS/Action"
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"
import  GeneralPopup from "./GeneralPopup"

export const   Attributes=()=> {
  const UseValueOfAuthReducerRedux=useSelector(s=>s.Auth)
  console.log(UseValueOfAuthReducerRedux,"id")
const {id}=useParams
console.log("id",id)
const[Condition,SetCondition]=useState("")
const[Description,SetDescription]=useState("")
const[Title,SetTitle]=useState("")
const[Type,SetType]=useState("")
const[Price,SetPrice]=useState(0)
const[City,SetCity]=useState("")
const[CurrentLocation,SetCurrentLocation]=useState("")
// const[Id,SetId]=useState(2)

console.log(Condition,"condition")















 const  imageHandler = (e) => {
   console.log(e,"ee....")
    const reader = new FileReader();
     reader.onload = () =>{
      if(reader.readyState === 2){
        SetImage( reader.result)
        // console.log(reader,"reader result :",reader.result)
      }
    }
   
    // console.log(FILES)

    reader.readAsDataURL(e.target.files[0])
   
    
     
  }
  
  const upload=(files)=>{const file = files[0];
    // console.log(file.name,"filename....")
    // const storageRef = 
    // var ref =firebase.storage().ref().storageRef.child(`${file.name}`).put(file)
    
    var uploadTask = firebase.storage().ref().child(`images/${file.name}`).put(file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function(snapshot){
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function(error) {
      // Handle unsuccessful uploads
    }, function() {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File available at', downloadURL);
        SetImage(downloadURL)
      });
    });
    
   
  
     }
  
  
 
  

  
    // var metadata = {cotentType:`image/jpg` };

    // ref.put(`${Image}`, metadata);
    
    // console.log(Image,"fielimage")
 

  
   const [Image,SetImage]=useState("data:image/png;base64,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")


// const uploader=()=>{
  
//   

// }



  const  imageHandler2 = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        SetImage2( reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };


const imageHandler3=(e)=>{
  const RE=new FileReader();
  RE.onload=()=>{
    if(RE.readyState===2){
      SetImage3(RE.result)
    }
  }
    RE.readAsDataURL(e.target.files[0])
  }

  
const imageHandler4=(e)=>{
  const RE=new FileReader();
  RE.onload=()=>{
    if(RE.readyState==2){
      SetImage4(RE.result)
    }
  }
    RE.readAsDataURL(e.target.files[0])
    
  
}
 





   const [Image2,SetImage2]=useState("data:image/png;base64,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")
   
 const [Image3,SetImage3]=useState("data:image/png;base64,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")
   const [Image4,SetImage4]=useState("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAflBMVEUAAAD///8/Pz97e3sFBQX7+/v29va8vLwLCwuNjY1RUVEPDw9UVFTIyMj09PSjo6Po6OjDw8PX19cxMTFZWVlKSkp1dXUkJCQWFhYdHR1hYWHPz8/k5ORFRUWFhYWampqxsbEzMzNtbW3c3NwiIiKfn5+SkpK0tLQ6OjqAgIAVF7+7AAAIJUlEQVR4nO2da3u6PAzG+ygIiCB4Ps7T1Pn9v+DjNnUNtEqTAPV/cb/cNWp/0vSQJlH8949I1N0BLjUgtqkBsU16kHgzWo8nUYV9IUkLsg3Fj0Zxld3BSwfiOeKmcaX9QUsHMhUPbSvtEFYakPSP401eiQYkkEBm1fYIKQ1IWwJxqu0RUg2IbWpAbFMDYpsaENv0L4KkQfuhLwlE/P350k/q6+pzPUC8qSgiZ9+ps7t63UG2zmuIX7XcWjus0w0kDotyCBHU22ONbiCb4hxiXm+PNbqBjAxAxKreLqt1A1mbgFjpWbmBjE1AlvV2Wa0byMSAw7FyAr6BRAYgXX1rbhosxq0CGi+ClHcav68jxa3dH+jaWi4MJnEhZnvOMXoHiYtaSXjWYRjZ2a/G2i8FDXJd28cz5yHwcX9/9ocTzWarMym8NQBNT7gMjmn3OxhiML41PNgE4hkZB1SY2gNyRg2ru3zPFhCPxMFEwgCS+jSOKwnD6KKDRGSOq53QVxQyyJJg55wkVJDBjIPjusxTl0YiyIGJ43pcI64nNJDDnIvjSkI7r2lALtIn+NqHV598HEJMSSQakL70AUPds0kxD1JxEorTTAOSSGvcRMeB3l/pNCSQ6K6n94/WQ03r8Y6bQ4gdPjpBB9Jp3dr2NeeP+Otpl5D6QpNoQzjc4HtGcrqa+f0ByqwW9nzyLDpoFS11zXaM/EcmWiNJcGFOLuJYW1RdnFMCBeL2yuMQoociQYEYOVjNteACiT6605B4WCpLTjjsBaqtcg4kaTPun8rS8JSbEjIgMc6rU71mm6cg6Ru8jbtaKz3I5k1ex69mkQ4keP2wVQLeFwnkWHfHjOUvVSDLtxpXv5rHeRCX/XRRhUZ5kFPdfcLJy4J02Nwhf5p2J8d0sLq+/ng1SI+TLvPR+Fu7LAi3pc8XfYUvYdVfcK9UXgaE9XwRLp44c1OzC7pXulvJPYSDccqaHl+cjTpHxjHmuwDkzNbwsFAo/ZZvjkwByAdTq7N+EYxv9blmlwCALFjadPYGTpB4/7rBItoDEJYz+NwwSCVimcG6AIRj0uoa+6TiLsPHrgEIg5cKFY/GsOFu8YI4yLyfPnne5wXBX8x61CtIVhBfZ+bu4Xw8fXycjp72Qop6mcoJ4ijfh5tevqSB47Qu6sgm4jU9J4hqFRxMFCvefKLyiffz/2ggRpAPxXjRTqxdhXftovvnIuIDWec6tnrqGx7l9/eUZYwNZJ670Tq9MF//lH0iIWy82ECyhp4U2O7kNgEe/vO5QLKu80GhK+vP7GyMd/AzgWSvSqOCg2SWsfkEfWxkAskM92Xh1S0bRoP24vCAfMIlziTEZgZHl4uNouABgc792OgsPoUWb5IwIYsFZA5fiOHV4gg8jPWssYDAM4jxdwq3NsizCQeIA6Ys84lnBp/HbR45QGDtAYQDYw8awDkOOEDAqXCAaMABMxduF8wA4gOPIsqjBPYFHdQRiwEEbHtXuCB/YCWoTTADCJizkL5KehsMIOCgjvRLgzhDk7yih+ggvrwaYkz9R7K5uxgjoYOALxO7wRBHuRWMj54OAnYY6MAncit0kIvcBXQE8FRupf36/3Oig8g7pQ7i+V85sqVhlkQ6iBx+irZ1IWRPF+bijA4iX3gSnAdyM+nrf8+JDiKfVbeI52+SX+wS8TwdRF4BCF5P2dQOiOfpIAN+EIyp0UHkHcoW8fxN8lkAs0ehg8guRiZjxzRDB5G/SsL0K7u0t4jn6SCyK6iDvqwBCyJmx0YHAQky6OgSsPU0KXRwFx0EuB7QoRPA/4BxP9BBwHYPHe8FfFuY90oHcWSXZ4Jo4EfyoR0VbMVw1AVJS0hfJXBgoIKtGECAtSOPiGBkYWydA2Qnd8KkjNKfQuAaQ0WjcXgagVMK9XWCUybOzjhAgFMqQbhAQnBFgnPHc4DA5FeEew1eS+DiHFnuR0BARsd4FRiCeyLMqUowgcBrAdODqgNjipAxjiwg0AdtGlMCY1iQ9zxMl6Ews9oszzJTFQo16wkuEB++EpOM6kymNGbS+xFTwAC0EoNc/WzuOnr7zBWLkgkCTAq+k69s6Ae6A1wgO9ihgrG8vUweACGfiC3MKRfv+/Fy+nFyzxDif9lAnFyE6fLF17vLRQNGhPhMvlDAz1wouXt6Eo4x2+RiTRNKkDxjcKbiNwviQNO3eZCPoKel+XOGy6oS0N1tL7cy+L2tKvKXlvPBGondVnTvuov02uvHGJuv2546ZQlzTVUWyJNUhc4hStPooE+7oiYsMGcrqN9JARHfBzuIWKBKTrj0nChuELFGFP5JGDKJ2EHE3LgknseR+cYPIpyL0fByLyxZnCWACDE1SOwpWN/9pUoBUaYiKPU8ocFEJYEIZ1GgKt5gwZcbXBbIVb0XA8xjLT1UIsh3CpK2gORywpzRXirIVbPRJjfGDpsRfyGDskG+5Qx77WDTP5/7m6DdG5ZT5qMKkEoEQUqrxFa+YNIxRxpzTeoBEKYk+ToEE/Pfrf6RpBMAwYSuWaIIgKBCh61QCMuJlF3orzzdPTh3EELAVb3KltxB3kTWrt1/WRC+WjWVKleW6k3XREWhMJonuSapSreZ5NnaolBZTI+hskfFAj/4AQpOLt9qdM3BKRSWAE1KLeTLq8zPlGery3ol1B4vQ7usgyNf79cbWW8q4SLvp1EVLnaj0763LvK7WtVr3dufIpVnFlVK2kY1ILapAbFNDYhtakBsUwNimxoQ29SA2KYGxDY1ILapAbFNDYhtakBsUwNimxoQ29SA2Kb/AYNMh+6I7aFlAAAAAElFTkSuQmCC")
  
// const[Idno,SetIdno]=useState("")
// console.log(Idno,"idbno")
// on submit function 
// const[upload,SetUpload]=useState(false)
const dispatch = useDispatch();
// image upload in firebase storage and get url 

const onSubmit=(e)=>{
  e.preventDefault();
       
       const MyPostData={   
     condition:Condition,type:Type,title:Title,price:Price,
        src:Image,src1:Image2,src3:Image3,src4:Image4,city:City,CurrentLocation:CurrentLocation,
        id:UseValueOfAuthReducerRedux.Id,description:Description}
       console.log("podt data",MyPostData)
       
    
        dispatch(PostFormDataOfUser(MyPostData))

}




// const k=useSelector(UseValue);
// console.log(k,"yeh hai asal game shuru")


const [post,Setpost]=useState(false)
  return (
       <>
       

<div id="Header_Post">
        
<Link  to="/PostAds"><ion-icon name="chevron-back-outline"></ion-icon></Link>
        
        <div>
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon"
          fillRule="evenodd" style={{marginLeft:"7px",padding:"4px"}}>
         <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">

         </path></svg>
      
       
         
        </div>
 </div>


   <div style={{display:"flex",justifyContent:"center",padding:'18px'}}><h1>Post Your Ads</h1></div>



         <div id="main_form_card">

         <div class="card" id="form_card">
  <div class="card-body ">
  <h5>SELECTED CATEGORY</h5>

  <h5 style={{color:"gray",fontSize:"16px"}}>Mobiles
/
Tablets

</h5>
  </div>



</div>
         </div>

{/* 2 card */}
<form onSubmit={onSubmit}>
         <div id="main_form_card">

<div class="card" id="form_card">
<div class="card-body ">
<h5>INCLUDE SOME DETAILS</h5>

<h5 style={{color:"gray",fontSize:"16px"}}>conditions</h5>
<button type="button" class="btn btn-outline-info mx-3"  onClick={()=>{SetCondition("New")}}>New</button>
<button type="button" class="btn btn-outline-info mx-3"  onClick={()=>{SetCondition("Used")}}>Used</button>
<h5 style={{color:"gray",fontSize:"16px",padding:"4px",marginTop:"9px"}}>Type</h5>
<button type="button" class="btn btn-outline-primary  mx-3" onClick={()=>{SetType("SAMSUNG")}}>SAMSUNG</button>
<button type="button" class="btn btn-outline-secondary mx-3" onClick={()=>{SetType("Q MOBILE")}}>Q MOBILE</button>
<button type="button" class="btn btn-outline-success mx-3" onClick={()=>{SetType("VIVO")}}>VIVO</button>
<button type="button" class="btn btn-outline-danger mx-3" onClick={()=>{SetType("IPHONE")}}>IPHONE</button>

{/* 
<h5 style={{color:"gray",fontSize:"16px",padding:"4px",marginTop:"9px"}}>Add title</h5> */}

<form onSubmit={()=>{return(alert("done"))}}>
  <div class="form-group py-3">
    <label for="exampleInputEmail1">Add title</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      style={{height:"120px"}} value={Title}  onChange={(e)=>{SetTitle(e.target.value)}}  />
      <small>Mention the key features of your item (e.g. brand, model, age, type)
0/24</small>
   
  </div>
  
</form>


<form>
  <div class="form-group py-3">
    <label for="exampleInputEmail1">Description</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
   style={{height:"120px"}}  value={Description}  onChange={(e)=>{SetDescription(e.target.value)}}/>
   <small>
Include condition, features and reason for selling
0 / 4096</small>
   
  </div>
  
</form>

</div>



</div>
</div>

{/* 2 end */}


{/*3 card */}
<div id="main_form_card">

         <div class="card" id="form_card">
  <div class="card-body ">
  <h5>SELECTED CATEGORY</h5>

  <h5 style={{color:"gray",fontSize:"16px"}}>Mobiles
/
Tablets

</h5>
  </div>



</div>
         </div>



{/* 3 card end */}

{/* 4 card */}

<div id="main_form_card">

<div class="card" id="form_card">
<div class="card-body ">
<h5>SET A PRICE</h5>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Price</label>
    <input type="email" class="form-control btn-outline-warning " id="exampleInputEmail1" aria-describedby="emailHelp" 
    placeholder="price" value={Price}  onChange={(e)=>{SetPrice(e.target.value)}}/>
    <small id="emailHelp" class="form-text text-muted">This field is mandatory</small>
  </div>
  </form>
</div>



</div>
</div>
{/* 4card */}


{/* 5 card */}
<div id="main_form_card">

<div class="card" id="form_card">
<div class="card-body ">
<h5>UPLOAD UP TO 12 PHOTOS</h5>
{/* main full sabka photogallery */}
<div style={{display:"flex",flexWrap:"wrap"}}>


{/* pori ek photo ka */}

<div style={{marginTop:"20px",padding:"15px"}}>
<span className="border p-4"><label className="image-upload" htmlFor="input1">
<img src={Image} style={{height:"50px"}}></img></label></span>
</div>
<div>
<input type="file" id="input1" accept="image/*" onChange={imageHandler}
  onInput={(e)=> {upload(e.target.files)}}></input>
 


					
					
</div>



{/* yeh hai pora ek photo ka */}






{/* 2 phtoto */}
<div style={{marginTop:"20px",padding:"15px"}}>
<span className="border p-4"><label className="image-upload" htmlFor="input2">
<img src={Image2} style={{height:"50px"}}></img></label></span>
</div>
<div>
<input type="file" id="input2" accept="image/*" onChange={imageHandler2}></input>

					
					
</div>

{/* 2 photo */}
{/* 2 phtoto */}
<div style={{marginTop:"20px",padding:"15px"}}>
<span className="border p-4"><label className="image-upload" htmlFor="input3">
<img src={Image3} style={{height:"50px"}}></img></label></span>
</div>
<div>
<input type="file" id="input3" accept="image/*" onChange={imageHandler3}></input>

					
					
</div>

{/* 2 photo */}
{/* 2 phtoto */}
<div style={{marginTop:"20px",padding:"15px"}}>
<span className="border p-4"><label className="image-upload" htmlFor="input4">
<img src={Image4} style={{height:"50px"}}></img></label></span>
</div>
<div>
<input type="file" id="input4" accept="image/*" onChange={imageHandler4}
 onInput={(e)=>{upload(e.target.files)}}></input>

					
					
</div>

{/* 2 photo */}

</div>


{/* main gallery photo ka */}



</div>



</div>
</div>


{/* 5 card */}

{/* 6 card */}

<div id="main_form_card">

<div class="card" id="form_card">
<div class="card-body ">
<h5>CONFIRM YOUR LOCATION</h5>
<form  noValidate autoComplete="off" >
      <TextField id="standard-basic" label="near area"  />
      <TextField id="standard-basic" label="current location" 
      value={CurrentLocation} style={{marginLeft:"13px"}} onChange={(e)=>{SetCurrentLocation(e.target.value)}}  />
      </form>


      <TextField
          id="standard-select-currency"
          select
          label={City}
        //   value={currency}
        //   onChange={handleChange}
          helperText="Please select your currency"
        >
  
            <MenuItem >
            <ul>
             <li onClick={()=>{SetCity("karahi")}} >karachi</li>
             <li onClick={()=>{SetCity("hyderabad")}}>hyderabad</li>
             <li onClick={()=>{SetCity("peshawar")}}>peshawar</li>
             <li onClick={()=>{SetCity("lahore")}}>lahore</li>

             </ul>
            </MenuItem>
       
        </TextField>
</div>



</div>
</div>
{/* 6 card */}


     {/*7 card  */}

<div id="main_form_card">

<div class="card" id="form_card">
<div class="card-body ">

<button type="submit"  class="btn btn-warning"  onClick={()=>{alert("your ad is posted successfully")}}>Post Now</button>

</div>



</div>
</div>  

{/* 7 card */}

</form>
       </>
    )
}

