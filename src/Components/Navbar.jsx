import React, { useState } from 'react';
import '../Components/Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import image from '../Components/kyc.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [icon, setIcon] = useState("menu");

  const Cross = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
    menuOpen ? setIcon("x") : setIcon("menu");
  };

  return (
    <div>
      <div className="nav">
        <Link to="/" className="logo"><img src={image} /></Link>
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
            <Link to='/collegepredictor' className="nav-link">
            College Predictor
            </Link>
          </li>
          <li>
            <a href='/#news' className="nav-link">
              News
            </a>
          </li>
          <li>
            <Link to="/Launchingsoon" className="nav-link">
              Compare Colleges
            </Link>
          </li>
          <li>
            <a href="https://wa.me/message/37PSY2CRRSIJE1" className="nav-link">
              Contact Us
            </a>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li>
            <button className="button">
              <Link to="/community" className="buttonlnk">
                Community
              </Link>
            </button>
          </li>
        </ul>
        <button className="menubutton" onClick={Cross}>
          <FontAwesomeIcon icon={faBars} style={{ color: 'green' }} />
          <box-icon className="menu-icon" name={icon} color="white" size="md"></box-icon>
        </button>
      </div>
    </div>
  );
}
