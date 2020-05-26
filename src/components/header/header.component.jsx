import React from 'react';
import './header.style.scss';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter , Switch ,BrowserRouter,HashRouter, Link } from 'react-router-dom';
import { auth } from './../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Header = ({ currentUser, id ,match}) => (

    <React.Fragment>

        <Navbar className="navbar" expand="lg" collapseOnSelect={true}>
            <Container>


                <Navbar.Brand className="logo-txt mr-2" href="/">صنعتنا</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                        
                        <Nav className="mr-auto">
                        <Nav.Link className="mr-2" as={Link} to="/" href="/">الرئيسية</Nav.Link>

                        <NavDropdown className="mr-2" title="الحرفيين" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/crafts/كهربائي" href="/crafts/كهربائي"> كهربائيين</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/crafts/سباك"  href="/crafts/سباك"> سباكين</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/crafts/محار"  href="/crafts/محار"> محاريين</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} className="mr-2" to="/posts"  href="/posts">المنشورات</Nav.Link>
                        <Nav.Link as={Link} className="mr-2" to="/contact-us" href="/contact-us">تواصل معنا</Nav.Link>
                        <Nav.Link as={Link} className="mr-2" to="/services" href="/services">الخدمات</Nav.Link>
                        <Nav.Link as={Link} className="mr-2" to="/about" href="/about">عن التطبيق</Nav.Link>
                        
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
                        <button onClick={() => {console.log(match)}}>push</button>
                    </Nav>
                     
                    
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </React.Fragment>

)



const mapStateToProps = state => {
    return {
        currentUser: state.user.currentUser
    }
}


export default withRouter(connect(mapStateToProps)(Header));