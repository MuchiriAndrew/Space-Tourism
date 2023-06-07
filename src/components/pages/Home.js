import React from 'react'
import NavbarComp from '../NavbarComp'
import './Home.css'
import { Container } from 'react-bootstrap'



function Home() {
  return (
    <Container className='wrapper'>
      <NavbarComp />
    </Container>
   
  )
}

export default Home