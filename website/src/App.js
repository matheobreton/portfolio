import Navbar from "./Navbar";
import Apropos from "./pages/Apropos";
import Competences from "./pages/Competences";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";
import React from "react";
import './css/sections.css';
import './css/navbar.css';
import './css/apropos.css';
import './css/competences.css';
import './css/projets.css';
import './css/contact.css';

var nav1 = 0;
var nav2 = 0;
var nav3 = 0;
var nav4 = 0;
var root = 0;
var colors = 0

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 0,
      init: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.UpdateScroll);
    nav1 = document.getElementById('nav1').getElementsByTagName('a');
    nav2 = document.getElementById('nav2').getElementsByTagName('a');
    nav3 = document.getElementById('nav3').getElementsByTagName('a');
    nav4 = document.getElementById('nav4').getElementsByTagName('a');
    this.setState({init: true})
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.UpdateScroll);
  }

  UpdateScroll = () => {
    this.setState({scrollTop: window.scrollY})
  }

  render () {
    root = document.querySelector(':root');
    colors = getComputedStyle(root)
    if (this.state.init === true) {
      if (this.state.scrollTop < window.innerHeight) {
        nav1[0].style.color = colors.getPropertyValue('--main-text-color')
        nav2[0].style.color = colors.getPropertyValue('--second-text-color')
        nav3[0].style.color = colors.getPropertyValue('--second-text-color')
        nav4[0].style.color = colors.getPropertyValue('--second-text-color')
        nav1[0].style.textDecoration = 'underline'
        nav2[0].style.textDecoration = 'none'
        nav3[0].style.textDecoration = 'none'
        nav4[0].style.textDecoration = 'none'
      } else if (this.state.scrollTop >= window.innerHeight-2 
        && this.state.scrollTop < 2*window.innerHeight-2) {
        nav1[0].style.color = colors.getPropertyValue('--second-text-color')
        nav2[0].style.color = colors.getPropertyValue('--main-text-color')
        nav3[0].style.color = colors.getPropertyValue('--second-text-color')
        nav4[0].style.color = colors.getPropertyValue('--second-text-color')
        nav1[0].style.textDecoration = 'none'
        nav2[0].style.textDecoration = 'underline'
        nav3[0].style.textDecoration = 'none'
        nav4[0].style.textDecoration = 'none'
      } else if (this.state.scrollTop >= 2*window.innerHeight-2
        && this.state.scrollTop < 3*window.innerHeight-2) {
        nav1[0].style.color = colors.getPropertyValue('--second-text-color')
        nav2[0].style.color = colors.getPropertyValue('--second-text-color')
        nav3[0].style.color = colors.getPropertyValue('--main-text-color')
        nav4[0].style.color = colors.getPropertyValue('--second-text-color')
        nav1[0].style.textDecoration = 'none'
        nav2[0].style.textDecoration = 'none'
        nav3[0].style.textDecoration = 'underline'
        nav4[0].style.textDecoration = 'none'
      } else {
        nav1[0].style.color = colors.getPropertyValue('--second-text-color')
        nav2[0].style.color = colors.getPropertyValue('--second-text-color')
        nav3[0].style.color = colors.getPropertyValue('--second-text-color')
        nav4[0].style.color = colors.getPropertyValue('--main-text-color')
        nav1[0].style.textDecoration = 'none'
        nav2[0].style.textDecoration = 'none'
        nav3[0].style.textDecoration = 'none'
        nav4[0].style.textDecoration = 'underline'
      }
    }
    return (
      <div id="App">
        <Navbar />
          <Apropos/>
          <Competences/>
          <Projets />
          <Contact />
      </div>
    );
  }
}

export default App;
