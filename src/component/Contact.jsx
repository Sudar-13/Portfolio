import React, { useEffect } from "react";
import styles from "./contact.module.css";
import Aos from "aos"
import "aos/dist/aos.css"

const Contact = () => {

  useEffect (()=>{
    Aos.init({
      duration: 1000,
      once:true
    })
  },[])


    return (
    <div className={styles.container} >

      <p className={styles.title}>Contact Us</p>

      <p className={styles.subline}>Please fill this form in a decent manner</p>

      <form className={styles.form}>

      
        <input type="text" placeholder="Full Name " className={styles.input1} />
      
        <input type="email" placeholder="Email Id" id="email" className={styles.input2} />
  
        <textarea id="message" placeholder="Your Message " name="message" className={styles.textarea} />
        
        <button type="submit" className={styles.button}>SUBMIT</button>
      </form>
    </div>
  );
};

export default Contact;
