import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return ( <
        div >
        <
        Navbar theme = { theme }
        toggleTheme = { toggleTheme }
        /> <
        Hero / >
        <
        About / >
        <
        Skills / >
        <
        Projects / >
        <
        Contact / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;