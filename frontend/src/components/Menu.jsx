import React from 'react'
import {data} from '../restApi.json'
import { motion } from 'framer-motion'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <motion.h1 
                whileInView={{ opacity: 1, y:0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }}
                className="heading">POPULAR DISHES</motion.h1>
                <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                >we take pride in offering a diverse menu that delights 
                  our guests. From appetizers to desserts, here are some of our most beloved dishes!</motion.p>
            </div>
            <div 
            
            className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
                        className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </motion.div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
