import React from 'react';

import { Container, Nav, Navbar,  } from 'react-bootstrap';
import './Header.css'


import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
  const [user] = useAuthState(auth);

const handelSignout=()=>{
  signOut(auth);
}
    return (
        <header className="sticky-top">
       <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
  <Navbar.Brand as={Link} to="/" className='main-logo'>WEDDING PHOTOGRAPHY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">


 
      <NavLink className={({ isActive }) => 
      (isActive ? "active" : "link-btn")} as={Link} to="/">Home</NavLink>
      <NavLink  className={({ isActive }) => 
      (isActive ? "active" : "link-btn")} as={Link} to="/about">About</NavLink>
      <NavLink className={({ isActive }) => 
      (isActive ? "active" : "link-btn")} as={Link} to="/services">Services</NavLink>
      <NavLink className={({ isActive }) => 
      (isActive ? "active" : "link-btn")} as={Link} to="/blog">Blogs</NavLink>
  
  
    </Nav>
    <Nav>
      {
        user?
          //  <Nav.Link  as={Link} to="/login">Sign Out</Nav.Link>
          <button className='btn1 ' onClick={handelSignout}>Sign Out</button>
        :
        // <Nav.Link  as={Link} to="/regester">
        // Sign Up
        // </Nav.Link>
           <NavLink className={({ isActive }) => 
           (isActive ? "active" : "link-btn")} as={Link} to="/login">Login</NavLink>
      }
   
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    );
};

export default Header;