import React from "react";
import './service-preview.stlye.scss';
import app from '../../images/services/app.png';
import launch from '../../images/services/launch.png';
import clock from '../../images/services/clock.png';
import contact from '../../images/services/contact.png';
import experience from '../../images/services/experience.png';
import safety from '../../images/services/safety.png';
import UnderlineHeader from '../underline-header/underline-header.component';

const services = [

    {
        header: '',
        desc: ''
    },

]

const ServicePreview = () => {

    return (
        <div className="service-preview">
            <div className="container">
            <UnderlineHeader>الخدمات</UnderlineHeader> 
                <div className="row">
                
                    <div className="service-card flex-service mt-5 col-12 col-md-6 col-lg-4">
                           
                        <div className="card-container">
                            <div className="service-desc">
                                <h4>تطبيق خاص بالموقع </h4>
                                <p>تطبيق الكتروني خاص بالموقع</p>
                            </div>
                            <div className="service-icon">
                                <img src={app} />
                            </div>
                        </div>
                    </div>
                    <div className="service-card flex-service mt-5 col-12 col-md-6 col-lg-4">
                        <div className="card-container">
                            <div className="service-desc">
                                <h4>السرعة</h4>
                                <p>يمكنك طلب الحرفي في اسرع وقت ممكن</p>
                            </div>
                            <div className="service-icon">
                                <img src={launch} />
                            </div>
                        </div>
                    </div>
                    <div className="service-card flex-service mt-5 col-12 col-md-6 col-lg-4">
                        <div className="card-container">
                            <div className="service-desc">
                                <h4>الأمان</h4>
                                <p>حماية خاصة بالمعلومات</p>
                            </div>
                            <div className="service-icon">
                                <img src={safety} />
                            </div>
                        </div>
                    </div>
                    <div className="service-card flex-service mt-5 col-12 col-md-6 col-lg-4">
                        <div className="card-container">
                            <div className="service-desc">
                                <h4>توفير الوقت</h4>
                                <p>طلب العميل المتاح</p>
                            </div>
                            <div className="service-icon">
                                <img src={clock} />
                            </div>
                        </div>
                    </div>
                    <div className="service-card flex-service mt-5 mt-5 col-12 col-md-6 col-lg-4">
                        <div className="card-container">
                            <div className="service-desc">
                                <h4>سهولة الاستخدام</h4>
                                <p>تصميم الموقع بطريقة  يسهل على المستخد التعامل معه </p>
                            </div>
                            <div className="service-icon">
                                <img src={experience} />
                            </div>
                        </div>
                    </div>
                    <div className="service-card flex-service mt-5 mt-5 col-12 col-md-6 col-lg-4">
                        <div className="card-container">
                            <div className="service-desc">
                                <h4>خدمة التواصل</h4>
                                <p>اتاحة العديد من وسائل التواصل </p>
                            </div>
                            <div className="service-icon">
                                <img src={contact} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePreview;