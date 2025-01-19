import React from 'react'
import Hero from '../components/Hero/Hero'
import Course from '../components/course-card/Course'
import Mentor from '../components/mentor/Mentor'
import Webinar from '../components/webinar-card/Webinar'
import Blog from '../components/blog/Blog'

const Home = () => {
  return (
    <>
      <Hero />
      <br />
      <Course />
      <Mentor />
      <Webinar />
      <Blog />
    </>
  )
}

export default Home
