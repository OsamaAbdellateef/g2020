import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import  RatingComp from '../rating-comp/rating.component';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import './requests-list.style.scss';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import {set_state} from '../../redux/user/user.actions';
import 'firebase/firestore';

const firestore = firebase.firestore();

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const deleteReq = (reqID) => {
    firestore.collection("requests").doc(`${reqID}`).delete().then(() => {console.log('deleted successfully')})
}


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const RequestsList = ({ currentUser , craft, ownReq , set_state }) => {

    const [counter, setCounter] = React.useState(0);

  

    React.useEffect(() => {
        var jao = [];
        if(currentUser) {
            firestore.collection('requests').orderBy("createdAt" , "desc").where("userID" , "==" , `${currentUser.userID}`).onSnapshot(querySnapshot => {
                jao = [];
                querySnapshot.forEach(doc => jao.push(doc.data()));
                console.log("your own Requests y beeh : "  ,currentUser.userID, jao);
                set_state("ownReq" , jao)
            })
        }
    },[currentUser])

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {currentUser  ? <Button style={{
                position: "fixed",
                bottom: "30px",
                right: "2px",
                /* width: 28%; */
                background: "white", zIndex: "1"
            }} variant="outlined" color="primary" onClick={handleClickOpen}>
                الطلبات الخاصة بك
                <span className="req-num">{ownReq.length}</span>
      </Button>:(null)}
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            قائمة الطلبات
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            اغلاق
            </Button>
                        
                    </Toolbar>
                </AppBar>
                <List>
                    {currentUser ? (
                        ownReq.map(req => (
                            req.userID == currentUser.userID ? (
                                <React.Fragment key={Math.random()}>
                                    <ListItem button>
                                        <div>
                                        <ListItemText primary={`${req.crafterName}`} secondary={`${req.craft}`} />
                                        </div>
                                        
                                        {req.accepted == "true" ? (req.done == "true" ? (<RatingComp requestID = {ownReq.requestID} ownReq={req} />):(<span className="centerV right-67 recieved">تم تاكيد الطلب</span>)):(<span className="centerV right-67 waiting" > قيد الانتظار...</span>)}
                                        {req.accepted == "false" ? (<IconButton onClick={() => {deleteReq(req.requestID)}}>
                                 <DeleteIcon />
                                </IconButton>):(null)}
                                    </ListItem>
                                    
                                    <Divider />
                                </React.Fragment>
                            ) : (null)
                        ))
                    ) : (null)}
                </List>
            </Dialog>
        </div>
    );
}
const mapStateToProps = ({ user }) => {
    return {
        currentUser: user.currentUser,
        myCrafts: user.myCrafts,
        ownReq: user.ownReq

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_state: (stateName, value) => dispatch(set_state(stateName, value))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsList);