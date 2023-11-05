import React from 'react'
import css from '../home-components/updates.css'
import image from '../home-components/kyc.png'
export default function Home() {
  return (
    <div>
      <div className="container flex col gap left-align">
        <div className="heading">
          <h1>LATEST UPDATES &amp; INFORMATIONS</h1>
        </div>
        <div className="middle flex">
          {/* <div className="section1 flex col gap">
            <div className="exam-updates gray text-design">Exam Updates</div>
            <div className="result-updates gray text-design">Result Updates</div>
          </div>
          <div className="section2 flex col gap">
            <div className="circulars gray text-design">Circulars</div>
            <div className="counselling gray text-design">Counselling or Admission Updates </div>
          </div> */}
          <div className="news">
            <ul>
              <li><a target='_blank' href="https://aktu.ac.in/circulars.html">AKTU CIRCULARS</a></li>
              {/* <li><a target='_blank' href="https://ctpc.aktu.ac.in/">CENTRAL TRAINING AND PLACEMENT CELL</a></li> */}
              <li><a target='_blank' href="https://uptac.admissions.nic.in/">UPTAC ADMISSION</a></li>
              <li><a target='_blank' href="https://josaa.nic.in/or-cr/">JOSAA CUT OFF</a></li>
              <li><a target='_blank' href="https://josaa.nic.in/news-event/">JOSAA NEWS & UPDATES</a></li>
              <li><a target='_blank' href="https://mcc.nic.in/news-events-ug-medical/">MEDICAL COUNSELLING COMMITTEE</a></li>
              <li><a target='_blank' href="https://ntaresults.nic.in/NTARESULTS_CMS/Page/Page?PageId=7&LangId=P">NTA PREVIOUS YEAR RESULTS</a></li>
            </ul>
          </div>
          <div className="section3">
            <img src={image} />
          </div>
        </div>
      </div>

    </div>
  )
}
