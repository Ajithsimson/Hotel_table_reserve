import React from "react";
import { data } from "../restApi.json";
import { motion } from "framer-motion";
const Team = () => {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="heading">OUR TEAM</motion.h1>
          <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          >
          Welcome to the heart of JOICE'S House where passion for food meets culinary expertise. Our team of chefs is dedicated to crafting exceptional dining experiences that tantalize the taste buds and leave a lasting impression.
          </motion.p>
        </div>
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
