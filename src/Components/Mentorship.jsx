import React from 'react'
import css from '../Components/mentorship.css'
import img1 from '../Components/mentorship.jpg'
import img2 from '../Components/building.jpg'
import img3 from '../Components/interaction.png'
import img4 from '../Components/update.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Mentorship() {
    return (
        <div className='mentorship flex_4 col_4'>
            <div className="frame">
                <div className="video_conference flex_4 col_4">
                    <img src={img1} />
                    <p>Complete counseling mentorship</p>
                </div>
                <div className="building flex_4 col_4">
                    <img src={img2} />
                    <p>Get Your College</p>
                </div>
                <div className="support flex_4 col_4">
                    <img src={img3} />
                    <p>One on One Support</p>
                </div>
                <div className="updates flex_4 col_4">
                    <img src={img4} />
                    <p>News & Update</p>
                </div>
            </div>
            <div className="benefits flex_4 col_4">
                <h1>BENEFITS OF <span className="span_4">PERSONAL MENTORSHIP</span></h1>
                <ul>
                    <li>Direct mentorship from the mentor of the colleges you re targeting</li>
                    <li>Best college preference list according to your rank</li>
                    <li>Live sessions to resolve your doubts </li>
                    <li>Updates of all the important notices and deadlines of college admissions</li>
                    <li>Most Authentic & Real Life Information of All Colleges. </li>
                </ul>
            </div>
            <div className="enroll_now">
                <Link to="/form"><button>ENROLL NOW</button></Link>
            </div>
        </div>
    )
}
