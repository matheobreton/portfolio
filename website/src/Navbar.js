import { useEffect, useState } from 'react';
import { motion, useCycle } from "framer-motion"
import bright_img from './assets/images/bright.png';
import dark_img from './assets/images/dark.png';

function Scroll_apropos() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
}

function Scroll_competences() {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

function Scroll_projets() {
  window.scroll({
    top: window.innerHeight * 2,
    behavior: 'smooth'
  });
}

function Scroll_contact() {
  window.scroll({
    top: window.innerHeight * 3,
    behavior: 'smooth'
  });
}

function changeMode(boolean) {
  var root = document.querySelector(':root');
  if (boolean === false) {
    root.style.setProperty('--main-bg-color', '#0A192F');
    root.style.setProperty('--second-bg-color', '#4C5767');
    root.style.setProperty('--main-text-color', 'white');
    root.style.setProperty('--second-text-color', 'transparent');
    root.style.setProperty('--third-text-color', 'white');
    root.style.setProperty('--container-color', '#EDF4FF');
    root.style.setProperty('--other-main-bg-color', '#EDF4FF')
    root.style.setProperty('--other-main-text-color', '#0A192F')
    if (window.scrollY !== window.innerHeight * 3) {
      window.scroll({
        top: window.scrollY + 1,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: window.scrollY - 1,
        behavior: 'smooth'
      });
    }
  } else {
    root.style.setProperty('--main-bg-color', '#a3bce4');
    root.style.setProperty('--second-bg-color', '#EDF4FF');
    root.style.setProperty('--main-text-color', '#0A192F');
    root.style.setProperty('--second-text-color', '#0A192F');
    root.style.setProperty('--third-text-color', '#0A192F');
    root.style.setProperty('--container-color', 'white');
    root.style.setProperty('--other-main-bg-color', '#0A192F')
    root.style.setProperty('--other-main-text-color', 'white')
    if (window.scrollY !== 0) {
      window.scroll({
        top: window.scrollY - 1,
        behavior: 'smooth'
      });
    } else {
      window.scroll({
        top: window.scrollY + 1,
        behavior: 'smooth'
      });
    }
  }
}

function Navbar() {
  const [bright, setBright] = useState(true)
  const [y, cycleY] = useCycle(-99.9, -100)
  useEffect(() => {
    var preference = localStorage.getItem('theme')
    if (preference) {
      var theme = true
      if (preference === 'false')
        theme = false
      changeMode(theme)
      setBright(!theme)
    }
  }, [])
  return (
    <motion.nav animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ type: "tween", duration: 1 }}>
      <div className='logo'></div>
      <ul>
        <li id="nav1"><a href='#Accueil' onClick={Scroll_apropos}>accueil</a></li>
        <li id="nav2"><a href='#Competences' onClick={Scroll_competences}>compétences</a></li>
        <li id="nav3"><a href='#Portfolio' onClick={Scroll_projets}>portfolio</a></li>
        <li id="nav4"><a href='#Contact' onClick={Scroll_contact}>contact</a></li>
      </ul>
      <motion.img src={!bright ? dark_img : bright_img} className='brightmode' onClick={function () {
        localStorage.setItem('theme', bright)
        changeMode(bright)
        setTimeout(() => setBright(!bright), 300)
      }}
      initial={{y: 0}}
      animate={{y: [0, y, 0]}}
      transition={{duration: 0.6}}
      onTap={() => cycleY()}
      />
    </motion.nav>
  );
}



export default Navbar;
