import React from "react";
import { motion } from "framer-motion"

class Projets extends React.Component {
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
    }
  }

  render () {
  return (
    <motion.div id="projets-section" animate={{opacity: this.state.scroll ? 1 : 0}} 
    initial={{opacity: 0}}
    transition={{type: "tween", duration: 0.6}}>
      <div className="projets">
        <h1 className="title">Projets</h1>
        <div className="link">
            <div className="projets-link-text">Voir les projets</div>
        </div>
      </div>
    </motion.div>
  );
  }
}

export default Projets;