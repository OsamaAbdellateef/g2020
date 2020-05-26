import React, { useState, useEffect } from 'react';
import './craft-card.style.scss';
import { faUser, faTools, faAddressCard, faPhone, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RequesForm from '../request-form/reques-form.component';
import firebase from 'firebase/app';
import { connect } from 'react-redux';
import 'firebase/firestore';


const firestore = firebase.firestore();

const CraftCard = ({ currentUser, imageCraftURL, crafterID, imagePersonalURL, craft, displayName, address, userID, phoneNumber, ...otherProps }) => {

    return (
        <div className="col-12 col-md-6 col-lg-3 mb-5 col craft-card"  {...otherProps} >
            <div className="content">
                <div className="image-container">
                    <img src={`${imagePersonalURL}`} />
                </div>
                <div className="details">
                    <h5><FontAwesomeIcon icon={faUser} size="sm" transform="left-4" color="#3587D7" />{displayName}</h5>
                    <h5> <FontAwesomeIcon icon={faPhone} size="sm" transform="left-4" color="#3587D7" /> {phoneNumber}</h5>
                    <h5><FontAwesomeIcon icon={faTools} size="sm" transform="left-4" color="#3587D7" />{craft}</h5>
                    <h5><FontAwesomeIcon icon={faAddressCard} size="sm" transform="left-4" color="#3587D7" />{address}</h5>


                    <RequesForm crafterID={crafterID} craft={craft} displayName={displayName} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})
export default connect(mapStateToProps)(CraftCard);