import React from "react";
import "./hero.css";
function About() {
  return (
    <section id="about" style={{ background: "#0b1220", color: "white", padding: "80px 0" }}>
      <div className="container">

        <div className="row align-items-center">

          {/* TEXT SIDE */}
          <div className="col-md-7">

            <h2 className="mb-4 text-info">About Me</h2>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              I am <strong>Willy Mwangamnje</strong>, a passionate Data Science student currently in the final stage
              of my Bachelor’s degree at the <strong>Eastern Africa Statistical Training Centre (EASTC)</strong>.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              I am just one month away from completing my studies, and during my academic journey,
              I have developed strong skills in <strong>data analysis, statistical modeling, data visualization,
              and web development</strong>.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              My passion lies in transforming raw data into meaningful insights that support decision-making
              in businesses, government, and research. I enjoy working with tools such as <strong>Python, SQL,
              Power BI, Excel, and React</strong>.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              I am actively seeking opportunities in <strong>Data Analysis, Data Science, and Software Development</strong>
              where I can apply my skills, grow professionally, and contribute to real-world impactful projects.
            </p>

          </div>

          {/* STATS SIDE */}
          <div className="col-md-5 text-center mt-4 mt-md-0">

            <div style={{
              background: "#111827",
              padding: "30px",
              borderRadius: "15px"
            }}>

              <h3 className="text-info">Quick Facts</h3>

              <p className="mt-3">🎓 Final Year Student</p>
              <p>🏫 EASTC (Data Science)</p>
              <p>📊 Data Analyst Skills</p>
              <p>💻 Web Development (React)</p>
              <p>📍 Tanzania</p>

              <hr style={{ color: "#334155" }} />

              <p className="text-secondary">
                “Turning data into decisions is my passion.”
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;