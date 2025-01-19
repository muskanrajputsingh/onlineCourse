import React from 'react';
import './Webinar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Webinar = () => {
  useEffect(()=>{
      AOS.init({duration:1800})
  })
  return (
    <div className="webinar-box" data-aos="fade-right">
        <h3>Achived Certificates</h3>
      <div className="webinar-grid">
        <a href="#" className="link-block">
          <div className="jumbotron">
            <div className="webinar-image-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ZhFDt0mTV0uVsFk3KHrb3pDjRZpepO7TcA&s" alt="Webinar 1" />
            </div>
            <div className="webinar-content-box">
                <p>Alison offers an Online Certification Program. The perfect solution for busy professionals who need to balance work and career building.</p>
              <span className="dundas-blue-link">Get Certificate &gt;</span>
            </div>
          </div>
        </a>

        <a href="#" className="link-block">
          <div className="jumbotron">
            <div className="webinar-image-container">
              <img src="https://d502jbuhuh9wk.cloudfront.net/articles/64b7b98ae4b021efeeba4965/rA9XCcertificate.png" alt="Webinar 2" />
            </div>
            <div className="webinar-content-box">
            <p>Alison offers an Online Certification Program. The perfect solution for busy professionals who need to balance work and career building.</p>
              <span className="dundas-blue-link">Get Certificate &gt;</span>
            </div>
          </div>
        </a>

        <a href="#" className="link-block">
          <div className="jumbotron">
            <div className="webinar-image-container">
              <img src="https://digitaldefynd.com/wp-content/uploads/2021/08/Digital-Defynd-Prime-Certificate.webp" alt="Webinar 3" />
            </div>
            <div className="webinar-content-box">
            <p>Alison offers an Online Certification Program. The perfect solution for busy professionals who need to balance work and career building.</p>
              <span className="dundas-blue-link">Get Certificate &gt;</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Webinar;
