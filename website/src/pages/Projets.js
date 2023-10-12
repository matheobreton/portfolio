import React from "react";
import { motion } from "framer-motion"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaXmark} from "react-icons/fa6"

import stresstest1 from '../assets/images/stresstest1.png';
import stresstest2 from '../assets/images/stresstest2.png';
import stresstest3 from '../assets/images/stresstest3.png';
import wellotop1 from '../assets/images/wellotop1.jpg';

class Projets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
      click: false,
      info: [
        "",
        "",
        [],
        [],
      ],
      projects: [
        [
          [
            "Stress-Test",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci quis mi consectetur dignissim eget sed turpis. Cras placerat odio eu neque lobortis malesuada. Curabitur eget neque vel ante pulvinar convallis. Nulla facilisi. Vestibulum volutpat tempus tincidunt. Fusce eu molestie ante, vel semper neque. Nunc quis odio sem. Nam ipsum ligula, sagittis vel bibendum nec, congue id est. Suspendisse potenti. Proin non turpis lectus. Integer posuere volutpat libero, ac bibendum sem finibus ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pharetra mi non massa gravida, iaculis finibus tellus aliquet. Ut sagittis turpis finibus lectus sollicitudin, a condimentum ante interdum. Sed ornare tincidunt dui eu faucibus.",
            [stresstest1, stresstest2, stresstest3],
            ["React", "API externe", "HTML/CSS"],
            "Projet privé"
          ],
          [
            "Wellotop",
            "desc",
            [wellotop1],
            ["React Native", "Javascript"],
            "Projet privé"
          ],
          [
            "Stress-Test",
            "desc",
            ["3", "1", "2"],
            ["PhP"],
            "Projet privé"
          ]
        ],
        [
          [
            "Stress-Test",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac orci quis mi consectetur dignissim eget sed turpis. Cras placerat odio eu neque lobortis malesuada. Curabitur eget neque vel ante pulvinar convallis. Nulla facilisi. Vestibulum volutpat tempus tincidunt. Fusce eu molestie ante, vel semper neque. Nunc quis odio sem. Nam ipsum ligula, sagittis vel bibendum nec, congue id est. Suspendisse potenti. Proin non turpis lectus. Integer posuere volutpat libero, ac bibendum sem finibus ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec pharetra mi non massa gravida, iaculis finibus tellus aliquet. Ut sagittis turpis finibus lectus sollicitudin, a condimentum ante interdum. Sed ornare tincidunt dui eu faucibus.",
            ["1", "2", "3"],
            ["Node JS",],
            "Projet privé"
          ],
          [
            "Wellotop",
            "desc",
            ["2", "1", "3"],
            ["React", "Javascript"],
            "Projet privé"
          ],
          [
            "Stress-Test",
            "desc",
            ["3", "1", "2"],
            ["PhP"],
            "Projet privé"
          ]
        ],
      ]
    }
  }

  render() {
    console.log(this.state.click)
    return (
      <div id="projets-section" >
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
                      this.setState({ info: projects })
                      this.setState({ click: true })
                    }
                    }
                  >
                    <img src={projects[2][0]} />
                    <div className="img-hover"></div>
                    <p className="name">{projects[0]}</p>
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
        <div>
          <motion.div className="photos"
            initial={{ opacity: 0, x: "-60vw" }}
            transition={{ bounce: 0 }}
            animate={this.state.click ? { opacity: 1, x: 0 } : { opacity: 0, x: "-60vw" }}>
            <Carousel className="slides" showThumbs={false} infiniteLoop>
              {
                this.state.info[2].map((photo, index) =>
                  <img key={index} src={photo} />
                )}
            </Carousel>
          </motion.div>
          <motion.div className="info"
            initial={{ opacity: 0, x: "40vw" }}
            transition={{ bounce: 0 , delay: 0.2}}
            animate={this.state.click ? { opacity: 1, x: 0 } : { opacity: 0, x: "40vw" }}>
            <FaXmark className="back" onClick={() => this.setState({ click: false })} 
            />
            <p className="name">{this.state.info[0]}</p>
            <p className="desc">{this.state.info[1]}</p>
            <div className="tags">
              {
                this.state.info[3].map((tag, index) =>
                  <p key={index}>{tag}</p>
                )}
            </div>
            <p className="link">Lien : <span>{this.state.info[4]}</span></p>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Projets;