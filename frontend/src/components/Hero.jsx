import React from "react";
import profileImg from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>

        {/* TEXT */}
        <div style={styles.textBox}>
          <p style={styles.tag}>
            DATA SCIENCE • DATA ANALYSIS • WEB DEVELOPMENT
          </p>

          <h1 style={styles.title}>
            Turning Data Into Insights & Building Modern Web Experiences
          </h1>

          <p style={styles.desc}>
            I use Python, SQL, Power BI, Excel, and React to create dashboards,
            analyze data, and build modern responsive web applications.
          </p>

          <div style={styles.buttons}>
            <a href="#projects" style={styles.primaryBtn}>View Projects</a>
            <a href="#contact" style={styles.secondaryBtn}>Contact Me</a>
          </div>
        </div>

        {/* IMAGE */}
        <div style={styles.imageBox}>
          <img src={profileImg} alt="profile" style={styles.image} />
        </div>

      </div>
    </section>
  );
}

const styles = {

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "120px 20px 60px 20px",

    background: "radial-gradient(circle at top, #1e3a8a, #0f172a, #020617)",
    color: "#fff"
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    width: "100%",
    flexWrap: "wrap",
    gap: "60px"
  },

  textBox: {
    flex: 1,
    minWidth: "280px"
  },

  tag: {
    fontSize: "12px",
    letterSpacing: "3px",
    color: "#60a5fa",
    marginBottom: "15px"
  },

  title: {
    fontSize: "44px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px"
  },

  desc: {
    fontSize: "16px",
    color: "#cbd5e1",
    lineHeight: "1.8",
    maxWidth: "520px"
  },

  buttons: {
    marginTop: "25px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  },

  primaryBtn: {
    padding: "12px 22px",
    background: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(37,99,235,0.3)"
  },

  secondaryBtn: {
    padding: "12px 22px",
    border: "1px solid #60a5fa",
    color: "#60a5fa",
    textDecoration: "none",
    borderRadius: "10px"
  },

  imageBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "280px"
  },

  image: {
    width: "340px",
    height: "340px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "4px solid rgba(96,165,250,0.5)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
  }
};

export default Hero;