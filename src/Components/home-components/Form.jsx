import React from 'react'
import { useState } from "react";
import './Form.css'

function Form() {
    const [jeeRank, setJeeRank] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [name, setName] = useState('');

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
                    type="email"
                    className="email-input"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    className="rank-input"
                    placeholder="Enter your JEE rank"
                    value={jeeRank}
                    onChange={(e) => setJeeRank(e.target.value)}
                />
                <input
                    type="tel"
                    className="mobile-input"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />


                <input
                    placeholder='Preferred state'
                    type="text"
                    className="mobile-input"
                    name="state"
                    id="state"
                />

                <select className="select">
                    <option value="" disabled selected hidden>Select a category</option>
                    <option value="option1">General</option>
                    <option value="option2">General Ews</option>
                    <option value="option3">OBC</option>
                    <option value="option4">SC/ST</option>
                    <option value="option5">Others</option>
                </select>

                <input className='Submitbtn' type="submit" />
            </div>
        </form>
    )
}

export default Form