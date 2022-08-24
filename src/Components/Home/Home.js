import React from "react";
import Roll from 'react-reveal/Roll';

import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HeroSection from "../Hero Section/HeroSection";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Projects />
            <About />

            <div>
                <Roll left>
                    <Contact />
                </Roll>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
