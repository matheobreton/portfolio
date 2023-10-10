import React from "react";
import { motion } from "framer-motion"

import arrow from '../assets/images/arrow.png';

 export default function Apropos() {
  function Scroll_competences () {
    window.scroll({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
  return (
    <motion.div id="apropos-section" animate={{opacity: 1}} initial={{opacity: 0.6}}>          
          <div className="apropos">
            <motion.h1 animate={{x: 0, opacity: 1}} 
            transition={{ type: "spring", bounce: 0.1, duration: 2}} 
            initial={{opacity: 0.1, x: '-15vw'}}
            className="title">Bienvenue,</motion.h1>
            <motion.h1 animate={{x: 0, opacity: 1}}
            transition={{ type: "spring", bounce: 0.1, duration: 2, delay:0.2}} 
            initial={{opacity: 0, x: '-15vw'}}
            className="title">Je suis <span className="name">Mathéo Breton</span></motion.h1>
            <motion.h1 animate={{x: 0, opacity: 1}} 
            transition={{ type: "spring", bounce: 0.1, duration: 2, delay:0.4}} 
            initial={{opacity: 0, x: '-15vw'}}
            className="title">Développeur Web & Mobile</motion.h1>
            <motion.p animate={{opacity: 1}} 
            transition={{ type: "spring", bounce: 0.3, duration: 2, delay:1}} 
            initial={{opacity: 0}}
            className="text name">Front / Back end </motion.p>
            <motion.img src={arrow} className="arrow" onClick={() => Scroll_competences()}
            animate={{ y: [0, 30, 0, 30, 0], opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 2, delay: 1.2, y: { repeat: Infinity, duration: 2 } }}/>
          </div>
    </motion.div>
  );
}

