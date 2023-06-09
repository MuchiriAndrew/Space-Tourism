import React from 'react'
import NavbarComp from '../NavbarComp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import './Destination.css'
import { motion } from "framer-motion"



function Destination() {
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
          
          <img id='planet-img' className='img-fluid' src="../../images/destination/image-moon.png" alt="" />
        </Col>


        <Col as={motion.div} xl={6} id='details-col' className='' 
        initial={{ opacity:0, x: "50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>

          <div className='details-wrapper mt-5'>
            {/* my tabs */}
          <Nav defaultActiveKey="#" as="ul">
      <Nav.Item as="li">
        <Nav.Link  id='nav-txt'  href="/home">MOON</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link id='nav-txt'  eventKey="link-1">MARS</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link id='nav-txt'  eventKey="link-2">EUROPA</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link  id='nav-txt' eventKey="link-2">TITAN</Nav.Link>
      </Nav.Item>
          </Nav>

          {/* text */}
          <div >

          <h1 id='planet-name' className='text-light'>MOON</h1>
          <p  id='planet-details' className='mb-5 text-light'>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

          </div>
          
          {/* distances */}
          <hr id='myhr'/>
          <Row className='text-light'>
        <Col>
          <p id='subheading'>AVERAGE DISTANCE</p>
          <p id='numbers'>384,400KM</p>

        </Col>
        <Col>
          <p id='subheading'>EST. TRAVEL TIME</p>
          <p id='numbers'>3 DAYS</p>
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