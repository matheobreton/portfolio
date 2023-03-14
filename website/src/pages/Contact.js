import React from "react";
import { motion } from "framer-motion"

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.FadeIn);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.FadeIn);
  }

  FadeIn = () => {
    if (window.scrollY > window.innerHeight + 2) {
    this.setState({scroll: true})
    console.log(window.scrollY, window.innerHeight)
    }
  }

  render () {
  return (
    <motion.div id="contact-section" animate={{opacity: this.state.scroll ? 1 : 0}} 
    initial={{opacity: 0}}
    transition={{type: "tween", duration: 0.6}}>
      <div className="contact">
        <h1 className="title">Contact</h1>
      </div>
    </motion.div>
  );
  }
}

export default Contact;