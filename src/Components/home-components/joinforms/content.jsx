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
                        <input className='input'
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
                        <input className='input'
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
                        <input className='input'
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
                        Educational Background:
                        <input className='input'
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
                        <input className='input'
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
                        <input className='input'
                            value={formData.techStack}
                            type="text"
                            name="content"
                            id="content"
                            onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label>
                        LinkedIn Profile:
                        <input className='input'
                            type="text"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Resume/CV:
                        <input className='input'
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
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