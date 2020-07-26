import React from "react";
import "./acceptedRequests.style.scss";
import { Table , Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {set_state} from '../../redux/user/user.actions';
import UnderlineHeader from '../underline-header/underline-header.component';
import firebase from 'firebase/app';
import 'firebase/firestore';

const init = 1
const firestore = firebase.firestore();

const AccRequestsComp = ({set_state,accReq}) => {

    const [counter,incCounter] = React.useState(1);


    const finishWork  = (id) => {
        firestore.collection('requests').doc(id).update({
            done:"true"
        }).then(() => {
            console.log("updated")
        })
    }

    return (
        <div className="acc-req">
            <div className="container">
            <UnderlineHeader>
                 الطلبات المقبولة
            </UnderlineHeader>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>اسم العميل</th>
                                <th>العنوان</th>
                                <th>رقم الهاتف</th><th>انهاء الطلب </th>
                            </tr>
                        </thead>
                        <tbody>
                            {accReq.map((req,i) => (
                                req.done == "false" ? (
                                <tr key={Math.random()}>
                                <td>{i+init}</td>
                                <td>{req.clientName}</td>
                                <td>{req.address}</td>
                                <td>{req.phoneNumber}</td>
                                <td><Button onClick={() => {finishWork(req.requestID)}}>انهاء العمل</Button></td>
                            </tr>
                                ):(null)
                            ))}
                           
                        </tbody>
                    </Table>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        workerReqs: state.user.workerReqs,
        accReq: state.user.accReq
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      set_state: (stateName, value) => dispatch(set_state(stateName, value))
  
    }
  }
  
  export default connect(mapStateToProps , mapDispatchToProps)(AccRequestsComp)
