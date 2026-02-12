import React, { useState } from "react";
import kmart from "./Images/kmart.png";
import rmp from "./Images/retromenspoint.png";
import food from "./Images/food.png";
import travel from "./Images/travel.png";
import portfolio from './Images/portfolio.png'
import { FaHtml5 , FaFigma, FaCss3Alt , FaJs, FaBootstrap, FaReact, FaGithub, FaJava } from "react-icons/fa";
import { LuFramer } from "react-icons/lu";

import { DiMongodb, DiVisualstudio, DiEclipse } from "react-icons/di";
import { IoGitMergeOutline } from "react-icons/io5";
import { SiCisco, SiRedux } from "react-icons/si";
import "./Project.css";

const Projects = () => {

  const projectsData = [
    {
      id: 1,
      category: "Web",
      img: kmart,
      title: "K-Mart E-Commerce",
      techstack : [FaHtml5, FaCss3Alt, FaJs,FaBootstrap],
      description:
        "Responsive e-commerce website with cart system, product filtering, and authentication.",
      github: "https://github.com/yourusername/kmart",
      live: "https://kmart-demo.netlify.app"
    },
    {
      id: 2,
      category: "Web",
      img: rmp,
      title: "Retro Men's Point",
       techstack : [FaReact, FaCss3Alt,FaJs ,FaBootstrap, LuFramer],
      description:
        "Modern fashion store website built using React and Bootstrap.",
      github: "https://github.com/yourusername/retromenspoint",
      live: "https://retromenspoint.netlify.app"
    },
    {
      id: 5,
      category: "Web",
      img: portfolio, 
      title: "Personal Portfolio Website",
      techstack : [FaReact, FaCss3Alt,FaJs ,FaBootstrap, LuFramer],
      description:
        "Modern and fully responsive developer portfolio built using React and Bootstrap",
      github: "https://github.com/arunkumar-dev/portfolio-website",
      live: "https://arunkumar-portfolio.netlify.app"
    },
    {
      id: 3,
      category: "UI/UX",
      img: food,
      title: "Food Delivery App UI",
      description:
        "Clean and modern mobile food delivery UI designed in Figma.",

    },
    {
      id: 4,
      category: "UI/UX",
      img: travel,
      title: "Travel Dashboard UI",
      description:
        "Admin dashboard UI with analytics, charts, and modern layout.",
    }
  ];

  const [activeTab, setActiveTab] = useState("Web");

  const currentItems = projectsData.filter(
    (project) => project.category === activeTab
  );

  return (
    <section className="projects-section py-5" id="projects">
      <h2 className="text-center mb-5 projects-heading">
        My Projects
      </h2>
      <div className="toggle-wrapper text-center mb-5">
        <button
          className={activeTab === "Web" ? "active" : ""}
          onClick={() => setActiveTab("Web")}
        >
          Web
        </button>

        <button
          className={activeTab === "UI/UX" ? "active" : ""}
          onClick={() => setActiveTab("UI/UX")}
        >
          UI/UX
        </button>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {currentItems.map((project) => (
            <div
              className="col-12 col-md-6 col-lg-4 mb-4"
              key={project.id}
            >
              <div className="project-card">
                <img
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />

                <div className="project-body">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>

                  <p className="techstack">{project.category == "Web" && `tech stack`}</p>
                  {project.category == "Web"&&  project.techstack.map( (Icon, index) => (
                    <Icon
                    key={index}
                    size={28}
                    className="tech-icon m-1"
                    style={{ fill: "#0095ff" }}
                    />
                  ))

                  }
                  
                  {project.category == "Web" && <div className="project-buttons">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info p-2 "
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info p-2 "
                    >
                      Live Demo
                    </a>
                  </div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
