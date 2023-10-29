import React from 'react'
import './Collegepredictor.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Collegepredictor() {
  return (
    <div className='choice_7'>
      <div className="heading_7">
        <h1>PREDICT <span >YOUR COLLEGE</span> ACCORDING TO YOUR RANK</h1>
      </div>
      {/*<div className="section_7 flex_7 col_7">
        <div className="type col_7">
          <h1>SELECT YOUR <span className="span_7">COUNSELLING</span> TYPE</h1>
          <button className="aktu">
            <Link to="/Launchingsoon" className="nav-link">
              UPTAC/AKTU
            </Link></button>
          <button className="aktu">
            <Link to="/Launchingsoon" className="nav-link">
              JOSSA(JEE MAINS)
            </Link></button>
          <button className="aktu">
            <Link to="/Launchingsoon" className="nav-link">
              JOSSA(JEE ADVANCE)
            </Link></button>
        </div>
      </div> */}

      <div className="aContainer">
        <div className="aBox">
          <h1>SELECT YOUR <span className="span_7">COUNSELLING</span> TYPE</h1>
          <div className="aBtn">
            <Link to="/Launchingsoon" className="aLink">
              UPTAC/AKTU
            </Link>
            <Link to="/Launchingsoon" className="aLink">
            JOSSA(JEE MAINS)
            </Link>
            <Link to="/Launchingsoon" className="aLink">
            JOSSA(JEE ADVANCE)
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}