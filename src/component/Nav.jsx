import React, { Component, createRef } from 'react';
// import { Link } from "react-router-dom"
import style from "./Nav.module.css"

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isFixed:false,
    };
    this.navbarRef = createRef();
  }
  handleClick = () => {
    this.setState({ clicked:!this.state.clicked });
    this.navbarRef.current.classList.toggle(style.active);
  }

  closeMenu = () => {
    this.setState({ clicked: false });
    this.navbarRef.current.classList.remove(style.active);
  };

componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.closeMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu);
  }
  handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 80) {
      this.setState({ isFixed: true });
    } else {
      this.setState({ isFixed: false });
    }
  };

  render() {
    return (
      
      <nav id={style.Nav} className={`${this.state.isFixed ? style.fixed : ''} ${this.state.isFixed ? style.shrink : ''}`}>

        <a href="" id={style.name}> <img src={require("./Media/logo3.png")} alt="" /> Sudar R  </a>
        <div>
          <div class="overlay"></div>
          <ul ref={this.navbarRef} id={style.navbar} >

            <li><a href="#home" onClick={this.closeMenu}>Home</a></li>
            <li><a href="#about"  className={style.active} onClick={this.closeMenu}>Education</a></li>
            <li><a href="#skills" onClick={this.closeMenu}>Skills</a></li>
            <li><a href="#project" onClick={this.closeMenu}>Project</a></li>
            <li><a href="#contact" onClick={this.closeMenu}>Contact Me</a></li>
          </ul>
        </div>

        <div id={style.mobile}>
          <i id={style.bar }  
             className={this.state.clicked? 'fas fa-times' : 'fas fa-bars'} 
             onClick={this.handleClick} />
        </div>
        
        
      </nav>
    );
  }
}
export default Nav