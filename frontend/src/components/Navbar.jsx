import React from "react";
import profileImg from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>

        {/* LEFT TEXT */}
        <div style={styles.textBox}>
          <p style={styles.smallText}>DATA SCIENTIST • DATA ANALYST • DEVELOPER</p>

          <h1 style={styles.name}>
            Building Data-Driven & Modern Web Solutions
          </h1>

          <p style={styles.desc}>
            I specialize in Python, SQL, Power BI, Excel and React to turn data into meaningful insights and interactive dashboards.
          </p>

          <div style={styles.buttons}>
            <a href="#projects" style={styles.primaryBtn}>View Work</a>
            <a href="#contact" style={styles.secondaryBtn}>Get In Touch</a>
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

    padding: "110px 20px 60px 20px",

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
    gap: "50px"
  },

  textBox: {
    flex: 1,
    minWidth: "280px"
  },

  smallText: {
    fontSize: "12px",
    letterSpacing: "2px",
    color: "#60a5fa",
    marginBottom: "15px"
  },

  name: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.2",
    marginBottom: "20px"
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#cbd5e1",
    maxWidth: "500px"
  },

  buttons: {
    marginTop: "25px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  },

  primaryBtn: {
    padding: "12px 24px",
    background: "#2563eb",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(37,99,235,0.3)"
  },

  secondaryBtn: {
    padding: "12px 24px",
    border: "1px solid #60a5fa",
    color: "#60a5fa",
    textDecoration: "none",
    borderRadius: "8px"
  },

  imageBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "280px"
  },

  image: {
    width: "320px",
    height: "320px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "3px solid rgba(96,165,250,0.6)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
  }
};

export default Hero;