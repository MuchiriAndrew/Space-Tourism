import React from 'react'
import NavbarComp from '../NavbarComp'
import { useState, useEffect } from 'react';
import './Technology.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import { motion } from 'framer-motion';



function Technology() {

  const[picture,setPicture] = useState(window.innerWidth < 1200 ? "../../images/technology/image-launch-vehicle-landscape.jpg" : "../../images/technology/image-launch-vehicle-portrait.jpg");

  const { width } = useWindowSize();

  useEffect(()=>{
    if (name=== "LAUNCH VEHICLE"){
      if(width <= 1200) {
        setPicture("../../images/technology/image-launch-vehicle-landscape.jpg")
      }
      else{
        setPicture("../../images/technology/image-launch-vehicle-portrait.jpg")
      }
    }

    if (name=== "SPACEPORT"){
      if(width <= 1200) {
        setPicture("../../images/technology/image-spaceport-landscape.jpg")
      }
      else{
        setPicture("../../images/technology/image-spaceport-portrait.jpg")
      }
    }

    if (name=== "SPACE CAPSULE"){
      if(width <= 1200) {
        setPicture("../../images/technology/image-space-capsule-landscape.jpg")
      }
      else{
        setPicture("../../images/technology/image-space-capsule-portrait.jpg")
      }
    }
  }, [width])


  const[name, setName] = useState("LAUNCH VEHICLE");
  
  const[details, setDetails] = useState("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");


  const[active1, setActive1] = useState("active");
  const[active2, setActive2] = useState("");
  const[active3, setActive3] = useState("");



const handleVehicle = () => {
  if (window.innerWidth <= 1200) {
    setPicture("../../images/technology/image-launch-vehicle-landscape.jpg");
  }else{
    setPicture("../../images/technology/image-launch-vehicle-portrait.jpg")
  }
  setName("LAUNCH VEHICLE");
  setDetails("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
  setActive1("active")
    setActive2("")
    setActive3("")
   
}

const handlePort = () => {
  if (window.innerWidth <= 1200) {
    setPicture("../../images/technology/image-spaceport-landscape.jpg");
  }else{
    setPicture("../../images/technology/image-spaceport-portrait.jpg")
  }
  setName("SPACEPORT");
  setDetails("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
  setActive1("")
    setActive2("active")
    setActive3("")
    
}

const handleCapsule = () => {
  if (window.innerWidth <= 1200) {
    setPicture("../../images/technology/image-space-capsule-landscape.jpg");
  }else{
    setPicture("../../images/technology/image-space-capsule-portrait.jpg")
  }
  setName("SPACE CAPSULE");
  setDetails("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
  setActive1("")
  setActive2("")
    setActive3("active")
    
}

  



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
              <h3 className="text-light" id='name'>{name}</h3>
              <p className="text-primary" id='launch-dets'>{details}</p>
            </div>    

            {/* small navbar */}
            
            <div className='order-1 order-md-1'>

            <Nav id="somenavs" className='mb-4' as="ul">
              <Nav.Item as="li">
                <Nav.Link id={`nav1-vehicle-${active1}`} className='p-0 rounded-circle' onClick={handleVehicle} >1</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id={`nav1-port-${active2}`} className='p-0 rounded-circle' onClick={handlePort} >2</Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Nav.Link id={`nav1-capsule-${active3}`} className='p-0 m-0 rounded-circle' onClick={handleCapsule} >3</Nav.Link>
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

          <div id='picture'>
            <img id='techpicture' className='img-fluid' src={picture} alt="space capsule" />
          </div>

        
        </Col>

    </Row>

    </Container>

    </Container>
  )

  // Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

}

export default Technology