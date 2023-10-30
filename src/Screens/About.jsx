import React from "react";
import "./About.css";
import Team from "../Components/Team";
import { Mem } from "./members";
import Footer from "../Components/Footer";

function About() {
  return (
    <div className="lab">
      <p className="heading-works size" style={{ backgroundColor:'rgb(0, 237, 100)',fontWeight: 'bold', fontSize: '1.5rem', padding: '1rem 2rem', width:'max-content', margin:'0 2rem', borderRadius:'1rem'}}>TOP ENGINEERING COLLEGES OF INDIA</p>
      <br></br>
      <div style={{marginBottom:'2rem'}} className="frame">
        <div className="div">
          <div className="bg rectangle" />
          <div className="bg img" />
          <div className="bg rectangle-2" />
          <div className="bg rectangle-3" />
          <div className="bg rectangle-4" />
          <div className="bg rectangle-5" />
          <div className="bg rectangle-6" />
          <div className="bg rectangle-7" />
          <div className="text-wrapper">BITS</div>
          <div className="text-wrapper-2">MIT</div>
          <div className="text-wrapper-3">LNMIIT</div>
          <div className="text-wrapper-4">BMSCE</div>
          <div className="text-wrapper-5">DAIICT</div>
          <div className="text-wrapper-6">THAPAR</div>
          <div className="text-wrapper-7">M.S.EAMAIAH</div>
          <div className="text-wrapper-8">R.V.COLLEGE</div>
        </div>
      </div>

      <p className="heading-works size" style={{ backgroundColor:'rgb(0, 237, 100)',fontWeight: 'bold', fontSize: '1.5rem', padding: '1rem 2rem', width:'max-content', margin:'0 2rem', borderRadius:'1rem'}}>TOP ENGINEERING COLLEGES OF UTTAR PRADESH</p>
      <br></br>
      <div style={{ marginBottom: '3rem' }} className="frame1">
        <div className="div1">
          <div className="bg rectangle1" />
          <div className="bg img1" />
          <div className="bg rectangle-21" />
          <div className="bg rectangle-31" />
          <div className="bg rectangle-41" />
          <div className="bg rectangle-51" />
          <div className="bg rectangle-61" />
          <div className="bg rectangle-71" />
          <div className="text-wrapper1">HBTU</div>
          <div className="text-wrapper-21">JIIT</div>
          <div className="text-wrapper-31">SNU</div>
          <div className="text-wrapper-41">JSS</div>
          <div className="text-wrapper-51">IET</div>
          <div className="text-wrapper-61">BIET</div>
          <div className="text-wrapper-71">KNIT</div>
          <div className="text-wrapper-81">AMITY</div>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>

  )
}

export default About


