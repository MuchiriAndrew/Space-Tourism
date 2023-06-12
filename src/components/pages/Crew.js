import React from 'react'
import NavbarComp from '../NavbarComp'
import { useState, useEffect } from 'react';
import './Crew.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';



function Crew() {

 

  const[picture,setPicture] = useState("../../images/crew/image-douglas-hurley.png");

  const[title, setTitle] = useState("COMMANDER");

  const[name, setName] = useState("DOUGLAS HURLEY");
  
  const[details, setDetails] = useState("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");
  
  
  const[active1, setActive1] = useState("active");
  const[active2, setActive2] = useState("");
  const[active3, setActive3] = useState("");
  const[active4, setActive4] = useState("");
  
  const handleDouglas = () => {
    setPicture("../../images/crew/image-douglas-hurley.png");
    setTitle("COMMANDER");
    setName("DOUGLAS HURLEY")
    setDetails("Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.");

    setActive1("active")
    setActive2("")
    setActive3("")
    setActive4("")
  }
  
  const handleMark = () => {
    setPicture("../../images/crew/image-mark-shuttleworth.png");
    setTitle("MISSION SPECIALIST");
    setDetails( "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.");
    setName("MARK SHUTTLEWORTH");
   
    setActive2("active")
      setActive1("")
      setActive3("")
      setActive4("")
  }
  
  const handleVictor = () => {
    setPicture("../../images/crew/image-victor-glover.webp");
    setTitle("PILOT");
    setDetails("Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.");
    setName("VICTOR GLOVER");

    setActive3("active")
    setActive2("")
    setActive1("")
    setActive4("")
  }
  
  
  
  const handleAnsari = () => {
    setPicture("../../images/crew/image-anousheh-ansari.png");
    setTitle("FLIGHT ENGINEER");
    setDetails("Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.");
    setName("ANOUSHEH ANSARI");
    
    setActive4("active")
      setActive2("")
      setActive3("")
      setActive1("")
  }


  useEffect(()=> {
     // Start of swipe effect
let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  //swipe left
  if (touchendX < touchstartX){
    if(name === "DOUGLAS HURLEY"){
      handleMark();
    }
    if(name === "MARK SHUTTLEWORTH"){
      handleVictor();
    }
    if(name === "VICTOR GLOVER"){
      handleAnsari();
    }
    if(name === "ANOUSHEH ANSARI"){
      handleDouglas();
    }
  }
    //swipe right
  if (touchendX > touchstartX){
    if(name === "DOUGLAS HURLEY"){
      handleAnsari();
    }
    if(name === "MARK SHUTTLEWORTH"){
      handleDouglas();
    }
    if(name === "VICTOR GLOVER"){
      handleMark();
    }
    if(name === "ANOUSHEH ANSARI"){
      handleVictor();
    }
  }  
}

  var bb = document.getElementById("picture-col");

  
    bb.addEventListener("touchstart", (e) => {
      touchstartX = e.changedTouches[0].screenX;
    });
    
    bb.addEventListener("touchend", (e) => {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    });
},[name])


  return (
    <Container fluid className='wrapper3'>
    <NavbarComp />
  

    <Container fluid id='crew-body-cont' className='mt-5'>

    <Row id='main-row'>

        <Row as={motion.div} gy-0 id="meet" className='order-1'
        initial={{ opacity:0, x: "-50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>
        <h5 id="meetcrewh5" className='text-light'> <b style={{color:"gray"}}>  02&nbsp;&nbsp;</b> MEET YOUR CREW</h5>
        </Row>

        <Col as={motion.div} gy-0 xl={6} id='firstcol' className='p-0 order-3 order-md-2'
        initial={{ opacity:0, x: "-50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>
          <Row  id="crewmem" >
            <div id='crewmemdetails' >

            <div className='order-2 order-md-1'>
              <h4 id='title'>{title}</h4>
              <h3 className="text-light" id='name'>{name}</h3>
              <p className="text-primary" id='memdets'>{details}</p>
            </div>    
            
            <div className='order-1 order-md-2'>
            <Nav id='smallnav' className='mb-4' as="ul">
              <Nav.Item as="li">
                <Nav.Link  id={`circles-link-douglas-${active1}`} onClick={handleDouglas} className='p-0 me-4 rounded-circle' >&nbsp;</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id={`circles-link-mark-${active2}`} onClick={handleMark} className='p-0 me-4 rounded-circle' >&nbsp;</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id={`circles-link-victor-${active3}`} onClick={handleVictor} className='p-0 me-4 rounded-circle' >&nbsp;</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id={`circles-link-ansari-${active4}`} onClick={handleAnsari} className='p-0 me-4 rounded-circle'>&nbsp;</Nav.Link>
              </Nav.Item>
            </Nav>
            </div>
            

            </div>
            
          </Row>
          
        </Col>

        <Col as={motion.div} gy-0 id="picture-col"  xl={6} className='order-2 order-md-3'
        initial={{ opacity:0, x: "50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>
        <img id='crewpicture' className='img-fluid' src={picture} alt="" onS />
        </Col>

    </Row>

    </Container>

    </Container>
  )
}

export default Crew