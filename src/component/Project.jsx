import React, { useState } from 'react';
import style from "./Project.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    
    name: "Empolyee Management System",
    screenshot: require("./Media/emplogo.jpg")
    
  },
  {
    id: 2,
    name: "todo list",
    screenshot: require("./Media/an-icon-of-todo-list1.jpg")
  },
  {
    id: 3,
    name: "Chat bot",
    screenshot: require("./Media/chatbot-chat-message.png")
  },
  {
    id: 4,
    name: "e-commerce",
    screenshot: require("./Media/e-com.jpg"),
  },
  
];

const Project = () => {
  const [hover, setHover] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (project) => {
    setHover(true);
    setSelectedProject(project);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (

    
    <div className={style.content}  data-aos="fade-up" data-aos-once="false">
      <h2>Projects done</h2>
      <section>
        {projects.map((project) => (
          <div key={project.id} className={style.contentProject}data-aos="fade-up" data-aos-once="false">
            <div className={style.imageHover}onMouseEnter={() => handleMouseEnter(project)} onMouseLeave={handleMouseLeave}>
             
              <img src={project.screenshot} alt="Image" className={style.hoverImage} />
              {hover && selectedProject === project && (
                <div
                  className={style.hoverText} 
                  style={{
                    // backgroundColor: "rgb(250 232 255)",
                    background:"radial-gradient(#ffe6d9, #ffffff)",
                    transition: "background-color 0.3s ease-in-out",
                    
                  }}
                >
                  <p data-aos="slide-up" data-aos-once="false">{project.name}</p>

                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Project;
