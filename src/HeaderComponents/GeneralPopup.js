import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./Header.css"
// import EmailPopu from "./EmailPopu"
// import {SignInWithGoogle} from "../index"
import {useDispatch}  from "react-redux"
import {Link} from "react-router-dom"
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

export default function GeneralPopup() {
//   const dispatch = useDispatch()
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const icon=<svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>
  return (
    <div > 
      <button type="button" onClick={handleOpen} style={{color:"white",backgroundColor:"#F7F8F9",border:"  white"}}>
      <div className="d-flex  align-items-center " ><div  className="
        align-items-center d-flex rounded-pill   " id="sell_button">
                    {icon  } SELL 
                        



        </div></div>
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
                 <img style={{height:"130px"}}   src={"https://statics.olx.com.pk/external/base/img/loginEntryPointPost.webp"}></img>
                
                 </div><div className="py-3"> <p  style={{fontFamily:"bolder",fontSize:"19px",textAlign:"center"}}>HELP MAKE OLX SAFE BETTER PLACE TO WORK</p></div>
           <div>

        <Link className="registerform" TO="/">YOU CAN NOW GO BACK </Link>
           
               {/* <div className="registerform">Continue With Twitter</div>
               <div  > <EmailPopu/></div> */}
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
