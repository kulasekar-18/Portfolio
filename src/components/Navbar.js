import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setOpen(false);
        }
    };

    return ( <
        nav className = "navbar" >
        <
        div className = "logo" > Kulasekar < /div> <
        div className = { `nav-links ${open ? "open" : ""}` } >
        <
        li onClick = {
            () => scrollToSection("home") } > Home < /li> <
        li onClick = {
            () => scrollToSection("about") } > About < /li> <
        li onClick = {
            () => scrollToSection("skills") } > Skills < /li> <
        li onClick = {
            () => scrollToSection("projects") } > Projects < /li> <
        li onClick = {
            () => scrollToSection("contact") } > Contact < /li> <
        /div> <
        div className = "hamburger"
        onClick = {
            () => setOpen(!open) } >
        <
        span className = { `bar ${open ? "rotate1" : ""}` } > < /span> <
        span className = { `bar ${open ? "fade" : ""}` } > < /span> <
        span className = { `bar ${open ? "rotate2" : ""}` } > < /span> <
        /div> <
        /nav>
    );
};

export default Navbar;