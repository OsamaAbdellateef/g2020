import React from 'react';
import './requests-icon.style.scss';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {set_state} from '../../redux/user/user.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToolbox , faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/firestore';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    zIndex:100
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

 const  RequestsIcon = ({currentUser,workerReqs,set_state}) => {


  const firestore = firebase.firestore();

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  //Refuse Request and delete it 
  const refuseRequest = async(reqID) => {

    firestore.collection('requests').doc(`${reqID}`).delete().
    then(() => {console.log("hase been deleted successfully ")}).catch((error)=>{console.log(error)});
}

  React.useEffect(() => {
    if(currentUser) {
      var arr = [];
        firestore.collection('requests').where("crafterID" ,"==",`${currentUser.userID}`).onSnapshot(function(querySnapshot) {
            arr = []; 
            querySnapshot.forEach( async doc => {
                //console.log("comment : " , doc.data());                  
                await arr.push(doc.data());
                console.log("________________________________________________________")
                console.log(doc.data())
            }) 
            set_state("workerReqs" , arr)
       });
       
      }
  },[currentUser])


  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
     
      <div>
        <Button
          className="append centerV"
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
            <span className="req-icon">{workerReqs.length}</span>
           <FontAwesomeIcon color="#3587D7" icon={faToolbox} size="lg"  />
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {workerReqs.map(req => (
                      <MenuItem onClick={handleClose} key={Math.random()}>
                        <div>
                        <span className="x-sm-font d-block mb-1">{req.clientName}</span>
                        <span className="x-sm-font d-block mb-1" >{req.address}</span>
                        <span className="x-sm-font d-block">{req.phoneNumber}</span>
                        </div>
                        <div className="w-100">
                        <Button className="mt-1 " size="small" variant="contained" style={{backgroundColor:"#3587D7",color:"white"}}>
                          قبول
                        </Button>
                        <Button onClick={() => {refuseRequest(req.requestID)}} className="mt-1 mr-2" size="small" variant="contained" color="secondary">
                          رفض
                        </Button>
                        </div>

                    
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      currentUser: state.user.currentUser,
      workerReqs: state.user.workerReqs
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    set_state: (stateName, value) => dispatch(set_state(stateName, value))

  }
}

export default connect(mapStateToProps , mapDispatchToProps)(RequestsIcon)