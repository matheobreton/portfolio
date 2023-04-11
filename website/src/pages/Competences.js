import React from "react";
import { motion } from "framer-motion"

import react_img from '../assets/images/react.png';
import html_img from '../assets/images/html.png';
import css_img from '../assets/images/css.png';
import js_img from '../assets/images/js.png';
import vuejs_img from '../assets/images/vuejs.png';
import node_img from '../assets/images/node.png';
import python_img from '../assets/images/python.png';
import mongodb_img from '../assets/images/mongodb.png';
import mysql_img from '../assets/images/mysql.png';
import docker_img from '../assets/images/docker.png';

class Competences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
      langage: false,
      frontend: [
        [
          "HTML",
          html_img,
          "Desc"
        ],
        [
          "CSS",
          css_img,
          "Desc"
        ],
        [
          "Javascript",
          js_img,
          "Desc"
        ],
        [
          "React JS",
          react_img,
          "Desc"
        ],
        [
          "Vue.js",
          vuejs_img,
          "Desc"
        ],
        [
          "React Native",
          react_img,
          "Desc"
        ]
      ],
      backend: [
        [
          "Node JS",
          node_img,
          "Desc"
        ],
        [
          "Python",
          python_img,
          "Desc"
        ],
        [
          "Mongo DB",
          mongodb_img,
          "Desc"
        ],
        [
          "MySQL",
          mysql_img,
          "Desc"
        ],
        [
          "MySQL",
          docker_img,
          "Desc"
        ],
      ],
      learn: [
        [
          "MySQL",
          mysql_img,
          "Desc"
        ],
        [
          "Angular",
          mysql_img,
          "Desc"
        ],
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
    this.setState({scroll: true})
  }

  Print_langage(langage) {
    this.setState({langage: true})
  }

  Print_presentation(langage) {
    this.setState({langage: false})
  }

  render () {
  return (
    <motion.div id="competences-section" animate={{opacity: this.state.scroll ? 1 : 0}} 
    initial={{opacity: 0}}
    transition={{type: "tween", duration: 0.6}}>
      <div className="competences">
        <motion.section className="presentation"
        initial={{opacity: 1}}
        animate={{opacity: this.state.langage ? 0 : 1}}>
          <p className="text">
          Je suis un développeur web passionné depuis plusieurs années dans la création de sites web.<br />
          Après 3 ans en Ecole d'informatique (<strong>Epitech</strong>), je décide de me lancer en tant que développeur freelance.<br />

          Je suis à l'aise avec la création de sites web responsives et à l'écoute pour élaborer
          le site qui correspond le mieux à vos besoins. <br /><br />

          Passionné par l'amélioration continue de mes
          compétences, je suis toujours à la recherche de nouvelles technologies et de
          nouvelles approches pour améliorer l'expérience utilisateur et la performance 
          de mes sites web.<br />
          Voici les technologies que j'étudie en ce moment :
          </p>
          <div className="presentation-box"> 
            {this.state.learn.map((elem, index) => 
                <div key={index} className="box">
                  <motion.img className="learn" src={elem[1]} alt="langage" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }} />
                  <p className="presentation-box-text">{elem[0]}</p>
                </div>
              )}
            </div>
        </motion.section>
        <div className="separator"></div>
        <p className="title">Mes compétences</p>
        <section className="container">
          <p className="container-text">Front-end</p>
          <div className="container-box"> 
            {this.state.frontend.map((elem, index) => 
              <div key={index} className="box">
                <motion.img className="langage" src={elem[1]} alt="langage" 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={e => {this.Print_langage(elem)}}
                onHoverEnd={e => {this.Print_presentation()}}
                />
                <p className="box-text">{elem[0]}</p>
              </div>
            )}
          </div>
          <p className="container-text">Back-end</p>
          <div className="container-box">
            {this.state.backend.map((elem, index) => 
              <div key={index} className="box">
                <motion.img className="langage" src={elem[1]} alt="langage" 
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                onHoverStart={e => {this.Print_langage(elem)}}
                onHoverEnd={e => {this.Print_presentation()}}
                />
                <p className="box-text">{elem[0]}</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </motion.div>
  );
  }
}

export default Competences;