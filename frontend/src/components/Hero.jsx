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
    padding: "80px 20px",
    background: "#0f172a",
    color: "#fff"
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    width: "100%",
    flexWrap: "wrap"
  },

  textBox: {
    flex: 1,
    minWidth: "280px"
  },

  smallText: {
    fontSize: "18px",
    marginBottom: "10px"
  },

  name: {
    fontSize: "42px",
    fontWeight: "bold",
    margin: "10px 0"
  },

  role: {
    fontSize: "20px",
    color: "#38bdf8",
    marginBottom: "15px"
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.6",
    maxWidth: "500px"
  },

  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "10px"
  },

  primaryBtn: {
    padding: "10px 20px",
    background: "#38bdf8",
    color: "#000",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold"
  },

  secondaryBtn: {
    padding: "10px 20px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "6px"
  },

  imageBox: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "280px"
  },

  image: {
    width: "280px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "3px solid #38bdf8"
  }
};

export default Hero;