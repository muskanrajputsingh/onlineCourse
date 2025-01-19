import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './hero.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hero = () => {
   useEffect(()=>{
    AOS.init({duration:1800})
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,               
        autoplaySpeed:2500,  
        pauseOnHover: false,         
      };
  return (
    <>
   <div className="hero-box1" data-aos="zoom-in">
    <Slider {...settings}>
      <div>
        <img src="https://i.graphicmama.com/blog/wp-content/uploads/2019/04/11142949/online-graphic-design-courses-the-most-comprehensive-guide-11.jpg" alt="" />
      </div>
    <div>
      <img
        src="https://onlinecourse.essinstitute.in/wp-content/uploads/2024/03/DCA-Course-2.jpg"
        alt="Online Courses"
      />
    </div>
    {/* <div>
      <img
        src="https://www.98thpercentile.com/hubfs/Top%20Free%20Online%20Math%20Courses%20to%20Sharpen%20Your%20Skills%20%281%29-2.png"
        alt="Online Courses"
      />
    </div>  */}
     <div>
      <img
        src="https://i.ytimg.com/vi/ZTqTtzskrtg/maxresdefault.jpg"
        alt="Online Courses"
      />
    </div>
    <div>
      <img
        src="https://www.johnacademy.co.uk/wp-content/uploads/2023/01/Are-Online-Courses-Worth-It-in-2023-1.png"
        alt="Online Courses"
      />
    </div>
    <div>
      <img
        src="https://appinfusion.co.uk/wp-content/uploads/2020/04/imgpsh_fullsize_anim-2-2.png"
        alt="Online Courses"
      />
    </div>
  </Slider>
</div>

    </>
  )
}

export default Hero
