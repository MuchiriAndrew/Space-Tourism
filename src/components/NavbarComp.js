import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from 'react-router-dom';
import './NavbarComp.css';
import { motion } from "framer-motion"

function NavbarComp() {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

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

<Navbar as={motion.nav} className='mynav p-0' bg="transparent" expand={expand}
initial={{ opacity:0}}
animate={{ opacity:1}}
transition={{ duration: 1}}>
<Container id='mainCont'>  

<Navbar.Brand as={Link} to="/" className='ms-4'>
  <img src="../../images/shared/logo.svg" alt="logo"  className="img-fluid"/>
</Navbar.Brand>

<img className="img-fluid d-md-none me-4" style={{ visibility: display ? "visible" : "hidden" }} onClick={handleShow} src="../../images/shared/icon-hamburger.svg" alt="" />


<Navbar.Offcanvas style={{width:"70vw"}} show={show} onHide={handleClose} className='offcanvas' id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end" >

              <Offcanvas.Header className='justify-content-end mt-3 me-2'>
              <img className='img-fluid' style={{ visibility: display ? "hidden" : "visible" }} onClick={handleClose} src="../../images/shared/icon-close.svg" alt="" />
              </Offcanvas.Header>

              <Offcanvas.Body className="justify-content-end">
                <Nav className='mainNav'>
                    <hr className='d-none d-xl-block'/>
            
                <Nav.Link as={Link} to="/" id={`mylinks-home-${active1}`} className='me-md-4 me-lg-5 text-light' ><b className='d-block d-md-none d-xl-block'>00&nbsp;&nbsp;</b>HOME</Nav.Link>
                <Nav.Link  as={Link} to="/destination"  id={`mylinks-dest-${active2}`} className='me-md-4 me-lg-5 text-light'   ><b className='d-block d-md-none d-xl-block'>01&nbsp;&nbsp;</b>DESTINATION</Nav.Link>
                <Nav.Link as={Link} to="/crew"  id={`mylinks-crew-${active3}`} className='me-md-4 me-lg-5 text-light'  ><b className='d-block d-md-none d-xl-block'>02&nbsp;&nbsp;</b>CREW</Nav.Link>
                <Nav.Link  as={Link} to="/technology" id={`mylinks-tech-${active4}`} className='me-md-4 me-lg-5 text-light'   ><b className='d-block d-md-none d-xl-block'>03&nbsp;&nbsp;</b>TECHNOLOGY</Nav.Link>

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