import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

const Skills = () => {
  const techSkills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#e44d26" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
    { name: "JavaScript", icon: <FaJs />, color: "#f0db4f" },
    { name: "React", icon: <FaReact />, color: "#61DBFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
    { name: "GitHub", icon: <FaGithub />, color: "#333" },
  ];

  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills{" "}
      </motion.h2>{" "}
      <div className="skills-grid">
        {" "}
        {techSkills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon" style={{ color: skill.color }}>
              {" "}
              {skill.icon}{" "}
            </div>{" "}
            <p> {skill.name} </p>{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Skills;
