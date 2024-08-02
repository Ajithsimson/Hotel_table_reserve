import React from 'react'
import {data} from '../restApi.json'
import { motion } from 'framer-motion'
const Qualities = () => {
  return (
    <>
        <section className='qualities' id='qualities'>
          <div className="container">
            {
              data[0].ourQualities.map(element=>{
                return(
                  <motion.div 
                  whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1 }}
                  className='card' key={element.id}>
                      <img 
                        
                      src={element.image} alt={element.title}
                      
                      />
                      <p className='title'>{element.title}</p>
                      <p className='description'>{element.description}</p>
                  </motion.div>
                )
              })
            }
          </div>
        </section>
    </>
  )
}

export default Qualities
