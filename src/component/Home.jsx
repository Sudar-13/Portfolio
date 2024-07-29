
import style from "./Home.module.css"
import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"

const Home = () => {


  useEffect (()=>{
    Aos.init({
      duration: 1000,
      once:true
    })
  },[])

  const handleDownloadResume = () => {
  
    
    const resumeUrl = `${process.env.PUBLIC_URL}/my_resume.pdf`;
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Sudar-R-Resume.pdf'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleHireMe = () => {
    const mailtoLink = `mailto:sudarr1307@gmail.com?subject=Hire Me&body=Hi Sudar, I'm interested in hiring you .`;
    window.open(mailtoLink, '_blank');
  };


  return (
    
    <section className={style.homeContainer} id="home">
    
      <div className={style.content}>
        <p className={style.line1}> I'm  sudar r</p>
   
        <p className={style.line2}>Data Analyst</p>
        <p className={style.line3}>Specialized in Data Analysis & Insights</p>
        <p className={style.line4}>I'm a data analyst on a mission to uncover hidden patterns and trends that drive business growth. With a passion for data-driven storytelling and a commitment to delivering actionable insights, I help organizations make informed decisions that impact their bottom line.</p>
        
        <button className={style.resume} onClick={handleDownloadResume} >Check resume</button>
        <button className={style.hire} onClick={handleHireMe}>Hire-Me </button>
      </div>
      <div className={style.profile}>

      </div>
   
    </section>
  )
}

export default Home
