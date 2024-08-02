import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <motion.h1 
               whileInView={{ opacity: 1, y: 0 }}
               initial={{ opacity: 0, y: 100 }}
               transition={{ duration: 1 }}
              className="heading">ABOUT US</motion.h1>
              <motion.p
               whileInView={{ opacity: 1, x: 0 }}
               initial={{ opacity: 0, x: -100 }}
               transition={{ duration: 1 }}
              >The only thing we're serious about is food.</motion.p>
            </div>
            <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="mid">
            Welcome to JOICE'S House, where we believe in the power of good food to bring people together. Nestled in the heart of [City/Town], our restaurant offers a comfortable dining experience in a relaxed setting.

At JOICE'S House, we are passionate about serving delicious, freshly prepared meals that showcase the best of local and seasonal ingredients. Our menu is crafted with care, featuring a variety of dishes to satisfy every palate. Whether you're joining us for a quick bite, a family dinner, or a special celebration, we have something for everyone.

Beyond great food, we pride ourselves on providing exceptional hospitality. 
            </motion.p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <motion.img 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
