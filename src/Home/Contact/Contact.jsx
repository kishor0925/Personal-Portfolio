import React from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaLinkedin,
    FaWhatsapp,
    FaGithub,
} from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import "./Contact.css";

const Contact = () => {
    return (
        <div id="contact">
            <h2 className="text-center mb-5 projects-heading">
                Contact Me
            </h2>
            <div className="contact-container">
                <div className="contact-card">
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Feel free to reach out for collaborations or just a friendly hello 👋
                    </p>

                    <div className="contact-info">
                        <div className="contact-item">
                            <FaPhone className="contact-icon" />
                            <span>+91 9952210356</span>
                        </div>

                        <div className="contact-item">
                            <FaEnvelope className="contact-icon" />
                            <span>imkishor172@gmail.com</span>
                        </div>

                        <div className="contact-item">
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>Kavundampalayam, Coimbatore - 641030</span>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/kishor25/" className="social-btn">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/" className="social-btn">
                            <CiInstagram />
                        </a>
                        <a href="https://wa.me/919952210356?text=Hello%20Kishor,%20I%20would%20like%20to%20connect%20with%20you." className="social-btn">
                            <FaWhatsapp />
                        </a>
                        <a href="https://github.com/kishor0925" className="social-btn">
                            <FaGithub />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Contact;
