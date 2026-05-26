import React from "react";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}></div>

      <div style={styles.container}>

        <p style={styles.smallText}>👋 Hello, my name is</p>

        <h1 style={styles.name}>
          Willy Mwanganje
        </h1>

        <h2 style={styles.role}>
          Data Scientist | Data Analyst | Web Developer
        </h2>

        <p style={styles.desc}>
          I am passionate about transforming data into insights and building modern web applications using Python, SQL, Power BI, and React.
        </p>

        <div style={styles.buttons}>

          <a href="#projects" style={styles.primaryBtn}>
            View Projects
          </a>

          <a href="#contact" style={styles.secondaryBtn}>
            Contact Me
          </a>

        </div>

      </div>
    </section>
  );
}

const styles = {

  hero: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    background: "linear-gradient(135deg, #0b1220, #111827)",
    color: "white",
    textAlign: "center",
    padding: "20px",
    overflow: "hidden"
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, transparent 70%)"
  },

  container: {
    maxWidth: "800px",
    zIndex: 2
  },

  smallText: {
    fontSize: "18px",
    color: "#38bdf8",
    marginBottom: "10px"
  },

  name: {
    fontSize: "60px",
    fontWeight: "bold",
    margin: "10px 0"
  },

  role: {
    fontSize: "24px",
    color: "#cbd5e1",
    marginBottom: "20px"
  },

  desc: {
    fontSize: "18px",
    color: "#94a3b8",
    marginBottom: "30px",
    lineHeight: "1.6"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  },

  primaryBtn: {
    padding: "12px 25px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "8px",
    color: "#000",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "0.3s"
  },

  secondaryBtn: {
    padding: "12px 25px",
    backgroundColor: "transparent",
    border: "2px solid #38bdf8",
    borderRadius: "8px",
    color: "#38bdf8",
    textDecoration: "none",
    transition: "0.3s"
  }

};

export default Hero;