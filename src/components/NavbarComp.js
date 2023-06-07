import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarComp.css';

function NavbarComp() {

  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(true);

  const handleClose = () => {
    setShow(false);
    setDisplay(true);
  }

  const handleShow = () => {
    setShow(true);
    setDisplay(false);
  }

  return (
    <>

     {['md'].map((expand) => (

<Navbar className='mynav' bg="transparent" expand={expand}>
<Container id='mainCont'>  

<Navbar.Brand className='ms-4' href="./" >
  <img src="../../images/shared/logo.svg" alt="logo"  className="img-fluid"/>
</Navbar.Brand>

<img className="d-md-none" style={{ visibility: display ? "visible" : "hidden" }} onClick={handleShow} src="../../images/shared/icon-hamburger.svg" alt="" />


<Navbar.Offcanvas show={show} onHide={handleClose} className='offcanvas' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >

              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
               
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="justify-content-end">
                <Nav className='mainNav'>
                    <hr className='d-none d-xl-block'/>
            
                <Nav.Link id='mylinks' className='me-5 text-light' href="./"><b>00&nbsp;&nbsp;</b>HOME</Nav.Link>
                <Nav.Link id='mylinks' className='me-5 text-light' href="./destination"><b>01&nbsp;&nbsp;</b>DESTINATION</Nav.Link>
                <Nav.Link id='mylinks' className='me-5 text-light' href="./crew"><b>02&nbsp;&nbsp;</b>CREW</Nav.Link>
                <Nav.Link id='mylinks' className='me-3 text-light' href="./technology"><b>03&nbsp;&nbsp;</b>TECHNOLOGY</Nav.Link>

                </Nav>
              </Offcanvas.Body>

            </Navbar.Offcanvas>
</Container>
</Navbar>
))}
    </> 
  );
}

export default NavbarComp