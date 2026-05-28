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

    padding: "110px 20px 60px 20px", // 👈 important (chini ya navbar)

    background: "linear-gradient(135deg, #0f172a, #1d4ed8, #2563eb)",
    color: "#fff"
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    width: "100%",
    flexWrap: "wrap",
    gap: "40px"
  },

  textBox: {
    flex: 1,
    minWidth: "280px"
  },

  smallText: {
    color: "#93c5fd",
    fontSize: "18px",
    marginBottom: "10px"
  },

  name: {
    fontSize: "52px",
    fontWeight: "800",
    margin: "10px 0",
    background: "linear-gradient(90deg, #60a5fa, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  role: {
    fontSize: "18px",
    color: "#bfdbfe",
    marginBottom: "15px"
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#e0f2fe",
    maxWidth: "500px"
  },

  buttons: {
    marginTop: "25px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  },

  primaryBtn: {
    padding: "12px 22px",
    background: "linear-gradient(90deg, #2563eb, #60a5fa)",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "10px",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(37,99,235,0.3)"
  },

  secondaryBtn: {
    padding: "12px 22px",
    border: "1px solid #93c5fd",
    color: "#93c5fd",
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
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "5px solid rgba(96,165,250,0.6)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
  }
};

export default Hero;