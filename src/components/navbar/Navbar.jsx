import React from 'react';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <header>
        <div className="nav-one">
        <div class="logo-container">
                <img class="logo" src="https://cdn01.alison-static.net/public/html/site/img/header/alison-free-courses.svg" alt="Logo" />
        </div>

      <div className="reg-btn">
        <Link to="/login"><button id='login'>Login</button></Link>
        <Link to="/register"><button id='reg'>Sign Up</button></Link>
      </div>

    </div>
    <div class="nav-wrapper">
            <div className="search-bar-container">
                <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." className="search-input" />
        </div>
            <nav>
                <input class="hidden" type="checkbox" id="menuToggle" />
                <label class="menu-btn" for="menuToggle">
                    <div class="menu"></div>
                    <div class="menu"></div>
                    <div class="menu"></div>
                </label>
                <div class="nav-container">
                    <ul class="nav-tabs">
                       <li class="nav-tab"> <Link to="/">Home</Link></li>
                       <li class="nav-tab"> <Link to="/course">Courses</Link></li>
                       <li class="nav-tab"> <Link to="/contact">Contact</Link></li>
                        <li class="nav-tab">Services</li>
                        <li class="nav-tab">Careers</li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar
