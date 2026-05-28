import React from "react";
import profileImg from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section id="home" style={styles.hero}>

      <div style={styles.container}>

        {/* TEXT */}
        <div style={styles.textBox}>

          <p style={styles.smallText}>👋 Hello, I'm</p>

          <h1 style={styles.name}>Willy Mwanganje</h1>

          <h2 style={styles.role}>
            Data Scientist | Data Analyst | Web Developer
          </h2>

          <p style={styles.desc}>
            I build data-driven solutions and modern web applications using Python, SQL, Power BI, Excel, and React.
          </p>

          <div style={styles.buttons}>
            <a href="#projects" style={styles.primaryBtn}>View Projects</a>
            <a href="#contact" style={styles.secondaryBtn}>Contact Me</a>
          </div>

        </div>

        {/* IMAGE */}
        <div style={styles.imageBox}>
          <div style={styles.glow}></div>
          <img src={profileImg} alt="profile" style={styles.image} />
        </div>

      </div>

    </section>
  );
}
export default Hero;