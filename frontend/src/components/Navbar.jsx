import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.links}>
        <li><a href="#home" style={styles.a}>Home</a></li>
        <li><a href="#about" style={styles.a}>About</a></li>
        <li><a href="#skills" style={styles.a}>Skills</a></li>
        <li><a href="#projects" style={styles.a}>Projects</a></li>
        <li><a href="#qualifications" style={styles.a}>Qualifications</a></li>
        <li><a href="#contact" style={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "15px 30px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,

    // 🌟 GLASS EFFECT
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",

    borderBottom: "1px solid rgba(255,255,255,0.1)"
  },

  links: {
    display: "flex",
    listStyle: "none",
    gap: "25px",
    margin: 0,
    padding: 0
  },

  a: {
    textDecoration: "none",
    color: "#e2e8f0",
    fontSize: "15px",
    fontWeight: "500",
    transition: "0.3s"
  }
};

export default Navbar;