import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useDispatch} from "react-redux"
import "./HeaderComponents/Header.css"
import {signin} from "./ACTIONS/Action"

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignPopup() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const[Email,SetEmail]=useState("")
const[Password,SetPassword]=useState("")
const  dispatch = useDispatch()
const SignInUserInformation=(e)=>{
  e.preventDefault();
  const SIGNINUSERDATA={
     
      Password,
      Email

  }
console.log( SIGNINUSERDATA,"kkin")
  dispatch(signin(SIGNINUSERDATA))
  
}
 
  return (
    <div>
      <button type="button"  onClick={handleOpen} id="login">
   LOGIN
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
                 <div className="d-flex justify-content-center align-items-center py-3">
                 <svg width="48px" height="68px" viewBox="0 0 1024 1024" data-aut-id="icon"
         className="" fillRule="evenodd">
         <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">

         </path></svg>
                 </div>
                 <div className="py-3"> <p  style={{fontFamily:"bolder",fontSize:"19px",textAlign:"center"}}>HELP MAKE OLX SAFE BETTER PLACE TO WORK</p></div>
           <div>

               <h3 className="py-3" style={{textAlign:'center'}}>Signin With Email </h3>
               <form onSubmit={SignInUserInformation}>
               <input className="registerform" placeholder="EMAIL" value={Email} onChange={(e)=>SetEmail(e.target.value)}></input>
               <input className="registerform" placeholder="Password" value={Password} onChange={(e)=>SetPassword(e.target.value)}></input>
               <button className="registerform" >SIGN IN</button>
               </form>
           
              
              
               <hr className="py-2"></hr>
               <p  style={{fontFamily:"bold",fontSize:"18px",textAlign:"center"}}>We won't share your personal details with anyone</p>
               <p style={{fontFamily:"bold",fontSize:"18px",textAlign:"center"}}> If you continue, you are accepting OLX Terms <br></br>and Conditions and Privacy Policy</p>
            

           </div>
           
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
