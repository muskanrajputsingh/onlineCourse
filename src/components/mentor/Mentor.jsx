import React from 'react';
import './mentor.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Mentor = () => {
  useEffect(()=>{
      AOS.init({duration:1800})
    })
  return (
    <>
    <div className="mentor-box" data-aos="fade-left">
      <div class="container text-center">
      <h1>OUR MENTORS</h1>
      <span>India's Top<i class="zmdi zmdi-favorite red"></i><strong>Faculties</strong> Members<i><a href="http://blog.wingerdstok.com" class="wsk-btn">PhdHolders</a></i></span>
</div>

<div class="shell" data-aos="zoom-in">
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img">
            <img src="https://images.pexels.com/photos/10041258/pexels-photo-10041258.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Product" class="img-responsive"/>
          </div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>IIT | Phd</span>
            </div>
            <div class="title-product">
              <h3>Dr. Niharika Mehta</h3>
            </div>
            <div class="description-prod">
              <p>Description Product tell me how to change playlist height in html5 player.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://images.pexels.com/photos/8353841/pexels-photo-8353841.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Product" class="img-responsive"/></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>IIT | Phd</span>
            </div>
            <div class="title-product">
              <h3>Dr. Rameshwar Das</h3>
            </div>
            <div class="description-prod">
              <p>Description Product tell me how to change playlister. </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://images.pexels.com/photos/7876500/pexels-photo-7876500.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>NIT | Phd</span>
            </div>
            <div class="title-product">
              <h3>Dr. Anshika Pandey</h3>
            </div>
            <div class="description-prod">
              <p>Description Product tell me how html5 player.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="wsk-cp-product">
          <div class="wsk-cp-img"><img src="https://images.pexels.com/photos/7580837/pexels-photo-7580837.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="Product" class="img-responsive" /></div>
          <div class="wsk-cp-text">
            <div class="category">
              <span>IIT | Phd</span>
            </div>
            <div class="title-product">
              <h3>Dr. Kavita Rawat</h3>
            </div>
            <div class="description-prod">
              <p>Description Product tell me how to change playlist.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
   
      </div>
    </div>
  </div>
    </>
  )
}

export default Mentor
