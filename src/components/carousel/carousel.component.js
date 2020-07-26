import React from 'react';
import {BrowserRouter ,Link} from 'react-router-dom';
import './carousel.style.scss';
import {carousel} from 'react-bootstrap';
import BtnLink from './../button/btn.component';
import path from './../../images/member images/member5.jpg'
import CarouselLogo from '../../images/worker.png';
import ServicePreview from '../service-preview/service-preview.component';


var p = require('./../../images/member images/member5.jpg');

const Carousel = () => (
    <React.Fragment>
        <header className="mainView">


<div className="carousel-content text-center">
    <img className="mb-3" width="30%" src={CarouselLogo} />
    <h1 className="title text-center mb-4">مرحبابكم في موقع صنعتنا</h1>
    <p className="text-center mb-4 font-md">يعد موقع صنعتنا وجهة رئيسية للباحثين عن فرص العمل خاصة اصحاب المؤهلات المتوسطة وغيرها</p>
    <BrowserRouter>
        <BtnLink className="but " to="noPlace">تحميل التطبيق</BtnLink>
        <BtnLink className="but " to="notyet ">كيفية الاستخدام</BtnLink>
    </BrowserRouter>         
</div>

</header>    
<ServicePreview />
    </React.Fragment>

)

export default Carousel;