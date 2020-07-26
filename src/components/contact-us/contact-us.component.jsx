import React from 'react';
import UnderlineHeader from '../underline-header/underline-header.component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faTools, faAddressCard, faPhone, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconBox from '../icon-box/icon-box.component';
import './contact-us.style.scss';
import FormInput from '../form-input/form-input.component';
import { connect } from 'react-redux';
import { handle_change } from '../../redux/contact/contact-action';
import { Button } from 'react-bootstrap';
import Textarea from '../textarea/textarea.component';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Form, Col } from 'react-bootstrap';


const firestore = firebase.firestore();

const handle = (email, message) => {
    firestore.collection('mail').add({
        to: email,
        message: {
            messageContent: message,
            
        },
    })
}

const ContactUs = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    })

    const [email , handleEmail]=React.useState("");
    const [message , handleMessage]=React.useState("");
    const [name , handleName]=React.useState("");
    const [address , handleAddress]=React.useState("");
    
    return (
        <div className="contact-us container text-center ">
            <div className="row">
                <div className="col-12 contact-header">
                    <UnderlineHeader>
                        تواصل معنا
                </UnderlineHeader>
                    <div className="row">
                        <IconBox iconName={faEnvelope} header="البريد الالكتروني" description="SANETNA.ESTABIENA@GMAIL.COM" />
                        <IconBox iconName={faPhone} header="رقم الهاتف" description="01116113544" />
                        <IconBox iconName={faAddressCard} header=" العنوان" description="مقرنا في المنيا" />
                    </div>
                </div>
                <div className="w-100">
                    <Form className="p-5" onSubmit={() => {handle(email,message,name,address)}}>


                        <Form.Row>

                            <Form.Group className="col-12 col-md-6" as={Col} controlId="formGridText">
                                <Form.Label>الاسم كاملا</Form.Label>
                                <Form.Control onChange={(e) => {handleName(e.target.value)}} value={name} type="text" placeholder="اكتب الاسم كاملا" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPasword">

                            </Form.Group>

                        </Form.Row>
                        <Form.Row>

                            <Form.Group className="col-12 col-md-6" as={Col} controlId="formGridEmail">
                                <Form.Label>البريد الالكتروني </Form.Label>
                                <Form.Control onChange={(e)=>{handleEmail(e.target.value)}} type="email" placeholder="اكتب البريد الالكتروني" />
                            </Form.Group>

                            <Form.Group className="col-12 col-md-6" as={Col} controlId="formGridPasword">

                            </Form.Group>

                        </Form.Row>

                        <Form.Row>

                            <Form.Group className="col-12 col-md-6" as={Col} controlId="formGridAddress1">
                                <Form.Label>العنوان</Form.Label>
                                <Form.Control onChange={(e)=>{handleAddress(e.target.value)}} placeholder="ملوي -المنيا" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPasword">

                            </Form.Group>
                        </Form.Row>

                        <Form.Row>

                            <Form.Group className="col-12 col-md-6" as={Col} controlId="formGridTextarea">
                                <Form.Label>الرسالة</Form.Label>
                                <Form.Control onChange={(e)=>{handleMessage(e.target.value)}} as="textarea" placeholder="اكتب الرسالة الخاصة بك " />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridPasword">

                            </Form.Group>
                        </Form.Row>

                     
                        <Button  variant="primary" type="submit">
                            ارسال
                        </Button>
                    </Form>
                </div>

            </div>

        </div>
    )
}



export default ContactUs