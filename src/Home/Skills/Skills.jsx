import React, { useState } from 'react'
import { FaHtml5 , FaFigma, FaCss3Alt , FaJs, FaBootstrap, FaReact, FaGithub, FaJava } from "react-icons/fa";
import { DiMongodb, DiVisualstudio, DiEclipse } from "react-icons/di";
import { IoGitMergeOutline } from "react-icons/io5";
import { SiCisco, SiRedux } from "react-icons/si";
import {motion} from 'framer-motion'
import './Skills.css'
const Skills = () => {

    const [activeTab, setActiveTab] = useState("skills");

    const skills = [
        <FaHtml5 size={60}  style={{fill: "#E34F26",backgroundColor : " #111827"}}/>,
        <FaCss3Alt size={60} style={{fill : "#1572B6",backgroundColor : " #111827"}}  />,
        <FaJs size={60}style={{fill : "#F7DF1E",backgroundColor : " #111827"}}  />,
        <FaBootstrap size={60}style={{fill : "#7952B3",backgroundColor : " #111827"}}  />,
        <FaReact size={60}style={{fill : "#61DAFB",backgroundColor : " #111827"}}  />,
        <SiRedux size={60}style={{fill : "#764ABC",backgroundColor : " #111827"}}  />,
        <FaJava size={60}style={{fill : "#007396",backgroundColor : " #111827"}}  />,
        <DiMongodb size={60}style={{fill : "#47A248",backgroundColor : " #111827"}}  />
    ];

    const tools = [
        <FaFigma size={60}style={{fill : "#3ef21e",backgroundColor : " #111827"}}  />,
        <DiEclipse size={60}style={{fill : "#2C2255",backgroundColor : " #111827"}}  />,
        <DiVisualstudio size={60}style={{fill : "#5C2D91",backgroundColor : " #111827"}}  />,
        <FaGithub size={60}style={{fill : "#ffffff",backgroundColor : " #111827"}}  />,
        <SiCisco size={60}style={{fill : "#1BA0D7",backgroundColor : " #111827"}}  />,
        <IoGitMergeOutline size={60}style={{fill : "orange",backgroundColor : " #111827"}}  />
    ];

    const currentItems = activeTab === "skills" ? skills : tools;

    return (
        <div className='skills-section'>
            <h2 className='text-center mb-4 skills-heading'>Skills</h2>
            <div className='toggle-wrapper'>
                <button
                    className={activeTab === "skills" ? "active" : ""}
                    onClick={() => setActiveTab("skills")}
                >
                    Skills
                </button>
                <button
                    className={activeTab === "tools" ? "active" : ""}
                    onClick={() => setActiveTab("tools")}
                >
                    Tools
                </button>
            </div>
            <div className='skills-grid'>
                {currentItems.map((item, index) => (
                    <motion.div  
                    className='skill-card' 
                    key={index}
                    whileHover={{ scale : 0.9}}
                    style={{cursor:'pointer'}}
                    >
                        {item}
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default Skills;
