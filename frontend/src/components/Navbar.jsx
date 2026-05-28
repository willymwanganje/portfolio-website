import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>Willy.dev</div>

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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 30px",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,

    background: "rgba(10, 15, 30, 0.75)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",

    borderBottom: "1px solid rgba(96, 165, 250, 0.25)"
  },

  logo: {
    color: "#60a5fa",
    fontSize: "18px",
    fontWeight: "800",
    letterSpacing: "1px"
  },

  links: {
    display: "flex",
    listStyle: "none",
    gap: "22px",
    margin: 0,
    padding: 0
  },

  a: {
    textDecoration: "none",
    color: "#e0f2fe",
    fontSize: "14px",
    fontWeight: "500",
    transition: "0.3s"
  }
};

export default Navbar;