import React from 'react'
// import Navbar from './Home/Navbar/Navbar'
import HomeInfo from './Home/HomeInfo/HomeInfo.jsx'
import Skills from './Home/Skills/Skills.jsx'
import InternshipPage from './Home/Intership/Internship.jsx'
import Projects from './Home/Projects/Project.jsx'
import Education from './Home/Education/Education.jsx'
import Contact from './Home/Contact/Contact.jsx'
import Footer from './Home/Footer/Footer.jsx'
import Navbar from './Home/Navbar/Navbar.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeInfo/>
    <Education/>
    <Skills/>
    <InternshipPage/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home