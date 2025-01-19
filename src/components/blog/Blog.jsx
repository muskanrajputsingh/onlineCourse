import React from 'react';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Blog = () => {
  useEffect(()=>{
      AOS.init({duration:1800})
  })
  return (
    <>
    <div className="head-blog" data-aos="fade-right">
        <h3> More Courses</h3>
    </div>
    <div className="blog-box" data-aos="fade-left">
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: 'url(https://images.pexels.com/photos/5905954/pexels-photo-5905954.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)' }}></div>
          <ul className="details">
            <li className="author"><a href="#">Nikita Rao</a></li>
            <li className="date">Aug. 24, 2024</li>
            <li className="tags">
              <ul>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">HTML</a></li>
                <li><a href="#">CSS</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h4>Learning to Code</h4>
          <h2>Opening a door to the future</h2>
          <p> Get professional-level training and earn a credential recognized by leading companies.</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4144224/pexels-photo-4144224.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)' }}></div>
          <ul className="details">
            <li className="author"><a href="#">Priyanshu dev</a></li>
            <li className="date">July. 15, 2023</li>
            <li className="tags">
              <ul>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">JavaScript</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h4>Mastering the Language</h4>
          <h2>Java is not the same as JavaScript</h2>
          <p>Get professional-level training and earn a credential recognized by leading companies.</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6326370/pexels-photo-6326370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}></div>
          <ul className="details">
            <li className="author"><a href="#">Aliena Saxsena</a></li>
            <li className="date">Aug. 24, 2024</li>
            <li className="tags">
              <ul>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">Java</a></li>
                <li><a href="#">Python</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h4>Coding</h4>
          <h2>Opening a door to the future</h2>
          <p> Get professional-level training and earn a credential recognized by leading companies.</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6267088/pexels-photo-6267088.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load)' }}></div>
          <ul className="details">
            <li className="author"><a href="#">Alex dev</a></li>
            <li className="date">July. 15, 2034</li>
            <li className="tags">
              <ul>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Code</a></li>
                <li><a href="#">React Js</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="description">
          <h4>Logics Building</h4>
          <h2>Java is not the same as JavaScript</h2>
          <p>Get professional-level training and earn a credential recognized by leading companies.</p>
          <p className="read-more">
            <a href="#">Read More</a>
          </p>
        </div>
      </div>

      </div>

      <section class="css-ab56au" data-aos="fade-right">
        <div class="cds-9 css-0 cds-10 cds-11 cds-grid-item cds-22 cds-31 cds-56">
          <div class="cds-9 css-8powo5 cds-11 cds-grid-item">
      <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/51y3a8YEIvgFTS2qrYNB7s/f806d317ff47487a3d9a2704f4ab9296/iStock-1130519249__1__1.jpg?auto=format%2Ccompress&amp;dpr=1" srcset="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/51y3a8YEIvgFTS2qrYNB7s/f806d317ff47487a3d9a2704f4ab9296/iStock-1130519249__1__1.jpg?auto=format%2Ccompress&amp;dpr=22x,https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/51y3a8YEIvgFTS2qrYNB7s/f806d317ff47487a3d9a2704f4ab9296/iStock-1130519249__1__1.jpg?auto=format%2Ccompress&amp;dpr=3 3x" alt="" /></div>
      <div class="cds-9 css-3pw59v cds-10 cds-11 cds-grid-item">
        <div class="cds-9 css-0 cds-11 cds-grid-item">
          <p class="css-6ecy9b">Finished a Professional Certificate?</p>
          <h2 class="cds-119 cds-Typography-base css-5ni5yw cds-121">Get resources and support to guide you through the job search process.</h2>
          </div>
          <div class="cds-9 css-0 cds-11 cds-grid-item">
            <div class="css-1ja06kn">
              <div class="rc-Markdown styled"><h3 id="showcase-your-skills">Showcase your skills</h3><p>Present real-world projects to potential employers.</p><h3 id="enhance-your-resume">Enhance your resume</h3>
              <p>Get support to build a standout resume and LinkedIn profile.</p>
              <h3 id="ace-your-interview">Ace your interview</h3><p>Practice and improve your interview skills with virtual feedback.</p></div>
              </div></div></div></div>
        </section>
      
    </>
  );
}

export default Blog;
