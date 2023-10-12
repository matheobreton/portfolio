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

const desc_three = "L'HTML, le CSS et le Javascript sont les langages basiques utilisé par un développeur web. \n" +
  "L'HTML est utilisé pour structurer le contenu des pages webs. Le CSS sert à styliser ce contenu. " +
  "Et le Javascript permet de rendre les pages webs interactives et dynamiques \n\n" +
  "Ce sont des langages que je maîtrise et que j'utilise au quotidient pour développer des sites webs."

const desc_react = "React est un framework JavaScript open-source développée par Facebook. \n" +
  " C'est l'une des bibliothèques les plus populaires pour construire des interfaces utilisateur interactives et réactives. \n\n" +
  "C'est le framework que je préfère pour développer des sites web et applications mobile pour son efficacité. " +
  "Je l'utilise maintenant depuis plusieurs années. "

const desc_bdd = "Mongo DB et MySQL sont des langages permettant d'intéragir avec une base de données, par exemple pour stocker des utilisateurs. \n" + 
"Chaque langage de base de données a ses avantages et ses inconvénients, il faut définir les besoins du projet pour savoir lequel utiliser."

class Competences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      langage: false,
      click: false,
      currentlangage: ["", "", "0"],
      frontend: [
        [
          "HTML",
          html_img,
          desc_three,
          "1"
        ],
        [
          "CSS",
          css_img,
          desc_three,
          "2"
        ],
        [
          "Javascript",
          js_img,
          desc_three,
          "3"
        ],
        [
          "React JS",
          react_img,
          desc_react,
          "4"
        ],
        [
          "React Native",
          react_img,
          desc_react,
          "5"
        ]
      ],
      backend: [
        [
          "Node.js",
          node_img,
          "Node.js est un environnement d'éxécution Javascript permettant de développer des applications réseau en temps réel ou " +
          "bien la partie back-end des applications web comme des API.\n\n" +
          "J'utilise pour ma part le framework Express de Node.js qui est un outil puissant pour construire des applications web et des API robustes.",
          "7"
        ],
        [
          "Python",
          python_img,
          "Python est un langage de programmation polyvament pouvant servir à beaucoup de choses ainsi qu'à créer des applications web.\n\n" +
          "Fort d'une expérience d'une dizaine d'années, c'est un langage que je maîtrise.\n" + 
          "C'est plus récemment que j'ai commencé à l'utiliser pour le développement web avec le framework Flask qui permet la création d'applications web simples ou d'API.",
          "8"
        ],
        [
          "Mongo DB",
          mongodb_img,
          desc_bdd,
          "9"
        ],
        [
          "MySQL",
          mysql_img,
          desc_bdd,
          "10"
        ],
      ],
      divers: [
        [
          "Docker",
          docker_img,
          "Docker est une plateforme qui facilite le déploiement et l'éxécution d'applications en garantissant que l'application " +
          "fonctionnera de manière cohérente sur n'importe quel environnement.",
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
      <div id="competences-section">
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
            <p className="text">{this.state.currentlangage[1]}</p>
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
      </div>
    );
  }
}

export default Competences;