import React from 'react'
import {Container, Navbar} from 'react-bootstrap';
import Logo from '../img/logo.svg';
import '../App.css';
export default function Navb() {
  return (
    <Navbar bg="black" variant="black">
    <Container>
      <Navbar.Brand className="font-color-nav" href="#home">
        <img
          alt="logo"
          src={Logo}
          width="40"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Weather
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}
