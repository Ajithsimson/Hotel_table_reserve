import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="left">JOICE'S House</motion.div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="right">
            <p>C74 Cheranmaanagar Vilankurichi post Coimbatore</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </motion.div>
        </div>
        <div className="banner">
          <div className="left">
            <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            >Developed By @ajithsimson</motion.p>
          </div>
          <div className="right">
            <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            >All Rights Reserved By Ajithsimson.</motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;