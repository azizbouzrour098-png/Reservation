import React, { useState } from "react";
import './Projet.css';
import { Link } from "react-router-dom";

export default function SignApp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", formData);
    alert("Thank you your account is connected");
  };

  return (
    <div className='sign-container'>
      <h1 className='titre2'>Sign Up <span>aziZ Cars</span></h1>
      <p>Create your account to start using our platform.</p>

      <form className='sign-form' onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          name="name"
          placeholder="Entrez your name please..." 
          value={formData.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input 
          type="email" 
          name="email"
          placeholder="Enter your email please..." 
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input 
          type="password" 
          name="password"
          placeholder="Enter your password please..." 
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" className='btn-submit'>Sign Up</button>
      </form>

      <p className='login-link'>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
}
