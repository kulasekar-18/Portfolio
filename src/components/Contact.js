import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me{" "}
      </motion.h2>
      <motion.form
        className="contact-form"
        action="https://formspree.io/f/yourformid"
        method="POST"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
        />{" "}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
          title="Enter a valid email address"
          value={formData.email}
          onChange={handleChange}
        />{" "}
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={formData.message}
          onChange={handleChange}
        />{" "}
        <button type="submit"> Send Message </button>{" "}
      </motion.form>
      <motion.div
        className="social-icons"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/m-kulasekar-reddy-b41956253"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>{" "}
        <a
          href="https://github.com/kulasekar-18"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>{" "}
        <a href="mailto:kulasekarmitta@gmail.com">
          <FaEnvelope />
        </a>{" "}
        <a href="https://wa.me/917032626766" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>{" "}
      </motion.div>{" "}
    </section>
  );
};

export default Contact;
