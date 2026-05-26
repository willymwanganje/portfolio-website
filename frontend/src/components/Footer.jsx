import React from "react";

function Footer() {
  return (
    <footer style={{ background: "#020617", color: "white", padding: "30px 0" }}>
      <div className="container text-center">

        <h5 className="text-info">Willy Mwanganje</h5>

        <p className="text-secondary">
          Data Scientist | Data Analyst | Web Developer
        </p>

        <p className="text-secondary">
          © {new Date().getFullYear()} All Rights Reserved
        </p>

      </div>
    </footer>
  );
}

export default Footer;