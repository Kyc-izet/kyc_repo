import React, { useState } from 'react';
import '../Components/Nav.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, } from 'react-bootstrap'; // Import React-Bootstrap components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import Font Awesome icons
import image from '../Components/kyc.png';


export default function CustomNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navBarr'>
      <Navbar expand="lg" variant="light" bg="dark" className="custom-navbar">
        <Link to="/" className="logo"><img src={image} alt="Logo" /></Link>
        <Navbar.Toggle className='hamburger-button' aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav spaceBet">
          <Nav className="mr-auto auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/personalmentor" className="nav-link">
              Personal Mentor

            </Nav.Link>

            <Nav.Link as={Link} to="/Launchingsoon" className="nav-link">
              Compare Colleges
            </Nav.Link>
{/*             <Nav.Link as={Link} to="/about" className="nav-link">
              About Us
            </Nav.Link> */}

            <Nav.Link as={Link} to="/collegepredictor" className="nav-link">
              College Predictor
            </Nav.Link>
            <Nav.Link as={Link} to="/join" className="nav-link">
              Join Us
            </Nav.Link>
          </Nav>


          <Link to='/community' className="nav-link community">
            Join Community
          </Link>

        </Navbar.Collapse>

      </Navbar>
    </div>
  );
}
