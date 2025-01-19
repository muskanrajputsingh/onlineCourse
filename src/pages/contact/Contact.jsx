import React from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Contact = () => {
useEffect(()=>{
    AOS.init({duration:1800})
  })

  return (
    <section className="get-in-touch" data-aos="zoom-in">
      <h1 className="title">Get in touch</h1>
      <form className="contact-form row">
        <div className="form-field col x-50">
          <input id="name" className="input-text js-input" type="text" required />
          <label className="label" htmlFor="name">Name</label>
        </div>
        <div className="form-field col x-50">
          <input id="email" className="input-text js-input" type="email" required />
          <label className="label" htmlFor="email">E-mail</label>
        </div>
        <div className="form-field col x-100">
          <input id="message" className="input-text js-input" type="text" required />
          <label className="label" htmlFor="message">Message</label>
        </div>
        <div className="form-field col x-100 align-center">
          <input className="submit-btn" type="submit" value="Submit" />
        </div>
      </form>
      <p className="note">
        Call on <a className="link" href="http://onlineCourse.digital/Alison/contacts/" target="_blank" rel="noopener noreferrer">Alison Online Courses</a>.
      </p>
    </section>
  );
};

export default Contact;
