import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/header/header.component';
import Carousel from './components/carousel/carousel.component';
import {withRouter, HashRouter, Router, Route, Switch, Link, BrowserRouter, Redirect } from 'react-router-dom';
import SignIn from './components/sign-in/sign-in.component';
import SignPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import About from './pages/about/about';
import Footer from './components/footer/footer.component';
import IconButton from './components/icon-button/icon-button.component'
import { auth, createUserProfileDocument } from './../src/firebase/firebase.utils';
import IctonButotn from './components/icon-button/icon-button.component';
import Signup from './components/signup/signup.component';
import ContactUs from './components/contact-us/contact-us.component';
//import CraftPreview from './components/craft-preview/craft-preview.component';
import { setCurrentUser , set_state } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import SpinnerComp from './components/spinner/spinner.component';
import Posts from './pages/posts/posts.component';
import RequestsList from './components/requests-list/requests-list.component';
import AccRequests from './components/accepted-requests/acceptedRequests.component';
import firebase from 'firebase/app';
import 'firebase/firestore';
import AccRequestsComp from './components/accepted-requests/acceptedRequests.component';



const firestore = firebase.firestore();
const Home = lazy(() => import('./pages/homePage/Home'));
const CraftPreview = lazy(() => import('./components/craft-preview/craft-preview.component'));

class App extends React.Component {


  componentDidMount() {
    
      window.scrollTo(0,0);
  
    const { setCurrentUser ,set_state } = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),

          })
        })
        console.log("you have logged ")
      } else {
        set_state("go" , true)
      }

      

      await setCurrentUser(userAuth
      );
      await createUserProfileDocument(userAuth);
    })

  } 


  render() {
    return (
      <div className="App">
        { (this.props.currentUser ||  this.props.go)  ? (<Suspense fallback={<SpinnerComp />}
        >
          
          <HashRouter >
          <Header />
            <Route exact path="/" component={Home} />
            <Route exact
              path="/posts"
              render={() => this.props.currentUser ?
                (<Posts />):(<Redirect to='/signin' />) 
                } />
                
            <Route
              exact
              path="/signin"
              render={() => this.props.currentUser  ?
                (<Redirect to='/' />)
                : (<SignIn />)} />

            <Route path = "/about" component={About} />
            <Route path = "/accepted-requests" component={AccRequestsComp} />
            <Suspense fallback={<SpinnerComp />}>
             
              <Route path={`/crafts/:categoryId`}
              
              render={({match}) => this.props.currentUser ?
               (<CraftPreview match={match} />) : (<Redirect to='/signin' />)
              }/>
                
             </Suspense>
            <Route exact
              path="/signup"
              render={() => this.props.currentUser ?
                (<Redirect to='/' />) :
                (<Signup />)} />

            <Route exact path="/contact-us" component={ContactUs} />
            <Footer />
          </HashRouter>
          
          
        </Suspense>):(<SpinnerComp />)}
        
      <RequestsList /> 

      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser,
    myCrafts: user.myCrafts,
    isMounted: user.isMounted,
    go: user.go
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    set_state: (stateName, value) => dispatch(set_state(stateName, value))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
