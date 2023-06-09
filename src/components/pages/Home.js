import React from 'react'
import NavbarComp from '../NavbarComp'
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import { motion } from "framer-motion"


function Home() {
  return (
    <Container  className='wrapper'>
      <NavbarComp />

      <Container fluid id='body-cont' className='mt-5 p-0' >

      <Row id='row'>

        <Col as={motion.div} xl={6} id='txt-col' className='gx-0 text-light p-0' 
        initial={{ opacity:0, x: "-50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>
          <div id='txt'>
            <h5 id='h5txt' className='text-primary'>SO, YOU WANT TO TRAVEL TO</h5>
            <h1  id='h1txt'>SPACE</h1>
            <p  id='ptxt' className='text-primary' >Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
          </div>
        </Col>

        <Col as={motion.div} xl={6} id='btn-col' className='gx-0 text-light p-0'
        initial={{ opacity:0, x: "50%"}}
        animate={{ opacity:1, x: "0"}}
        transition={{ duration: 1}}>
          <Link className='btn-link' to='/destination'>
          <div id='circle' className='rounded-circle bg-light'>
          <h2 className='text-dark m-0 explore-txt'>EXPLORE</h2>
          </div>
          </Link>
        </Col>

      </Row>

    </Container>
    </Container>
   
  )
}

export default Home