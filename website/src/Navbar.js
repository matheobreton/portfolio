import { useState } from 'react';
import { motion } from "framer-motion"

function Scroll_apropos () {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
}

function Scroll_competences () {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function Scroll_projets () {
  window.scroll({
    top: window.innerHeight * 2,
    behavior: 'smooth'
  });
}

function Scroll_contact () {
  window.scroll({
    top: window.innerHeight * 3,
    behavior: 'smooth'
  });
}

function changeMode (boolean) {
  var root = document.querySelector(':root');
  console.log(boolean)
  if (boolean === false) {
    root.style.setProperty('--main-bg-color', '#0A192F');
    root.style.setProperty('--second-bg-color', '#4C5767');
    root.style.setProperty('--main-text-color', 'white');
    root.style.setProperty('--second-text-color', 'transparent');
    root.style.setProperty('--third-text-color', 'white');
    root.style.setProperty('--container-color', '#EDF4FF');
    root.style.setProperty('--other-main-bg-color', '#EDF4FF')
  } else {
    root.style.setProperty('--main-bg-color', '#EDF4FF');
    root.style.setProperty('--second-bg-color', '#EDF4FF');
    root.style.setProperty('--main-text-color', '#0A192F');
    root.style.setProperty('--second-text-color', '#0A192F');
    root.style.setProperty('--third-text-color', '#0A192F');
    root.style.setProperty('--container-color', 'white');
    root.style.setProperty('--other-main-bg-color', '#0A192F')
  }
  window.scroll({
    top: 1,
    behavior: 'smooth'
  });
}

function Navbar() {
  const [bright, setBright] = useState(true)
  return (
    <motion.nav animate={{opacity: 1}} 
    initial={{opacity: 0}}
    transition={{type: "tween", duration: 1}}>
        <ul>
          <li className='logo'></li>
          <li id="nav1"><a href='#Apropos' onClick={Scroll_apropos}>à propos</a></li>
          <li id="nav2"><a href='#Competences' onClick={Scroll_competences}>compétences</a></li>
          <li id="nav3"><a href='#Projets' onClick={Scroll_projets}>projets</a></li>
          <li id="nav4"><a href='#Contact' onClick={Scroll_contact}>contact</a></li>
          <li className='brightmode'><motion.div animate={{x: bright ? 0 : '1.4vw'}}
            onClick={function () {
              changeMode(bright)
              setBright(!bright)
            }}
            transition={{ type: "spring", bounce: 0.2, duration: 1}} 
            initial={{x: 0}}className='switch'></motion.div></li>
        </ul>
    </motion.nav>
  );
}



export default Navbar;
