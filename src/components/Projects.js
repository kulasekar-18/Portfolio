import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    title: "Weather App",
    description:
      "Real-time weather forecast with dynamic icons and search using OpenWeatherMap API.",
    demo: "https://your-weather-demo.com",
    code: "https://github.com/yourusername/weather-app",
  },
  {
    title: "E-Commerce Site",
    description:
      "A modern furniture shopping site built with the MERN stack and responsive design.",
    demo: "https://your-ecommerce-demo.com",
    code: "https://github.com/yourusername/ecommerce-site",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio with animated transitions using React and Framer Motion.",
    demo: "#",
    code: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="highlight"> My </span> Projects{" "}
      </motion.h2>
      <div className="projects-grid">
        {" "}
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <h3> {project.title} </h3> <p> {project.description} </p>{" "}
            <div className="project-buttons">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Live Demo{" "}
              </a>{" "}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub{" "}
              </a>{" "}
            </div>{" "}
          </motion.div>
        ))}{" "}
      </div>{" "}
    </section>
  );
};

export default Projects;
