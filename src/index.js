import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Store.js";
import {Provider} from "react-redux";
import firebase from "firebase/app";
import "firebase/auth";

import {useDispatch} from "react-redux"
var firebaseConfig = {
  apiKey: "AIzaSyA77Ggc56tZp5xlqX8coJMqTJH7we_xScA",
  authDomain: "olxwebsiteproject.firebaseapp.com",
  databaseURL: "https://olxwebsiteproject.firebaseio.com",
  projectId: "olxwebsiteproject",
  storageBucket: "olxwebsiteproject.appspot.com",
  messagingSenderId: "454064953535",
  appId: "1:454064953535:web:eba00f67a17eecab704e0a",
  measurementId: "G-1Z35KCX6MV"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const provider =new firebase.auth.GoogleAuthProvider();

// export const SignInWithGoogle = () => {
 
//   // const dispatch = useDispatch()

//   firebase.auth().signInWithPopup(provider).then(function(result) {
 
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = result.credential.accessToken;
//     console.log(token,"token")
//     // The signed-in user info.
//     var user = result.user;
//     console.log(user,"user")
//     // dispatch({type:"SUCCESS"})
  
    
//     // ...
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });
//                   };



export const SignInWithGoogle = () => {
                    // console.log(user,"user dekh yeh wala")
                    return async dispatch => {
                
                        dispatch({ type:`REQUEST` });
                        firebase.auth().signInWithPopup(provider).then(function(result) {
 
                          // This gives you a Google Access Token. You can use it to access the Google API.
                          var token = result.credential.accessToken;
                          console.log(token,"token")
                          // The signed-in user info.
                          var user = result.user;
                          console.log(user,"user")
                          dispatch({type:"SUCCESS"})
                        
                          
                          // ...
                        }).catch(function(error) {
                          // Handle Errors here.
                          var errorCode = error.code;
                          var errorMessage = error.message;
                          // The email of the user's account used.
                          var email = error.email;
                          // The firebase.auth.AuthCredential type that was used.
                          var credential = error.credential;
                          // ...
                        });
                
                        }
                
                    }




                    export const  SIGNOUT=()=>{
                      return async dispatch=>{
                          // dispatch({type:`${authConstanst.USER_LOGOUT}_REQUEST`})
                  
                         await  firebase.auth().signOut().then(function() {
                          dispatch({type:`LOGOUT_SUCCESS`})
                            // Sign-out successful.
                          }).catch(function(error) {
                            // An error happened.
                          });
                  
                  
                      }
                  
                  }


                  // dispatch({type:`LOGOUT_SUCCESS`})
// export const SIGNOUT=firebase.auth().signOut().then(function() {
//   // Sign-out successful.
// }).catch(function(error) {
//   // An error happened.
// });


Window.store=store 
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
