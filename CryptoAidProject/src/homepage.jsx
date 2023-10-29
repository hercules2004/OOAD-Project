// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import Auction from "./pages/Auctions/Auction";
import './App.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Container>
          <Navbar.Brand href="#">cryptoAid</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Start an Auction</Nav.Link>
            <Nav.Link href={Link} to="/profile">Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="centered-content">
        <h1 className="homepage-title">Welcome to cryptoAid</h1>
      </div>
      {/* <Auction /> */}
      <button className="button-1">Participate in an auction</button>    </div>
  );
};

export default HomePage;
