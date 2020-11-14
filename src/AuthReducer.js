

const InitialState={
  Id:"" , FirstName:"",LastName:"",Email:"",authenticating:false,authenticated:false,
  error:null
}

const AuthReducer=(state=InitialState,action)=>{

    console.log(action);

    switch(action.type){

        case `REQUEST`:
            state = {
                ...state,
                authenticating: true
            }
            break;
        case `SUCCESS`:
          
            state = {
                ...state,
                ...action.payload.loged_In_User,
                authenticated: true,
                authenticating: false
            }
            break;
        case `FAILURE`:
            state = {
                ...state,
                authenticated: false,
                authenticating: false,
                error: action.payload.error
            }
            break;
        // case  `${authConstanst.USER_LOGOUT}_REQUEST`:
        //     break;
        case  `LOGOUT_SUCCESS`:
                state={...InitialState}
                break
        }
  
    return state
}


export default AuthReducer;