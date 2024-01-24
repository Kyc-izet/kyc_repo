// import React from 'react'
// import { useState } from "react";
// import './Form.css'

// function Form() {
//     const [jeeRank, setJeeRank] = useState('');
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [name, setName] = useState('');
//     const [number, setNumber] = useState('');
//     const [edu, setEdu] = useState('');
//     const [college, setCollege] = useState('');
//     const [tech, setTech] = useState('');

//     const handleSubmit = () => {
//         // You can handle form submission here, e.g., send data to an API
//         console.log('JEE Rank:', jeeRank);
//         console.log('Email:', email);
//         console.log('Mobile:', mobile);
//     };

//     return (
//         <form onSubmit={handleSubmit} className='Aform'>
//             <div className="form">
//                 <input
//                     placeholder='Full Name'
//                     type="text"
//                     name="username"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                     placeholder='Contact No.'
//                     type="number"
//                     name="mobno."
//                     value={number}
//                     onChange={(e) => setNumber(e.target.value)}
//                 />
//                 <input
//                     type="email"
//                     className="email-input"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     className="Educational"
//                     placeholder="Educational Qualification"
//                     value={edu}
//                     onChange={(e) => setEdu(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     className="college"
//                     placeholder="College Name"
//                     value={college}
//                     onChange={(e) => setCollege(e.target.value)}
//                     />


//                 <input
//                     placeholder='Tech Stack you worked on'
//                     type="text"
//                     className="tech"
//                     name="tech"
//                     value={tech}
//                     onChange={(e) => setTech(e.target.value)}
//                 />
//                 <input
//                     placeholder='LinkedIn'
//                     type="text"
//                     className="linkedin"
//                     name="linkedin"
//                 />
//                 <input
//                     placeholder='Project Link'
//                     type="text"
//                     className="project"
//                     name="project"
//                 />
//                 <h4>Enter your CV<input type="file" name="cv" id="cv"/></h4>
//                 <input className='Submitbtn' type="submit" />
//             </div>
//         </form>
//     )
// }

// export default Form

import React, { useState } from 'react';
import './joinForm.css'
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        education: '',
        college: '',
        techStack: '',
        linkedIn: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, resume: file });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            resume: null,
            education: '',
            college: '',
            techStack: '',
            linkedIn: '',
        });
    };

    return (
        <div className='bg-color'>
            <p>Internship Recruitment Form</p>
            <form onSubmit={handleSubmit} className='form-container'>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone:
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Resume/CV:
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Educational Background:
                        <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        College Name:
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Technology you work on:
                        <input
                            type="text"
                            name="techStack"
                            value={formData.techStack}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        LinkedIn Profile:
                        <input
                            type="text"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;