import React, {Suspense , lazy} from 'react';
import './craft-preview.style.scss';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { set_state } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
//import CraftCard from '../craft-card/craft-card.component';
import Skeleton from 'react-loading-skeleton';
import spinnerComp from '../spinner/spinner.component';
import SpinnerComp from '../spinner/spinner.component';
const CraftCard = lazy(() => import( '../craft-card/craft-card.component'));
 
const firestore = firebase.firestore();

var mounted = true;
class CraftPreview extends React.Component {



    async componentDidMount() {
        if(mounted) {
            window.scrollTo(0, 0);
        const {set_state} = this.props;
        // const events = await firebase.firestore().collection('events')
        // events.get().then((querySnapshot) => {
        //     const tempDoc = []
        //     querySnapshot.forEach((doc) => {
        //        tempDoc.push({ id: doc.id, ...doc.data() })
        //     })
        //     console.log(tempDoc)
        //  })
        var usersRef = await firestore.collection("users").get().then(console.log("hello there "));
        var users = usersRef.docs.map(doc => doc.data());
  
        set_state("currentURL",this.props.match.params);
        set_state("nUsers",users)
        
        var mC = this.props.nUsers.filter(user => user.signedAs == "worker" && user.craft == this.props.currentURL);

        
        set_state("myCrafts" , mC);
        }

        
    }

    componentWillUnmount () {
        mounted=false
    }

    componentDidUpdate () {
        if(this.props.currentURL !== this.props.match.params.categoryId) {
            this.props.set_state("currentURL" , this.props.match.params.categoryId )
            var mC = this.props.nUsers.filter(user => user.signedAs == "worker" && user.craft == this.props.match.params.categoryId);
            this.props.set_state("myCrafts",mC)
            
        }
    }
    render() {
 
        return (

            <div className="craft-preview container">
              
               
                <div className="row" >
                {this.props.myCrafts.map(worker => (
                    <Suspense key={Math.random()} fallback={<Skeleton height={100} width={100} />}>
                         <CraftCard  
                        key={Math.random()}
                        imageCraftURL={worker.imageCraftURL} displayName={worker.displayName} address={worker.address} 
                        phoneNumber={worker.phoneNumber} 
                        crafterID={worker.userID}
                        imagePersonalURL={worker.imagePersonalURL} craft = {worker.craft} />
                    </Suspense>
                ))                
                }
               
                         
            </div >
            </div>
        )
    }

}

const mapStateToProps = ({ user }) => ({
    workers: user.workers,
    plumber: user.plumber,
    electrician: user.electrician,
    myCrafts:user.myCrafts,
    currentURL: user.currentURL,
    nUsers: user.nUsers
})

const mapDispatchToProps = (dispatch) => ({
    set_state: (stateName, value) => dispatch(set_state(stateName, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CraftPreview);