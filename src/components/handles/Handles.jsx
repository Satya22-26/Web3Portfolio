import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/satya-prakash-jena-37a14524a/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://twitter.com/SatyaPr76075884" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/Satya22-26" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' /></a>
      <a href="mailto:satyaprakashjena492@gmail.com?cc=satyaprakashjena492@gmail.com" target='_blank' rel="noopener noreferrer"><SiGmail className='icon' />
      </a>


    </section>
  )
}

export default Handles
