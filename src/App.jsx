
import React from 'react';
import Nav from './component/Nav';
import Home from './component/Home';
import Aboutme from './component/Aboutme';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import AnimatedCursor from "react-animated-cursor";


const App = () => {

  return (
    <div>
  {/* <AnimatedCursor
  innerSize={0}
  outerSize={35}
  innerScale={1}
  outerScale={1}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid #f7f7f7',
    backgroundColor: '#f7f7f7',
    cursor: 'auto' 
  }}
/> */}
  


        <Nav/>
        <div id="home"></div>
        <Home></Home>
        <div id="about"></div>
        <Aboutme></Aboutme>
        <div id="skills"></div>
        <Skills></Skills>
        <div id="project"></div>
        <Project></Project>
        <div id="contact"></div>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default App;