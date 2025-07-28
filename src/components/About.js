import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
    return ( <
        section className = "about"
        id = "about" >
        <
        motion.div className = "about-content"
        initial = {
            { opacity: 0, y: 50 } }
        whileInView = {
            { opacity: 1, y: 0 } }
        transition = {
            { duration: 1 } }
        viewport = {
            { once: true } } >
        <
        h2 className = "section-title" >
        About < span className = "highlight" > Me < /span> <
        /h2> <
        p className = "about-text" >
        I 'm <span className="highlight">M. Kulasekar Reddy</span>, a
        self - motivated and passionate frontend developer with experience building responsive, elegant, and interactive web applications using { " " } <
        strong > React.js < /strong>, <strong>HTML</strong > , < strong > CSS < /strong>, and < strong > JavaScript < /strong>. I love turning ideas into real web
        solutions with clean code and creative designs. <
        /p> <
        p className = "about-text" >
        I 'm currently focused on developing full-stack applications, improving
        my UI / UX skills, and learning modern tools like { " " } <
        strong > Framer Motion < /strong>,<strong> Tailwind CSS</strong > , and { " " } <
        strong > Next.js < /strong>. <
        /p> <
        /motion.div> <
        /section>
    );
};

export default About;