import firebase from "firebase"
// import {REQUEST} from "../PostReducer"


export const RegisterUser=(userdalahai)=>{
    return async dispatch=>{
        const db=firebase.firestore();
        dispatch({type:"REQUEST"});
        firebase.auth()
        .createUserWithEmailAndPassword(userdalahai.Email, userdalahai.Password)
        .then(data=>{
            
            console.log(data)
            const loged_In_User={Email:userdalahai.Email,Id:data.user.uid,Password:userdalahai.Password}
            dispatch({type:`SUCCESS`,payload:{loged_In_User}})
        // const currentuser=firebase.auth().currentUser;
        // const name=`${userdalahai.FirstName} ${userdalahai.LastName}` 
        // currentuser.update({displayName:name})

        

        }).catch(error=>console.log(error))



    }
    }

    export const signin = (userdalahai) => {
    // console.log(user,"user dekh yeh wala")
    return async dispatch => {

        dispatch({ type:`REQUEST` });
        await firebase.auth()
        .signInWithEmailAndPassword(userdalahai.Email, userdalahai.Password)
        .then((data) => {
            console.log(data)
        //    const displayname=data.user.displayName.split(" ");
        //     const FirstName=displayname[0];
        //     const LastName=displayname[1];
            const loged_In_User={Email:userdalahai.Email,Id:data.user.uid,Password:userdalahai.Password}
            console.log(loged_In_User,"logedinuser")
            localStorage.setItem("USERS",JSON.stringify(loged_In_User));
            dispatch({type:`SUCCESS`,payload:{loged_In_User}})
         }).catch(error=>{console.log(error)})


        }

    }

export const LogOutFunction=()=>{
        return async dispatch=>{
            // dispatch({type:`${authConstanst.USER_LOGOUT}_REQUEST`})
    
           await  firebase.auth().signOut().then(()=>{
            localStorage.clear();
            console.log("sucess logout")
                dispatch({type:`LOGOUT_SUCCESS`})
            })  .catch(error => {
                console.log(error);
                console.log("eorroro")
                // dispatch({ type: `${authConstanst.USER_LOGOUT}_FAILURE`, payload: { error } })
            })
    
    
        }
    
    }



    // firebase.auth()
    // .createUserWithEmailAndPassword(userdalahai.Email, userdalahai.Password)
    // .then(data=>{
        
    //     console.log(data)
    //     const loged_In_User={Email:userdalahai.Email,Id:data.user.uid,Password:userdalahai.Password}
    //     dispatch({type:`add`,payload:{loged_In_User}})
    // const currentuser=firebase.auth().currentUser;
    // const name=`${userdalahai.FirstName} ${userdalahai.LastName}` 
    // currentuser.update({displayName:name})

    

    // })

    export const PostFormDataOfUser=(userdata)=>{
        console.log(userdata,"userdata yaha tou agaya")
        return async dispatch=>{
            const db=firebase.firestore();
            dispatch({type:"REQUEST"});
            db.collection("USERS").add(userdata).then(()=>{
                console.log("success")
                dispatch({type:"SUCCESSFULLY_DONE"})
                dispatch({type:"add",payload:userdata})}).catch(error=>console.log(error,"eroro aya regh"))
  
    
    
    
        }
        }
    