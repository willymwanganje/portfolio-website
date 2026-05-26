import React from "react";

function About() {
  return (
    <section
      id="about"
      style={{
        background: "linear-gradient(135deg, #0b1220, #111827)",
        color: "white",
        padding: "80px 20px"
      }}
    >
      <div className="container">

        <div className="row align-items-center">

          {/* TEXT SIDE */}
          <div className="col-md-7">

            <h2 style={{ color: "#38bdf8", marginBottom: "20px" }}>
              About Me
            </h2>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              I am <strong>Willy Mwanganje</strong>, a dedicated and passionate Data Science student currently in the final stage of my Bachelor’s degree at the <strong>Eastern Africa Statistical Training Centre (EASTC)</strong>.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              I am about to complete my studies in the next month. Throughout my academic journey, I have built strong practical and theoretical skills in <strong>data analysis, statistical modeling, data visualization, and software development</strong>.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              I am passionate about transforming raw data into meaningful insights that support decision-making in business, government, and research environments. I enjoy working with tools such as <strong>Python, SQL, Excel, Power BI, and React</strong>.
            </p>

            <p style={{ fontSize: "17px", lineHeight: "1.8", color: "#cbd5e1" }}>
              My goal is to grow as a professional in <strong>Data Science, Data Analysis, and Software Development</strong>, while contributing to real-world impactful projects that solve real problems.
            </p>

          </div>

          {/* STATS SIDE */}
          <div className="col-md-5 text-center mt-4 mt-md-0">

            <div
              style={{
                background: "rgba(17, 24, 39, 0.9)",
                padding: "35px",
                borderRadius: "15px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
              }}
            >

              <h3 style={{ color: "#38bdf8" }}>Quick Facts</h3>

              <p className="mt-3">🎓 Final Year Student</p>
              <p>🏫 EASTC (Data Science)</p>
              <p>📊 Data Analyst Skills</p>
              <p>💻 Web Development (React)</p>
              <p>📍 Tanzania</p>

              <hr style={{ borderColor: "#334155" }} />

              <p style={{ color: "#94a3b8", fontStyle: "italic" }}>
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