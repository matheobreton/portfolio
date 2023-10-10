import React from "react";
import { motion } from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Projets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
      click: false,
      info: [],
      projects: [
        [
          [
            "Stress-Test",
            "desc",
            "1",
            ["Node JS",],
          ],
          [
            "Stress-Test",
            "desc",
            "2",
            ["React", "Javascript"],
          ],
          [
            "Stress-Test",
            "desc",
            "3",
            ["PhP"],
          ]
        ],
        [
          [
            "Stress-Test",
            "desc",
            "1",
            ["Node JS", "React", "Javascript"],
          ],
          [
            "Stress-Test",
            "desc",
            "2",
            ["Node JS", "React", "Javascript"],
          ],
          [
            "Stress-Test",
            "desc",
            "3",
            ["Node JS", "React", "Javascript"],
          ]
        ]
      ]
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
      this.setState({ scroll: true })
    }
  }

  render() {
    console.log(this.state.click)
    return (
      <motion.div id="projets-section" animate={{ opacity: this.state.scroll ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}>
        <div className="projets">
          <h1 className="title">Portfolio</h1>
          <p className="text">Ci dessous, voici quelques unes de mes réalisations</p>
          <Carousel className="carousel" showThumbs={false} infiniteLoop>
            {this.state.projects.map((elem, index1) =>
              <div className="cards" key={index1}>
                {elem.map((projects, index2) =>
                  <motion.div className="card" key={index2}
                  initial={{ scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    this.setState({info: projects})
                    this.setState({click: true})
                  }
                    }
                  >
                    <img src={"https://picsum.photos/200/300?random=" + projects[2]} />
                    <div className="img-hover"></div>
                    <p className="name">{projects[0]}</p>
                    <p className="desc">{projects[1]}</p>
                    <div className="tags">
                      {
                        projects[3].map((tag, index) =>
                       <p key={index}>{tag}</p> 
                      )}
                    </div>
                  </motion.div>
                )}
              </div>
            )}
          </Carousel>
        </div>
        <motion.div className="info"
          initial={{ opacity: 0, x: 200}}
          animate={ this.state.click ? { opacity: 1, x: 0} : { opacity: 0, x: 200}}>
          </motion.div>
      </motion.div>
    );
  }
}

export default Projets;