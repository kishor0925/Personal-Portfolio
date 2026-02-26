import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navs fixed-top">
      <div className="container">

        {/* Left - Brand */}
        <a className="navbar-brand brand" href="#">
          KISHOR
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* Center - Nav Links */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <a className="nav-link navlinks" href="#home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navlinks" href="#education">EDUCATION</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navlinks" href="#skills">SKILLS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navlinks" href="#internship">INTERNSHIP</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navlinks" href="#project">PROJECT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link navlinks" href="#contact">CONTACT</a>
            </li>
          </ul>

          {/* Right - Resume Button */}
          <div className="d-flex">
            <a
              href="/Kishor_M_React_Frontend_Developer_Resume"
              download
              className="btn btn-info resume-btn"
            >
              DOWNLOAD RESUME
            </a>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
