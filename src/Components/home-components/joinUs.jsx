import React from 'react'
import css from './join.module.css'
import img1 from './img/Web_Developer-removebg-preview 1.png'
import img2 from './img/image 14.png'
import img3 from './img/image 18.png'
import img4 from './img/video-editing-service-removebg-preview 1.png'
import img5 from './img/marketing-removebg-preview 1.png'
import img6 from './img/image 16.png'
import img7 from './img/image 20.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

function joinUs() {
    return (
        <div className="page">
            <div className={css.items}>
                <div className={css.title}>
                    <h1>Join Us As</h1>
                </div>
                <div className={css.flex}>
                    <div className={css.card}>
                        <img src={img1} alt="" />
                        <span>Developer</span>
                        <p>Proficient in web development, Work experience on both front-end and back-end using the MERN stack (MongoDB, Express.js, React.js, Node.js), incorporating OOPS and DSA principles.</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>
                    </div>
                    <div className={css.card}>
                        <img src={img2} alt="" />
                        <span>Graphics Designer</span>
                        <p>Proficient in UI/UX design with expertise in Figma, Canva, and documentation. Skilled in logo design, branding, and image editing, creating visually appealing and effective graphics for enhanced visual communication.</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>

                    </div>
                    <div className={css.card}>
                        <img src={img3} alt="" />
                        <span>AI\ML</span>
                        <p>Hands-on experience with popular machine learning libraries, such as TensorFlow, Sklearn, matplotlib, numpy ,pandas. Worked on NLP, Gen AI, LLM, or chatbot development.</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>

                    </div>
                    <div className={css.card}>
                        <img src={img4} alt="" />
                        <span>Video Editor</span>
                        <p>Enhance video content with captivating visual effects, graphics, and animations. Utilize advanced video editing tools like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve for superior video quality</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>

                    </div>
                    <div className={css.card}>
                        <img src={img5} alt="" />
                        <span>Marketing</span>
                        <p>Lead the development and monitoring of promotional advertisements. Employ SEO, SMM tools, Google Analytics for effective online marketing and digital campaigns, specializing in lead generation</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>

                    </div>
                    <div className={css.card}>
                        <img src={img6} alt="" />
                        <span>content Writer</span>
                        <p>Expertise in creating engaging content for websites, blogs, social media, and marketing materials. Also skilled in data management—cleaning, transforming, and analyzing datasets to support business objectives</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>
                    </div>
                    <div className={css.card}>
                        <img src={img7} alt="" />
                        <span>Campus Ambassador</span>
                        <p>The interactive guy captivates audiences with clear, concise communication, staying aware of their college community for engaging and impactful interactions</p>
                        <Link to='/hiring'><button className={css.btn}>APPLY NOW !!</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default joinUs