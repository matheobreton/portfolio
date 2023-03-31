import React from "react";
import { motion } from "framer-motion"

class Competences extends React.Component {
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
    this.setState({scroll: true})
  }

  render () {
  return (
    <motion.div id="competences-section" animate={{opacity: this.state.scroll ? 1 : 0}} 
    initial={{opacity: 0}}
    transition={{type: "tween", duration: 0.6}}>
      <div className="competences">
        <h1 className="title">Competences</h1>
        <p className="text"></p>
      </div>
    </motion.div>
  );
  }
}

export default Competences;