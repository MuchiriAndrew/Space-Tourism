import React from 'react'
import NavbarComp from '../NavbarComp'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './Destination.css'
import { animate, motion } from "framer-motion"

function Destination() {

const[picture,setPicture] = useState("../../images/destination/image-moon.png");

const[title, setTitle] = useState("MOON");

const[details, setDetails] = useState("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");

const[distance, setDistance] = useState("384,400KM"); 

const[time, setTime] = useState("3 DAYS");

const[active1, setActive1] = useState("active");
const[active2, setActive2] = useState("");
const[active3, setActive3] = useState("");
const[active4, setActive4] = useState("");

const handleMoon = () => {
  setPicture("../../images/destination/image-moon.png");
  setTitle("MOON");
  setDetails("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.");
  setDistance("384,400KM");
  setTime("3 DAYS");
  setActive1("active")
  setActive2("")
  setActive3("")
  setActive4("")
}

const handleMars = () => {
  setPicture("../../images/destination/image-mars.png");
  setTitle("MARS");
  setDetails( "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!");
  setDistance("225 MIL.KM");
  setTime("9 MONTHS");
  setActive2("active")
    setActive1("")
    setActive3("")
    setActive4("")
}

const handleEuropa = () => {
  setPicture("../../images/destination/image-europa.png");
  setTitle("EUROPA");
  setDetails("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
  setDistance("628 MIL.KM");
  setTime("3 YEARS");
  setActive3("active")
  setActive2("")
  setActive1("")
  setActive4("")
}



const handleTitan = () => {
  setPicture("../../images/destination/image-titan.png");
  setTitle("TITAN");
  setDetails("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
  setDistance("1.6 BIL.KM");
  setTime("7 YEARS");
  setActive4("active")
    setActive2("")
    setActive3("")
    setActive1("")
}

  return (
    <Container fluid className='wrapper2 text'>
      <NavbarComp />

      <Container fluid className=''>
      <Row>
        <Col as={motion.div} xl={6} id='planet-col' className='' 
        initial={{ opacity:0, x: "-50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>
          <div className='mb-5' id='pick'>
          <h5 className='text-light'> <b className='text-muted'> 01&nbsp;&nbsp;</b> PICK YOUR DESTINATION</h5>
          </div>
          
          <img id='planet-img' className='img-fluid' src={picture} alt="" onChange={{transition:"0.7s"}}/>
        </Col>


        <Col as={motion.div} xl={6} id='details-col' className='' 
        initial={{ opacity:0, x: "50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>

          <div className='details-wrapper mt-5'>
            {/* my tabs */}
          <Nav className='mb-4' as="ul">
      <Nav.Item as="li">
        <Nav.Link  id= {`nav-txt-moon-${active1}`} className='p-0 me-4' onClick={handleMoon} >MOON</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link id={`nav-txt-mars-${active2}`} className='p-0 me-4'  onClick={handleMars}>MARS</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link id={`nav-txt-europa-${active3}`} className='p-0 me-4'  onClick={handleEuropa}>EUROPA</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link  id={`nav-txt-titan-${active4}`} className='p-0 me-4' onClick={handleTitan}>TITAN</Nav.Link>
      </Nav.Item>
          </Nav>

          {/* text */}
          <div id='mydets'>

          <h1 id='planet-name' className='text-light'>{title}</h1>
          <p  id='planet-details' className='mb-5 text-light'>{details}</p>

          </div>
          
          {/* distances */}
          <hr id='myhr'/>

          <Row id='numrow' className='text-light'>
        <Col xl={6} id='subcol1'>
          <p id='subheading'>AVERAGE DISTANCE</p>
          <p id='numbers'>{distance}</p>
        </Col>

        <Col xl={6} id='subcol2'>
          <p id='subheading'>EST. TRAVEL TIME</p>
          <p id='numbers'>{time}</p>
        </Col>
          </Row>

          </div>
          
          
        </Col>
      </Row>
    </Container>

    </Container>
  )
}

export default Destination