import React from 'react'
import { FaHtml5, FaFigma, FaCss3Alt, FaNode, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import img2 from './Images/logo1.png'
import img1 from './Images/logo2.png'
import './Intern.css'
import { color } from 'framer-motion';
const Internship = () => {

    const Intern = [
        {
            id: 1,
            role: "Frontend Developer Intern",
            company: "Appin Technologies",
            duration: "Jan 2024 – Apr 2024",
            img: img1,
            description:
                "Worked on building responsive web applications using React and Bootstrap. Improved UI performance and optimized components.",
            technologies: [FaHtml5, FaFigma, FaCss3Alt, FaJs, FaBootstrap],
        },
        {
            id: 2,
            role: "MERN Stack Developer Intern",
            company: "App Innovation Technologies",
            duration: "Dec 2025 – March 2026",
            img: img2,
            description:
                "Developed and maintained company website. Collaborated with backend team and implemented REST APIs.",
            technologies: [FaReact, FaNode, SiExpress, DiMongodb],
        },
    ]

    return (
    <section className="container py-5 text-center" id="internship">
    <h2 className="Intern-heading mb-5">Internships</h2>

    <div className="row" id='row'>
        {Intern.map((list) => (
            <div className="col-12 col-md-6 mb-4" key={list.id}>

                <div className="internship-item p-4 text-center w-100">

                    <div>
                        <img
                            src={list.img}
                            alt={list.company}
                            style={{
                                width: "250px",
                                height: "150px",
                                objectFit: "contain"
                            }}
                        />
                    </div>

                    
                    <p className="mb-1 intern-heading">{list.company}</p>
                    <h5 className="mb-1 intern-subheading">{list.role}</h5>
                    <p className='intern-date'>{list.duration}</p>

                    <p className="px-md-4 intern-para">{list.description}</p>

                    <div className="d-flex justify-content-center gap-4 mt-3">
                        {list.technologies.map((Icon, i) => (
                            <Icon
                                key={i}
                                size={28}
                                className="tech-icon"
                                style={{ fill: "#0095ff" }}
                            />
                        ))}
                    </div>

                </div>

            </div>
        ))}
    </div>
</section>

    )
}

export default Internship
