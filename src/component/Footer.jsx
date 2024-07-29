
import React from 'react';
import style from './footer.module.css'
import { FaWhatsapp, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.socialIcons}>
        <span >Find Me on : </span>
        <a href="https://wa.me/9361380841" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a href="https://github.com/Sudar-13" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/sudar-r-701658283/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/iam__sudar/?igsh=ajM3amV2MWFhM3l2" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <div className={style.copyright}>
        <p>© {new Date().getFullYear()} Sudar R. All Rights Reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
