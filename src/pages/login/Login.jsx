import React from 'react';
import './Login.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Registration = () => {
useEffect(()=>{
      AOS.init({duration:1800})
  })
  return (
    <div className="reg-container" data-aos="fade-right">
      <div className="form-wrapper">
        <div className="info-section">
          <h2>Join the Alison</h2>
          <p>Step into a universe of endless possibilities.</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3449/3449607.png"
            alt="Space Mission Icon"
            className="info-image"
          />
        </div>
        <form className="registration-form">
          <h2>Login Here</h2>
          <div className="form-field">
            <label htmlFor="fullname">Username</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              required
            />
          </div>
      
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
