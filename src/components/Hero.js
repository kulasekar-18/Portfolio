import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
    return ( <
        section className = "hero"
        id = "home" >
        <
        motion.div className = "hero-content"
        initial = {
            { opacity: 0, y: -50 } }
        animate = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 1 } } >
        <
        h1 >
        Hello, I 'm <span className="highlight">M. Kulasekar Reddy</span> <
        /h1> <
        p > A passionate Web Developer(React.js & Frontend) < /p>

        <
        div className = "hero-buttons" >
        <
        a href = "#projects"
        className = "hero-btn" >
        See My Projects <
        /a> <
        a href = "/resume.pdf"
        className = "hero-btn outline"
        download >
        Download Resume <
        /a> <
        /div> <
        /motion.div>

        <
        motion.img src = "/profile.png"
        alt = "profile"
        className = "hero-img"
        initial = {
            { scale: 0 } }
        animate = {
            { scale: 1 } }
        transition = {
            { duration: 1.2 } }
        /> <
        /section>
    );
};

export default Hero;