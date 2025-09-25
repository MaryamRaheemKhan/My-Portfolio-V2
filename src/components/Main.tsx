import React from "react";
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile_photo/picture.png';
import {FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";

function Main() {

  return (
    <div id="about">
      <div className="about-section">
        <div className="image-wrapper">
    <img src={profile} style={{ width: "200px", height: "200px" }} alt="Avatar" />        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MaryamRaheemKhan" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/maryam-raheem-5821a4218/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            
            <a href={require('../assets/resume/MaryamRaheem_WorkingStudent.pdf')} download="MaryamRaheem_CV_Software_Engineer">
              <FaFilePdf/> CV
            </a>

          </div>
          <h1 id="intro_name">Maryam Raheem</h1>
          <p id="intro_headline">Software Engineer</p>
          <p id="intro_description">I’m a software engineer pursuing a Master’s in Computer Science International at Universitat Rostock. With expertise in Frontend, Backend, Generative AI, DevOps. I thrive on creating innovative solutions and tackling complex challenges in dynamic environments.</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/MaryamRaheemKhan" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/maryam-raheem-5821a4218/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href={require('../assets/resume/MaryamRaheem_WorkingStudent.pdf')} download="MaryamRaheem_CV_Software_Engineer">
              <FaFilePdf/> CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;