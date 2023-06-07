import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './NavbarComp.css';

function NavbarComp() {

  const location = useLocation();

  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState(true);
  const [active1, setActive1] = useState('');
  const [active2, setActive2] = useState('');
  const [active3, setActive3] = useState('');
  const [active4, setActive4] = useState('');

  const handleClose = () => {
    setShow(false);
    setDisplay(true);
  }

  const handleShow = () => {
    setShow(true);
    setDisplay(false);
  }

  useEffect(()=> {
    if (location.pathname === "/") {
      setActive1("active");
  }},[])
  useEffect(()=> {
    if (location.pathname === "/destination") {
      setActive2("active");
  }},[])
  useEffect(()=> {
    if (location.pathname === "/crew") {
      setActive3("active");
  }},[])
  useEffect(()=> {
    if (location.pathname === "/technology") {
      setActive4("active");
  }},[])



  return (
    <>

     {['md'].map((expand) => (

<Navbar className='mynav p-0' bg="transparent" expand={expand}>
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
            
                <Nav.Link id={`mylinks-home-${active1}`} className='me-5 text-light' href="./" ><b>00&nbsp;&nbsp;</b>HOME</Nav.Link>
                <Nav.Link id={`mylinks-dest-${active2}`} className='me-5 text-light' href="./destination"  ><b>01&nbsp;&nbsp;</b>DESTINATION</Nav.Link>
                <Nav.Link id={`mylinks-crew-${active3}`} className='me-5 text-light' href="./crew"  ><b>02&nbsp;&nbsp;</b>CREW</Nav.Link>
                <Nav.Link id={`mylinks-tech-${active4}`} className='me-3 text-light' href="./technology"  ><b>03&nbsp;&nbsp;</b>TECHNOLOGY</Nav.Link>

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