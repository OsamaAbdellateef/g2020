import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import firebase from 'firebase/app';
import 'firebase/firestore';
import './static-rate.style.scss';
import { connect } from 'react-redux';
const firestore = firebase.firestore();

const SimpleRating = ({ currentUser, crafterID }) => {
    let mounted = false;
    const [value, setValue] = React.useState(5);
    const [ratings, setRatings] = React.useState([]);
    const [totalRate, setTotalRate] = React.useState(0);
    


    React.useEffect(() => {

      var arr;
       const unsubscribe = firestore.collection("ratings").where("crafterID" , "==" , `${crafterID}`).onSnapshot(querySnapshot => {
        arr=[];
        querySnapshot.forEach(doc => {
            console.log("new post : " , doc.data());
              
            arr.push(doc.data());           
        }) 
        setRatings(arr);
        var total = 0;

        
        setTotalRate(total)
       })
  

        return function cleanUp() {
         unsubscribe();
        }
    }, [])

    React.useEffect(() => {
        var total = 0;
        let count = 0;
        ratings.forEach(rate => {
            console.log("******************* rate.value" , rate.value)
            total+=rate.value;
            count+=1
        })
        setTotalRate(total/count);
    },[ratings])

    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={totalRate} readOnly />

            </Box>

        </div>
    );
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(SimpleRating)