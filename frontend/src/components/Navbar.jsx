import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Willy Mwangamnje</h2>

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
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    backgroundColor: "#0f172a",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },

  logo: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#38bdf8"
  },

  links: {
    display: "flex",
    listStyle: "none",
    gap: "20px"
  },

  a: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px"
  }
};

export default Navbar;