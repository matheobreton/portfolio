import React from "react";
import { motion } from "framer-motion"

 export default function Apropos() {
  return (
    <motion.div id="apropos-section" animate={{opacity: 1}} initial={{opacity: 0.6}}>          
          <div className="apropos">
            <motion.h1 animate={{x: 0, opacity: 1}} 
            transition={{ type: "spring", bounce: 0.2, duration: 2}} 
            initial={{opacity: 0, x: '-15vw'}}
            className="title">Bienvenue .</motion.h1>
            <motion.h1 animate={{x: 0, opacity: 1}}
            transition={{ type: "spring", bounce: 0.2, duration: 2, delay:0.2}} 
            initial={{opacity: 0, x: '-15vw'}}
            className="title">Je suis <span className="white">Mathéo Breton</span></motion.h1>
            <motion.h1 animate={{x: 0, opacity: 1}} 
            transition={{ type: "spring", bounce: 0.2, duration: 2, delay:0.4}} 
            initial={{opacity: 0, x: '-15vw'}}
            className="title">Développeur Web & Mobile</motion.h1>
            <motion.p animate={{x: 0, opacity: 1}} 
            transition={{ type: "spring", bounce: 0.3, duration: 2, delay:0.6}} 
            initial={{opacity: 0, x: '-15vw'}}
            className="text">Front / Back end </motion.p>

          </div>
    </motion.div>
  );
}

