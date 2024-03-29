import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";
import cpp from "../../assets/skills/cpp.svg";
import html from "../../assets/skills/html.svg";
import css from "../../assets/skills/css.svg";
import tailwindcss from "../../assets/skills/tailwindcss.svg";
import firebase from "../../assets/skills/firebase.svg";
import javascript from "../../assets/skills/javascript.svg";
import solidity from "../../assets/skills/solidity.svg";
import hardhat from "../../assets/skills/hardhat.svg";
import git from "../../assets/skills/git.svg";

const Skills = () => {
  return (
    <section className="skills-section">
        <h1 className="skills-title">Skills</h1>
        <div className='skills-icons'>
        <img src={cpp} alt="cpp-icon" />
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={tailwindcss} alt="tailwindcss-icon" />
        <img src={javascript} alt="javascript-icon" />
        <img src={firebase} alt="firebase-icon" />
        <img src={react} alt="react-icon" />
        <img src={solidity} alt="solidity-icon" />
        <img src={btc} alt="btc-icon" />
        <img src={eth} alt="eth-icon" />
        <img src={btc} alt="btc-icon" />
        <img src={git} alt="git-icon" />
        <img src={hardhat} alt="hardhat-icon" />
        <img src={polygon} alt="polygon-icon" />
        <img src={node} alt="node-icon" />
        </div>
    </section>
  )
}

export default Skills
