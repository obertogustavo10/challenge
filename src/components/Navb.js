import React from 'react';
import { Link } from "react-router-dom";
import { BsHouseDoor} from "react-icons/bs";
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
      <Link className="font-color-nav" to="/clima">Weather</Link>
      </Navbar.Brand>
      <Link to="/"className="justify-content-end font-color-nav"><BsHouseDoor/> Home</Link>
    </Container>
  </Navbar>
  )
}
