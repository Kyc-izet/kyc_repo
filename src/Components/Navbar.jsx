import React, { useState } from 'react';
import '../Components/Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; // FontAwesome hamburger icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Cross = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="nav">
        <div className="logo"></div>
        <div>
          <ul className={menuOpen ? "open" : ""}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/personalmentor" className="nav-link">
                Personal Mentor
              </Link>
            </li>
            <li>
              <Link to="/collegepredictor" className="nav-link">
                News
              </Link>
            </li>
            <li>
              <Link to="/compare-colleges" className="nav-link">
                Compare Colleges
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
               Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            <li>
              <button  className=" button">
              <Link to="/collegepredictor" className="buttonlnk">
                College Predictor
              </Link>
             
              </button>
            </li>
          </ul>
        </div>
        <button className="menubutton" onClick={Cross}>
        <span className="glyphicon glyphicon-menu-hamburger"></span>
        <FontAwesomeIcon icon={faBars} style={{ color: 'green' }} /> 
        
        </button>
      </div>
    </div>
  );
}
