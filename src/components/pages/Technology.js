import React from 'react'
import NavbarComp from '../NavbarComp'
import './Technology.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';



function Technology() {
  return (
    <Container className='wrapper4'>
      <NavbarComp />

      <Container fluid id='tech-body-cont' className='p-0'>

    <Row id='main-row2'>

        <Row as={motion.div}  id="launch" className='order-1'
        initial={{ opacity:0, x: "-50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>

        <h5 id="launchp" className='text-light'> <b style={{color:"gray"}}>  03&nbsp;&nbsp;</b> SPACE LAUNCH 101</h5>

        </Row>

        <Col as={motion.div} gy-0 xl={6} id='launchcol' className='p-0 order-3 order-md-3 order-xl-2'
        initial={{ opacity:0, x: "-50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>

          <Row  id="launchrow" >
            <div id='launchdetails' >

              {/* text */}

            <div className='order-2 order-md-2'>
              <p id='common' className='text-primary'>THE TERMINOLOGY...</p>
              <h3 className="text-light" id='name'>LAUNCH VEHICLE</h3>
              <p className="text-primary" id='launch-dets'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
            </div>    

            {/* small navbar */}
            
            <div className='order-1 order-md-1'>

            <Nav id="somenavs" className='mb-4' as="ul">
              <Nav.Item as="li">
                <Nav.Link id='nav1' className='p-0 rounded-circle' >1</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id='nav1' className='p-0 rounded-circle' >2</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id='nav1' className='p-0 m-0 rounded-circle' >3</Nav.Link>
              </Nav.Item>
            </Nav>
            </div>
            

            </div>
            
          </Row>
          
        </Col>

        <Col as={motion.div} id="tech-pic-col"  xl={6} className=' p-0 order-2 order-md-2 order-xl-3 '
        initial={{ opacity:0, x: "50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>

          <picture id='picture'>
            <source className='img-fluid' media="(max-width:1200px)" srcset="../../images/technology/image-launch-vehicle-landscape.jpg" />
            <img id='techpicture' className='img-fluid' src="../../images/technology/image-launch-vehicle-portrait.jpg" alt="space capsule" />
          </picture>

        
        </Col>

    </Row>

    </Container>

    </Container>
  )
}

export default Technology