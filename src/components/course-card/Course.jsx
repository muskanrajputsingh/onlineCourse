import React from 'react';
import './course.css' ;
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Course = () => {
	useEffect(()=>{
		AOS.init({duration:1800})
	})
  return (
    <>
    <div className="course-box" data-aos="fade-right">
     
    <div class="product-card">
		<div class="badge">Watch Now</div>
		<div class="product-tumb">
			<Link to="https://www.youtube.com/watch?v=t2_Q2BRzeEE&list=PLGjplNEQ1it8-0CmoljS5yeV-GlKSUEt0">
            <img src="https://i.ytimg.com/vi/t2_Q2BRzeEE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlzc8TqOKwyysYQjmOdr4rDGaqsA" alt="" />
            </Link>
		</div>
		<div class="product-details">
			<h5><a href="">Python Course</a></h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>FREE</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

    <div class="product-card">
		<div class="badge">Watch Now</div>
		<div class="product-tumb">
			<Link to="https://www.youtube.com/watch?v=oOmbSpOzvYg&list=PLdo5W4Nhv31YU5Wx1dopka58teWP9aCee">
            <img src="https://i.ytimg.com/vi/oOmbSpOzvYg/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC1iDVjY56HsicZd_qbEkoJK6nQkQ" alt="" />
            </Link>
		</div>
		<div class="product-details">
			<h5><a href="">C++ full Course</a></h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>FREE</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

    <div class="product-card">
		<div class="badge">Watch Now</div>
		<div class="product-tumb">
			<Link to="https://www.youtube.com/watch?v=ntLJmHOJ0ME&list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q"><img src="https://i.ytimg.com/vi/ntLJmHOJ0ME/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDyFQ0oe6H-Ti29BAon05OD2dTC3Q" alt="" /></Link>
		</div>
		<div class="product-details">
			<h5><a href="">java course</a></h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>FREE</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

    <div class="product-card">
		<div class="badge">Watch Now</div>
		<div class="product-tumb">
			<Link to="https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo"><img src="https://i.ytimg.com/vi/ohIAiuHMKMI/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAIChR2wiie4-gA4tKSUiDHSQhrpg" alt="" /></Link>
		</div>
		<div class="product-details">
			<h5><a href="">Node js course</a></h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>FREE</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

    <div class="product-card">
		<div class="badge">Watch Now</div>
		<div class="product-tumb">
			<Link to="https://www.youtube.com/watch?v=4z9bvgTlxKw&list=PLwGdqUZWnOp1Rab71vx2zMF6qpwGDB2Z1"><img src="https://i.ytimg.com/vi/4z9bvgTlxKw/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCIiznpg-qbjb1iXNmoYTU-a7z17g" alt="" /></Link>
		</div>
		<div class="product-details">
			<h5><a href="">react js</a></h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>FREE</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

    <div class="product-card">
		<div class="badge">Watch Now</div>
		<div class="product-tumb">
			<Link to="https://www.youtube.com/watch?v=ExcRbA7fy_A&list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA">
            <img src="https://i.ytimg.com/vi/ExcRbA7fy_A/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDWNmckUjijUi1v0NXZofU59k1_SA" alt="" />
            </Link>
		</div>
		<div class="product-details">
			<h5><a href="">mongo db</a></h5>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>FREE</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>

    </div>
      
    </>
  )
}

export default Course
