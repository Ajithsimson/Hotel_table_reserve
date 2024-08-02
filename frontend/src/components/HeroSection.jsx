import React from "react";
import Navbar from "./Navbar";
import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <motion.h1 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
            className="title">Delicious</motion.h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <motion.img 
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: 100 }}
               transition={{ duration: 1 }}
              src="./hero1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <motion.h1
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: -100 }}
                 transition={{ duration: 0.5 }}
                className="title">Food</motion.h1>
                <h1 
                 
                className="title dishes_title"> Dishes </h1>
                <motion.img 
                 whileInView={{ opacity: 1, x: 0 }}
                 initial={{ opacity: 0, x: -100 }}
                 transition={{ duration: 1 }}
                
                src="./threelines.svg" alt="threelines" />
              </div>
              <motion.img 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 100 }}
               transition={{ duration: 1 }}
              className="logo" src="logo.svg" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <motion.img 
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: 100 }}
             transition={{ duration: 1 }}
            src="hero2.png" alt="hero" />
          </div>
          <motion.h1 
           whileInView={{ opacity: 1, x: 0 }}
           initial={{ opacity: 0, x: 100 }}
           transition={{ duration: 1 }}
          className="title dishes_title">Dishes</motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
