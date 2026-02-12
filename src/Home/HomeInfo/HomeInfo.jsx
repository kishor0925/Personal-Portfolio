import React from 'react'
import '../HomeInfo/HomeInfo.css'
import { motion } from "framer-motion";
import {FaLinkedinIn,FaGithub,FaReact,FaPalette} from "react-icons/fa";
import myimg from './Images/myimg2.png'

const HomeInfo = () => {

    const text = "FrontEnd Developer [React]";

    const letterVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.05 }
        }
        
    };

    const containerVariants = {
        hidden: { opacity: 0,},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    return (
        <motion.div
            className='container'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className='row homeinfo d-flex justify-content-center align-items-center'>

                <motion.div
                    className='col-12 col-md-6 homeinfocol'
                    variants={itemVariants}
                >
                    <motion.h2 className='Home-subheading' variants={itemVariants}>
                        welcome to my world
                    </motion.h2>

                    <motion.h1
                        className='Home-heading'
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.05 }}
                    >
                        Hi I'm{" "}
                        <span style={{ color: 'tomato', textTransform: 'uppercase' }}>
                            Kishor M
                        </span>
                        <br />

                        {text.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>


                    <motion.p className='Home-para' variants={itemVariants}>
                        I am a passionate <span style={{ color: 'tomato', textTransform: 'uppercase' }}> Frontend Developer </span>
                        specializing in React building responsive and user-friendly web applications with modern technologies
                    </motion.p>

                    <motion.div className="row mt-4" variants={itemVariants}>
                        <div className="col-12 col-md-6">
                            <h3 className="Home-subheading">Find Me On</h3>
                            <motion.a whileHover={{ scale: 1.2, rotate : 10 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/" className="btn btn-outline-info m-2">
                                <FaLinkedinIn />
                            </motion.a>

                            <motion.a whileHover={{ scale: 1.2 , rotate : 10}} whileTap={{ scale: 0.9 }} href="" className="btn btn-outline-info m-2">
                                <FaGithub />
                            </motion.a>
                        </div>

                        <div className="col-12 col-md-6">
                            <h3 className="Home-subheading">What I Focus On</h3>

                            {[FaPalette, FaReact].map((Icon, index) => (
                                <motion.a
                                    key={index}
                                    whileHover={{ rotate: 10, scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    href=""
                                    className="btn btn-outline-info m-2"
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className='col-12 col-md-6 homeinfocol'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.img
                        src={myimg}
                        className='myimg'
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 50 }}
                    />
                </motion.div>

            </div>
        </motion.div>
    )
}

export default HomeInfo
