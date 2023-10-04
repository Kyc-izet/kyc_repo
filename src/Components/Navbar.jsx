import React, { useState } from 'react';
import '../Components/Nav.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
              <Link to="/Launchingsoon" className="nav-link">
                Compare Colleges
              </Link>
            </li>
            <li>
              <a  href="https://chat.whatsapp.com/EChVLh6kWxO8RWAJp13VP1" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            <li>
              <button className="button">
                <Link to="/collegepredictor" className="buttonlnk">
                  College Predictor
                </Link>
              </button>
            </li>
          </ul>
        </div>
        <button className="menubutton" onClick={Cross}>
          <FontAwesomeIcon icon={faBars} style={{ color: 'green' }} />
          <box-icon className="menu-icon" name={icon} color="white" size="md"></box-icon>
        </button>
      </div>
    </div>
  );
}
