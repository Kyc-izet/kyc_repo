import React from "react";
import "./members.css";

export const Mem = () => {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center', marginTop: '5rem', width:'100vw'}}>Our Teams</h1>
      <div className="centered-names">
        <div className="team-box">
          <div className="heading">Graphics And Designing Team</div>
          <div className="label">
            <p className="names">
              Ananya Srivastava
              <br />
              Riya Arora
              <br />
              Suraj Kumar
              <br />
              Radhika Gupta
              <br />
              Ashad Muneer
              <br />
              Anuj Mishra
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="heading">Development Team</div>
          <div className="label">
            <p className="names">
              Saurabh Srivastava
              <br />
              Aditya Thakur
              <br />
              Yashika Mehndiratt
              <br />
              Aaryan Mishra
              <br />
              Ayush Mishra
            </p>
          </div>
        </div>

        <div className="team-box">
          <div className="heading">Content Team</div>
          <div className="label">
            <p className="names">
              Rishabh Bhajpai
              <br />
              Shreyash Sharma
              <br />
              Aditya Pandey
              <br />
              Ashish Kothari
              <br />
              Ohm Gaud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
