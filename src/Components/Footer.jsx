import React from 'react'
import css from '../Components/footer.css'
import image from '../Components/kyc.png'
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';




export default function footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container_ flex_ spaced-between_ aHide">
          <img className='aImage' src={image} />
          <div className="middle_ flex_ col_">
            <div className="navbar_ flex_">
              <ul className="flex_ col_ left-align_">
                <li>ABOUT</li>
                <li>TERMS OF USE</li>
              </ul>
              <ul className="flex_ col_ left-align_">
                <li>PRIVACY POLICY</li>
                <li>CONTACT US</li>
              </ul>
              <ul className="flex_ col_ left-align_">
                <li>HELPS</li>
                <Link to="/hiring" className="link"><li>CAREER</li></Link>
              </ul>
            </div>
            <div className="line_">
              <hr />
            </div>
          </div>
          <div className="links_ flex_ col_ left-align_ aHide">
            <p>GET OUR</p>
            <p>ASSISTANCES</p>
            <div className="social-icons flex">
              <a target='_blank' href="https://www.linkedin.com/company/know-your-colleges/"><FaLinkedin color='white' fontSize={"2rem"} /></a>
              <a target='_blank' href="https://wa.me/message/37PSY2CRRSIJE1"><FaWhatsapp color='white' fontSize={"2rem"} /></a>
              <a target='_blank' href="https://instagram.com/knowyourcolleges_kyc?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram color='white' fontSize={"2rem"} /></a>
              <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbthsFlCqnjPcBwKRVWnhKNwRPrZfjpfMVcDdRdCKRcqGnpPLmpsRtWPHtghxdVZLWhmxK"><FaEnvelope color='white' fontSize={"2rem"} /></a>
            </div>
          </div>
        </div>

        <div className="aShow">
          <div className="aFoot">
            <ul className="aList">
              <li>ABOUT</li>
              <li>TERMS OF USE</li>
            </ul>
            <ul className="aList">
              <li>PRIVACY POLICY</li>
              <li>CONTACT US</li>
            </ul>
            <ul className="aList">
              <li>HELPS</li>
              <li>FAQS</li>
            </ul>
          </div>
          <hr style={{ backgroundColor: 'white', width: '80%', margin: 'auto' }} />
          <div className="assistance">
            <p style={{ color: 'white' }}>GET OUR <span style={{ color: '#00ED64' }}>ASSISTANCES</span></p>
            <div className=" alinks">
              <a target='_blank' href="https://www.linkedin.com/company/know-your-colleges/"><FaLinkedin color='white' fontSize={"2rem"} /></a>
              <a target='_blank' href="https://wa.me/message/37PSY2CRRSIJE1"><FaWhatsapp color='white' fontSize={"2rem"} /></a>
              <a target='_blank' href="https://instagram.com/knowyourcolleges_kyc?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram color='white' fontSize={"2rem"} /></a>
              <a target='_blank' href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbthsFlCqnjPcBwKRVWnhKNwRPrZfjpfMVcDdRdCKRcqGnpPLmpsRtWPHtghxdVZLWhmxK"><FaEnvelope color='white' fontSize={"2rem"} /></a>
            </div>
          </div>
          <div className="aImage">
            <img className='' src={image} />
            <p>Copyright ©2021-2022 knowyourcolleges.com-All rights reserved</p>
          </div>
        </div>
        {/* <div className="contact-info">
          <p>Copyright ©2021-2022 knowyourcolleges.com-All rights reserved</p>
          <p>Privacy Policy</p>
        </div> */}
      </footer>
    </div>
  )
}