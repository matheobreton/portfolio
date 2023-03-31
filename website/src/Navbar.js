import './navbar.css';
//import logo from './assets/images/logo.png'
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

function Navbar() {
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
        </ul>
    </motion.nav>
  );
}



export default Navbar;
