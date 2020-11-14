
import {createSlice} from "@reduxjs/toolkit"
import React from "react";


{/* <img style={{height:"160px"}}
src="https://apollo-singapore.akamaized.net/v1/files/iiih0qq51cvr1-PK/image;s=300x600;q=60" 
className="img-fluid" alt="Responsive image">

</img>

</div>

<div style={{marginTop:"25px"}}><h3>RS 1600</h3>
</div>


<div style={{color:"grey"}}><h6>Refrigerator Oxygen Machine</h6>
</div>


</div>

<div style={{color:"grey"}}><h6>karachi,street 4</h6></div>


</div>



 */}





// </div> */}

// const PostReducer=createSlice(
//     {
        
//         name:"PostAds",

//         initialState:{Transactions:[{
//             src:"https://apollo-singapore.akamaized.net/v1/files/iiih0qq51cvr1-PK/image;s=300x600;q=60" ,
//        title: "Refrigerator Oxygen Machine",CurrentLocation:"karachi street 4" ,price:38490,id:231 } ,
//        {
//         src:"https://apollo-singapore.akamaized.net/v1/files/iiih0qq51cvr1-PK/image;s=300x600;q=60" ,
//    title: "Refrigerator Oxygen Machine",CurrentLocation:"karachi street 4" ,price:38490,id:231 }

    
//     ],
    
//     AUTH_DATA:[{Id:"",FirstName:"subhna",LastName:"akram",Email:"subhan.akram2400",
//     Password:"king124",authenticating:false,authenticated:false}]}


//     ,
   

//     reducers:{ add:(state,action)=>{console.log(action,"action")


//     return({Transactions:[...state.Transactions,action.payload]})
    

       

//     },REQUEST:(state)=>{console.log(state.AUTH_DATA,"CHILD")
//         return({...state.AUTH_DATA, authenticated:true    })},
        
// }














// }
// )

// export const {add,REQUEST}=PostReducer.actions
// export const UseValue=(state)=>{

// return(state.PostAds.Transactions)
// }


// export default PostReducer.reducer


const InitialState={Transactions:[{
    src:"https://apollo-singapore.akamaized.net/v1/files/iiih0qq51cvr1-PK/image;s=300x600;q=60" ,
title: "Refrigerator Oxygen Machine",CurrentLocation:"karachi street 4" ,price:38490,id:231 } ,
{
src:"https://apollo-singapore.akamaized.net/v1/files/iiih0qq51cvr1-PK/image;s=300x600;q=60" ,
title: "Refrigerator Oxygen Machine",CurrentLocation:"karachi street 4" ,price:38490,id:231 }


]}
  
  const PostReducer=(state=InitialState,action)=>{
  
      console.log(action);
  

          switch(action.type){
  
          case "add":
              return  {Transactions:[...state.Transactions,action.payload]}
          
          case "SUCCESSFULLY_DONE":
           break
        default:
           return  state
      
    
     
  }



}
  
  export default PostReducer