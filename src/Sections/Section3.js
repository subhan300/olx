 import React,{useEffect,useState} from 'react'
 import {useSelector,useDispatch} from "react-redux"
//  import {UseValue} from "../PostReducer.js"
 import {Link} from "react-router-dom"
 import firebase from "firebase"
function Section3() {
    const [User_Data,Set_User_Data]=useState([{}])
useEffect( () => {
    const fetchData = async () => {
      const db = firebase.firestore();
       db.collection("USERS").onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data());
        });
        console.log("Current cities in CA: ", cities.join(", "));
        Set_User_Data(cities)
    });
  
    };
    fetchData();
  }, []);
    // const DATA=useSelector(state=>state.PostAds.Transactions);
  console.log(User_Data,"yeh dekh bhai aya ya nahi")


//   const l=User_Data.map((val)=>{return([val])})
//   console.log(l,"yeh dekh array maihai ya nahi")
    return (
        <>
        <div className="container">
           
            <div className="row py-4 my-4">

            {User_Data.map((v)=>{return(       <div className=" col-12    col-sm-3 py-4 my-3">


<div className="card">
    <div className="card-body ">
    <div className="title" style={{backgroundColor:"orange",width:"80px",textAlign:"center"}}>Featured</div>
    <div className="text-center">

<Link to={{pathname:`/Product/${v.title}`, aboutProp:{v}}}  >     


<img style={{height:"160px"}}
src={v.src} 
className="img-fluid" alt="Responsive image">

</img>
</Link>

</div>

<div style={{marginTop:"25px"}}><h3>RS <span>{v.price}</span></h3>
</div>


<div style={{color:"grey"}}><h6>{v.title}</h6>
</div>


</div>

<div style={{color:"grey"}}><h6>{v.CurrentLocation}</h6></div>


</div>









</div>

)})}
         






            </div>




           </div>
   </>
    )
}

export default Section3
