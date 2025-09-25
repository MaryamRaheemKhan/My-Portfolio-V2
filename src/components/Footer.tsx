import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { FaGithub, FaLinkedin, FaXingSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/MaryamRaheemKhan" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/maryam-raheem-5821a4218/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
      </div>
    </footer>
  );
}

export default Footer;