import React from 'react'
import css from '../Components/home.css'
import image from '../Components/image.png'
import image2 from '../Components/image-2.png'
import Updates from '../Components/home-components/Updates'
import { Link } from 'react-router-dom'
import Contactme from '../Screens/contactus'
import About from '../Screens/About'


export default function Home() {
  return (
    <div>
      <div className="container_1">
        <h1 className='hide'>COLLEGE ADMISSION MADE <span className='span_1'>AT EASE</span></h1>
        <div className="section_1 flex_1">
          <div className="content_1 flex_1 col_1 left_align_1">
            <div className="heading_1 flex_1 col_1 left_align_1">
              <h1 className='h_1'>COLLEGE</h1>
              <h1 className='h_1'>ADMISSION</h1>
              <h1 className='h_1'>MADE <span className='span_1'>AT EASE</span></h1>
            </div>
            <div className="info_1">A platform that connects You with Mentors "DIRECTLY" from your dream colleges.Connect and ask every doubt' Get Clarity on your college selections</div>
            <Link to='/personalmentor' className="getstarted">Get Started</Link>
          </div>
          <div className="image_1">
            <img src={image} />
          </div>
        </div>
        <div className="section_3 flex_1">
          <div className="queries flex_1 col_1">
            <div className="hide size">Get set go <span className='span_1'>Your Dream</span> Colleges Are <span className='span_1'>Here </span></div>
            <h1 className='h_2'>Get set go</h1>
            <h1 className='h_2'><span className='span_1'>Your Dream</span></h1>
            <h1 className='h_2'>Colleges Are <span className='span_1'>Here..</span></h1>
            <h1 className='h_2'>Get your<span className='span_1'> queries</span> Resolved</h1>
            <a className='askBtn' href="#contact">Ask Here</a>
          </div>
          <div className="img_2">
            <img src={image2} />
          </div>
        </div>
      </div>
      <About />

      <div id="news">
        <Updates />
      </div>

      <div id="contact">
        <Contactme />
      </div>

    </div>
  )
}
