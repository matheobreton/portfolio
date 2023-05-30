import React from "react";
import { motion } from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <h1 className="title">Portfolio</h1>
        <Carousel className="carousel" showThumbs={false} autoPlay infiniteLoop>
          <div className="cards">
            <img src="https://picsum.photos/200/300?random=1" />
            <img src="https://picsum.photos/200/300?random=2" />
            <img src="https://picsum.photos/200/300?random=3" />
          </div>
          <div className="cards">
            <img src="https://picsum.photos/200/300?random=1" />
            <img src="https://picsum.photos/200/300?random=2" />
            <img src="https://picsum.photos/200/300?random=3" />
          </div>
          <div className="cards">
            <img src="https://picsum.photos/200/300?random=1" />
            <img src="https://picsum.photos/200/300?random=2" />
            <img src="https://picsum.photos/200/300?random=3" />
          </div>
          
        </Carousel>
      </div>
    </motion.div>
  );
  }
}

export default Projets;