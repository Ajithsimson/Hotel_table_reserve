import React from 'react'
import {data} from '../restApi.json'
import { motion } from 'framer-motion'

const WhoAreWe = () => {
  return (
    <>
      <section className='who_are_we' id='who_are_we'>
        <div className="container">
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text_banner">
            {
              data[0].who_we_are.slice(0,2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </motion.div>
          <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          className="image_banner">
            <img className='gradient_bg' src="center.svg" alt="gradientBg" />
            <img src="whoweare.png" alt="food" />
          </motion.div>
          <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text_banner">
            {
              data[0].who_we_are.slice(2).map(element=>(
                <div className="card" key={element.id}>
                  <h1 className='heading' style={{fontWeight: "300"}}>{element.number}</h1>
                  <p>{element.title}</p>
                </div>
              ))
            }
          </motion.div>
        </div>
        </section> 
    </>
  )
}

export default WhoAreWe
