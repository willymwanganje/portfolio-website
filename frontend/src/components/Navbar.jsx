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
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",

    width: "fit-content",
    maxWidth: "95%",

    background: "rgba(15, 23, 42, 0.75)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",

    border: "1px solid rgba(96, 165, 250, 0.25)",
    borderRadius: "999px",

    padding: "10px 16px",
    zIndex: 1000,

    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",

    overflowX: "auto",   // 👈 IMPORTANT FIX
    whiteSpace: "nowrap" // 👈 IMPORTANT FIX
  },

  links: {
    display: "flex",
    gap: "18px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  },

  a: {
    textDecoration: "none",
    color: "#e2e8f0",
    fontSize: "13px",
    fontWeight: "500",
    padding: "6px 10px",
    borderRadius: "8px",
    whiteSpace: "nowrap" // 👈 prevents text breaking
  }
};

export default Navbar;