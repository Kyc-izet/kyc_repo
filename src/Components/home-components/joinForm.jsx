import React from 'react'
import { useState } from "react";
import './Form.css'

function Form() {
    const [jeeRank, setJeeRank] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [edu, setEdu] = useState('');
    const [college, setCollege] = useState('');
    const [tech, setTech] = useState('');

    const handleSubmit = () => {
        // You can handle form submission here, e.g., send data to an API
        console.log('JEE Rank:', jeeRank);
        console.log('Email:', email);
        console.log('Mobile:', mobile);
    };

    return (
        <form onSubmit={handleSubmit} className='Aform'>
            <div className="form">
                <input
                    placeholder='Full Name'
                    type="text"
                    name="username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    placeholder='Contact No.'
                    type="number"
                    name="mobno."
                    value={number}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    className="email-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="Educational"
                    placeholder="Educational Qualification"
                    value={edu}
                    onChange={(e) => setJeeRank(e.target.value)}
                />
                <input
                    type="text"
                    className="college"
                    placeholder="College Name"
                    value={college}
                    onChange={(e) => setMobile(e.target.value)}
                    />


                <input
                    placeholder='Tech Stack you worked on'
                    type="text"
                    className="tech"
                    name="tech"
                    value={tech}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <input
                    placeholder='LinkedIn'
                    type="text"
                    className="linkedin"
                    name="linkedin"
                />
                <input
                    placeholder='Project Link'
                    type="text"
                    className="project"
                    name="project"
                />
                <h4>Enter your CV<input type="file" name="cv" id="cv"/></h4>
                <input className='Submitbtn' type="submit" />
            </div>
        </form>
    )
}

export default Form