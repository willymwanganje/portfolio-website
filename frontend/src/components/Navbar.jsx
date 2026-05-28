import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.links}>
        <li><a href="#home" style={styles.a}>Home</a></li>
        <li><a href="#about" style={styles.a}>About</a></li>
        <li><a href="#skills" style={styles.a}>Skills</a></li>
        <li><a href="#projects" style={styles.a}>Projects</a></li>
        <li><a href="#contact" style={styles.a}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: "18px",
    left: "50%",
    transform: "translateX(-50%)",

    background: "rgba(15, 23, 42, 0.65)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    border: "1px solid rgba(96, 165, 250, 0.25)",
    borderRadius: "999px",

    padding: "10px 18px",
    zIndex: 1000,

    boxShadow: "0 10px 30px rgba(0,0,0,0.35)"
  },

  links: {
    display: "flex",
    gap: "22px",
    listStyle: "none",
    margin: 0,
    padding: 0
  },

  a: {
    textDecoration: "none",
    color: "#e2e8f0",
    fontSize: "13px",
    fontWeight: "500",
    padding: "6px 10px",
    borderRadius: "8px",
    transition: "0.25s"
  }
};

export default Navbar;