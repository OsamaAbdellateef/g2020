import React from 'react';
import './header.style.scss';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import RequestsIcon from '../requests-icon/requests-icon.component';
import { withRouter  , Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = ({ accReq, currentUser, id ,match}) => (

    <React.Fragment>
          {currentUser ? (currentUser.signedAs == "worker" ? <RequestsIcon /> : null):null}
        <Navbar className="navbar" expand="lg" collapseOnSelect={true}>
            <Container>

                
                <Navbar.Brand as={Link} to="/" className="logo-txt mr-2" href="/">صنعتنا
                 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                        
                        <Nav className="mr-auto">
                        <Nav.Link className="mr-2" as={Link} to="/" href="/">الرئيسية</Nav.Link>
{currentUser ? (currentUser.signedAs == "worker" ? (<Nav.Link as={Link} className="mr-2" to="/services" href="/services">الطلبات المقبولة ({accReq.length})</Nav.Link>):(null)):(null)}
                        <NavDropdown className="mr-2" title="الحرفيين" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/crafts/كهربائي" href="/crafts/كهربائي"> كهربائيين</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/crafts/سباك"  href="/crafts/سباك"> سباكين</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/crafts/محار"  href="/crafts/محار"> محاريين</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} className="mr-2" to="/posts"  href="/posts">المنشورات</Nav.Link>
                        <Nav.Link as={Link} className="mr-2" to="/contact-us" href="/contact-us">تواصل معنا</Nav.Link>
                        <Nav.Link as={Link} className="mr-2" to="/services" href="/services">الخدمات</Nav.Link>
                        
                        
                        {currentUser ?
                            <Nav.Link className="mr-2" onClick={() => auth.signOut()} >
                                تسجيل الخروج
                        <FontAwesomeIcon icon={faSignOutAlt} size="lg" transform="left-4" />
                            </Nav.Link>
                            :
                            <Nav.Link className="mr-2" as={Link} to="/signin" href="/signin"> تسجيل الدخول
                            <FontAwesomeIcon icon={faSignInAlt} size="lg" transform="left-4" />
                            </Nav.Link>
                            
                        }
                      
                 
                    </Nav>
                     
                    
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </React.Fragment>

)



const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser,
        accReq: state.user.accReq
    }
}


export default withRouter(connect(mapStateToProps)(Header));