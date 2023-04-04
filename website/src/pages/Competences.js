import React from "react";
import { motion } from "framer-motion"

class Competences extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: false,
      frontend: [
        [
          "React JS",
          "React JS"
        ],
        [
          "Html",
          "Html"
        ],
        [
          "Css",
          "Css"
        ],
        [
          "React Native",
          "React native"
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
    this.setState({scroll: true})
  }

  render () {
  return (
    <motion.div id="competences-section" animate={{opacity: this.state.scroll ? 1 : 0}} 
    initial={{opacity: 0}}
    transition={{type: "tween", duration: 0.6}}>
      <div className="competences">
        <p className="text">
        Je suis un développeur web passionné depuis plusieurs années dans la création de sites web.<br />
        Après 3 ans en Ecole d'informatique (<strong>Epitech</strong>), je décide de me lancer en tant que développeur freelance.<br />

        Je suis à l'aise avec la création de sites web responsives et à l'écoute pour élaborer
        le site qui correspond le mieux à vos besoins. <br /><br />

        Passionné par l'amélioration continue de mes
        compétences, je suis toujours à la recherche de nouvelles technologies et de
        nouvelles approches pour améliorer l'expérience utilisateur et la performance 
        de mes sites web. 
        </p>
        <div className="separator"></div>
        <p className="title">Mes compétences</p>
        <div className="container">
          <p className="container-text">Front-end</p>
          {this.state.frontend.map(elem => 
            <div className="box">{elem[0]}</div>
          )}
        </div>
      <div>
          
        </div>
      </div>
    </motion.div>
  );
  }
}

export default Competences;