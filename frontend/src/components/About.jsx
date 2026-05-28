import React from "react";

function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        color: "#fff"
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span
            style={{
              color: "#60a5fa",
              letterSpacing: "3px",
              fontSize: "12px"
            }}
          >
            ABOUT ME
          </span>

          <h2 className="fw-bold mt-2">
            Passionate Data Scientist & Web Developer
          </h2>

          <p style={{ color: "#94a3b8" }}>
            Transforming data into insights and building modern digital solutions
          </p>
        </div>

        <div className="row align-items-center g-4">

          {/* LEFT TEXT */}
          <div className="col-lg-7">

            <div
              className="p-4 rounded-4"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(96,165,250,0.15)"
              }}
            >

              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#cbd5e1" }}>
                I am <strong style={{ color: "#60a5fa" }}>Willy Mwanganje</strong>, a final-year Data Science student at
                <strong> EASTC</strong>. I specialize in transforming raw data into meaningful insights and building modern web applications.
              </p>

              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#cbd5e1" }}>
                My skills include <strong>Python, SQL, Excel, Power BI, React, and Data Visualization</strong>.
                I enjoy solving real-world problems using data-driven approaches.
              </p>

              <p style={{ fontSize: "16px", lineHeight: "1.9", color: "#cbd5e1" }}>
                I am currently <strong style={{ color: "#22c55e" }}>actively seeking opportunities</strong> in Data Analysis,
                Data Science, and Web Development roles where I can contribute and grow.
              </p>

              {/* BADGE */}
              <div className="mt-4">
                <span
                  style={{
                    background: "rgba(34, 197, 94, 0.15)",
                    color: "#22c55e",
                    padding: "6px 12px",
                    borderRadius: "999px",
                    fontSize: "13px",
                    border: "1px solid rgba(34,197,94,0.3)"
                  }}
                >
                  ✔ Available for Internship / Full-time Work
                </span>
              </div>

            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="col-lg-5">

            <div
              className="p-4 rounded-4 text-center"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(96,165,250,0.15)"
              }}
            >

              <h4 style={{ color: "#60a5fa" }}>Quick Profile</h4>

              <div className="mt-3 text-start" style={{ color: "#cbd5e1" }}>
                <p>🎓 Final Year Data Science Student</p>
                <p>🏫 EASTC (Tanzania)</p>
                <p>📊 Data Analyst & Visualization</p>
                <p>💻 React & Web Development</p>
                <p>📍 Dar es Salaam, Tanzania</p>
              </div>

              <hr style={{ borderColor: "#1f2937" }} />

              <p style={{ color: "#94a3b8", fontStyle: "italic" }}>
                “I turn data into decisions that drive impact.”
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;