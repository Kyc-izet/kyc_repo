import React, { useState } from 'react';
import './aktuform.css';

export function Desktop() {
  const [jeeRank, setJeeRank] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = () => {
    // You can handle form submission here, e.g., send data to an API
    console.log('JEE Rank:', jeeRank);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
  };

  return (
    <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="frame2">
          <div className="uptac-aktu">UPTAC/AKTU</div>
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="jee-rank">JEE RANK</div>
              <div className="div2">
                <input
                  type="text"
                  className="rank-input"
                  placeholder="Enter your JEE rank"
                  value={jeeRank}
                  onChange={(e) => setJeeRank(e.target.value)}
                />
              </div>
              <div className="email-id">EMAIL ID</div>
              <div className="rectangle-2">
                <input
                  type="email"
                  className="email-input"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mobile-no">MOBILE NO.</div>
              <div className="rectangle-3">
                <input
                  type="tel"
                  className="mobile-input"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="text-wrapper-4" onClick={handleSubmit}>
                SUBMIT
              </div>
            </div>
          </div>
          <div className="frame-8">
            <p className="category">
              <span className="text-wrapper-20">CATEGORY</span>
            </p>
            <div className="rectangle-6">
              <select className="rectangle-6-select">
                <option value="" disabled selected hidden>Select a category</option>
                <option value="option1">General</option>
                <option value="option2">General Ews</option>
                <option value="option3">OBC</option>
                <option value="option4">SC/ST</option>
                <option value="option5">Others</option>
              </select>
            </div>
          </div>
          <div className="preferred-state">PREFERRED STATE</div>
          <div className="rectangle-7">
              <input type="text" className="mobile-input" name="state" id="state" placeholder='Preferred state' />
          </div>

          <div className="text-wrapper-9">FULL NAME</div>
          <div className="text-wrapper-10">
            <input
              type="text"
              className="text-wrapper-10-input"
              placeholder="Enter your full name"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Desktop;
