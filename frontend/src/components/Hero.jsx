import React from "react";

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.container}>
        
        <p style={styles.smallText}>Hello, my name is</p>

        <h1 style={styles.name}>
          Willy Mwangamnje
        </h1>

        <h2 style={styles.role}>
          Data Scientist | Data Analyst | Web Developer
        </h2>

        <p style={styles.desc}>
          I build data-driven solutions using Python, SQL, Power BI and modern web technologies.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>View Projects</button>
          <button style={styles.secondaryBtn}>Contact Me</button>
        </div>

      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    textAlign: "center",
    padding: "20px"
  },

  container: {
    maxWidth: "700px"
  },

  smallText: {
    fontSize: "16px",
    color: "#38bdf8",
    marginBottom: "10px"
  },

  name: {
    fontSize: "50px",
    margin: "10px 0",
    fontWeight: "bold"
  },

  role: {
    fontSize: "22px",
    color: "#cbd5e1",
    marginBottom: "15px"
  },

  desc: {
    fontSize: "16px",
    color: "#94a3b8",
    marginBottom: "25px"
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },

  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#38bdf8",
    border: "none",
    borderRadius: "5px",
    color: "black",
    cursor: "pointer",
    fontWeight: "bold"
  },

  secondaryBtn: {
    padding: "10px 20px",
    backgroundColor: "transparent",
    border: "1px solid #38bdf8",
    borderRadius: "5px",
    color: "#38bdf8",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default Hero;