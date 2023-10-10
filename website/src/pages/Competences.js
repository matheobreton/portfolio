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

const variants = {
  inactive: {
    display: "none",
    opacity: 0
  },
  active: {
    display: "block",
    opacity: 1,
  }
}

class Competences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
      langage: false,
      click: false,
      currentlangage: ["", "", "0"],
      frontend: [
        [
          "HTML",
          html_img,
          "Desc",
          "1"
        ],
        [
          "CSS",
          css_img,
          "Desc",
          "2"
        ],
        [
          "Javascript",
          js_img,
          "Desc",
          "3"
        ],
        [
          "React JS",
          react_img,
          "Desc",
          "4"
        ],
        [
          "React Native",
          react_img,
          "Desc",
          "5"
        ]
      ],
      backend: [
        [
          "Node JS",
          node_img,
          "Desc",
          "7"
        ],
        [
          "Python",
          python_img,
          "Desc",
          "8"
        ],
        [
          "Mongo DB",
          mongodb_img,
          "Desc",
          "9"
        ],
        [
          "MySQL",
          mysql_img,
          "Desc",
          "10"
        ],
      ],
      divers: [
        [
          "Docker",
          docker_img,
          "Desc",
          "11"
        ],
      ],
      learn: [
        [
          "MySQL",
          mysql_img,
        ],
        [
          "Vue.js",
          vuejs_img,
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
    this.setState({ scroll: true })
  }

  Select(elem) {
    if (this.state.langage === false) {
      this.Print_langage(elem)
    } else if (elem[0] === this.state.currentlangage[0]) {
      this.Print_presentation()
      this.setState({ currentlangage: [elem[0], elem[2], "0"] })
    } else
      this.Print_langage(elem)
  }

  Print_langage(elem) {
    this.setState({ langage: true })
    this.setState({ currentlangage: [elem[0], elem[2], elem[3]] })
  }

  Print_presentation() {
    this.setState({ langage: false })
  }

  render() {
    return (
      <motion.div id="competences-section" animate={{ opacity: this.state.scroll ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ type: "tween", duration: 0.6 }}>
        <div className="competences">
          <motion.section className="presentation" variants={variants}
            initial="active"
            animate={this.state.langage ? "inactive" : "active"}>
            <p className="text">
              La création de sites web a toujours été une source d’intérêt pour moi, au point de devenir moi même développeur web.<br />
              Après 3 ans d’études en école informatique à Epitech, je décide de me lancer en qualité de développeur free-lance.<br />
              Mes compétences me permettent de créer des sites web responsive et applications mobiles qui correspondent aux besoins de chaque client.<br />
              La satisfaction de mes clients est un point important pour moi, ce qui m’oblige à répondre en tous points à leurs attentes.<br />
              <br />
              En recherche permanente d’acquisitions de nouvelles compétences,
              je suis toujours en quête de nouvelles technologies et approches pour améliorer l’expérience utilisateur et la performance de mes sites web et applications.<br />
              Ainsi les technologies que j’étudie/approfondis actuellement sont :
            </p>
            <div className="presentation-box">
              {this.state.learn.map((elem, index) =>
                <div key={index} className="box">
                  <motion.img className="learn" src={elem[1]} alt="langage"
                    whileHover={{ scale: 1.1, backgroundColor: '#EDF4FF' }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }} />
                  <p className="presentation-box-text">{elem[0]}</p>
                </div>
              )}
            </div>
          </motion.section>
          <motion.section className="description" variants={variants}
            initial="inactive"
            animate={this.state.langage ? "active" : "inactive"}>
            <p className="text">{this.state.currentlangage[0]}
              {this.state.currentlangage[1]}</p>
          </motion.section>
          <div className="separator"></div>
          <p className="title">Mes compétences</p>
          <section className="container">
            <p className="container-text">Front-end</p>
            <div className="container-box">
              {this.state.frontend.map((elem, index) =>
                <div key={index} className="box">
                  <motion.img className="langage" src={elem[1]} alt="langage"
                    animate={elem[3] === this.state.currentlangage[2] ? { scale: 1.1 } : { scale: 1 }}
                    initial={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => {
                      this.Select(elem)
                      this.setState({ click: true })
                    }
                    }
                    style={{
                      background: elem[3] === this.state.currentlangage[2] ? 'white' : 'rgba(0, 0, 0, 0.6)',
                      filter: elem[3] === this.state.currentlangage[2] ? 'grayscale(0) drop-shadow(0px 0px 3px rgb(78, 76, 76))' : 'grayscale(1) drop-shadow(0px 0px 3px rgb(78, 76, 76))'
                    }}
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
                    animate={elem[3] === this.state.currentlangage[2] ? { scale: 1.1 } : { scale: 1 }}
                    initial={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => {
                      this.Select(elem)
                      this.setState({ click: true })
                    }
                    }
                    style={{
                      background: elem[3] === this.state.currentlangage[2] ? 'white' : 'rgba(0, 0, 0, 0.6)',
                      filter: elem[3] === this.state.currentlangage[2] ? 'grayscale(0) drop-shadow(0px 0px 3px rgb(78, 76, 76))' : 'grayscale(1) drop-shadow(0px 0px 3px rgb(78, 76, 76))'
                    }}
                  />
                  <p className="box-text">{elem[0]}</p>
                </div>
              )}
            </div>
            <p className="container-text">Divers</p>
            <div className="container-box">
              {this.state.divers.map((elem, index) =>
                <div key={index} className="box">
                  <motion.img className="langage" src={elem[1]} alt="langage"
                    animate={elem[3] === this.state.currentlangage[2] ? { scale: 1.1 } : { scale: 1 }}
                    initial={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    onClick={() => {
                      this.Select(elem)
                      this.setState({ click: true })
                    }
                    }
                    style={{
                      background: elem[3] === this.state.currentlangage[2] ? 'white' : 'rgba(0, 0, 0, 0.6)',
                      filter: elem[3] === this.state.currentlangage[2] ? 'grayscale(0) drop-shadow(0px 0px 3px rgb(78, 76, 76))' : 'grayscale(1) drop-shadow(0px 0px 3px rgb(78, 76, 76))'
                    }}
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