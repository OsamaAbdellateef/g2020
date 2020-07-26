import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './rating.style.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {Button} from 'react-bootstrap';

const firestore = firebase.firestore();


const labels = {
  1: 'سئ',
  2: 'متوسط',
  3: 'جيد',
  4: 'جيد جدا',
  5: 'ممتاز',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating({ownReq}) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  const makeRate = (value,workerID) => {
    firestore.collection("ratings").doc(`${Math.random().toString(36).substr(2, 9)}`).set({
     value:value,
     crafterID:workerID  
    }).then(() => {
        deleteReq(ownReq.requestID);
        console.log("Done successfully ! ")
    })
  }
  const deleteReq = requestID => {
    firestore.collection("requests").doc(`${requestID}`).delete().then(()=> {
        console.log("deleted successfully ")
    });
  }


  return (
    <div className={`rate-control ${classes.root}`}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={1}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
   
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      <Button onClick={() => {makeRate(value , ownReq.crafterID)}}>تقييم</Button>
    </div>
  );
}
