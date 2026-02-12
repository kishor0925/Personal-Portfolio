import React from 'react'
import Navbar from './Home/Navbar/Navbar'
import HomeInfo from './Home/HomeInfo/HomeInfo.jsx'
import Skills from './Home/Skills/Skills.jsx'
import InternshipPage from './Home/Intership/Internship.jsx'
import Projects from './Home/Projects/Project.jsx'
const Home = () => {
  return (
    <>
    <Navbar/>
    <HomeInfo/>
    <Skills/>
    <InternshipPage/>
    <Projects/>
    </>
  )
}

export default Home