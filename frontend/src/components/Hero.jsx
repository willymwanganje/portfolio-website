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
    padding: "120px 20px 60px 20px", // 👈 FIX: kushuka chini ya navbar
    background: "#ffffff", // 👈 WHITE UI
    color: "#111827"
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
    marginBottom: "10px",
    color: "#6b7280"
  },

  name: {
    fontSize: "44px",
    fontWeight: "bold",
    margin: "10px 0"
  },

  role: {
    fontSize: "18px",
    color: "#2563eb",
    marginBottom: "15px"
  },

  desc: {
    fontSize: "16px",
    lineHeight: "1.7",
    maxWidth: "500px",
    color: "#374151"
  },

  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "12px"
  },

  primaryBtn: {
    padding: "10px 20px",
    background: "#111827",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px"
  },

  secondaryBtn: {
    padding: "10px 20px",
    border: "1px solid #111827",
    color: "#111827",
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
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "4px solid #e5e7eb"
  }
};

export default Hero;