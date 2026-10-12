import React from "react";

function Qualifications() {
  return (
    <section
      id="qualifications"
      style={{
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        padding: "80px 0",
        color: "#fff"
      }}
    >
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <span style={{ color: "#60a5fa", letterSpacing: "3px", fontSize: "12px" }}>
            EDUCATION, EXPERIENCE & TRAINING
          </span>

          <h2 className="fw-bold mt-2">My Qualifications</h2>

          <p style={{ color: "#94a3b8" }}>
            Academic background, professional experience, and practical training in Data Science and Development
          </p>
        </div>

        <div className="row justify-content-center g-4">

          {/* CARD 1: EDUCATION */}
          <div className="col-lg-8">
            <div className="qual-card">

              <i className="bi bi-mortarboard-fill text-primary fs-3"></i>

              <h5 className="fw-bold mt-3" style={{ color: "#60a5fa" }}>
                Bachelor of Data Science
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px" }}>
                Eastern Africa Statistical Training Centre (EASTC)
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7" }}>
                Graduated with a focus on data analysis, statistical modeling,
                and data-driven decision-making using modern tools and techniques.
              </p>

              <span className="badge bg-primary">
                2023 - 2026
              </span>

            </div>
          </div>

          {/* CARD 2: CURRENT INTERNSHIP */}
          <div className="col-lg-8">
            <div className="qual-card">

              <i className="bi bi-clipboard-data-fill text-success fs-3"></i>

              <h5 className="fw-bold mt-3" style={{ color: "#60a5fa" }}>
                Monitoring, Evaluation and Learning (MEL) Officer (Intern)
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px" }}>
                Rice Council of Tanzania (RCT)
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7" }}>
                Current internship providing professional experience in Monitoring, Evaluation and Learning (MEL).
              </p>

              <span className="badge bg-success">
                August 2026 - Present
              </span>

            </div>
          </div>

          {/* CARD 3: DATA ANALYSIS TRAINING */}
          <div className="col-lg-8">
            <div className="qual-card">

              <i className="bi bi-bar-chart-line-fill text-info fs-3"></i>

              <h5 className="fw-bold mt-3" style={{ color: "#60a5fa" }}>
                Data Analysis Training
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px" }}>
                Python • SQL • Power BI • Excel
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7" }}>
                Hands-on training in data cleaning, visualization, dashboard creation,
                and business intelligence reporting for real-world datasets.
              </p>

              <span className="badge bg-info text-dark">
                Academic & Practical Projects
              </span>

            </div>
          </div>

          {/* CARD 4: WEB DEVELOPMENT */}
          <div className="col-lg-8">
            <div className="qual-card">

              <i className="bi bi-code-slash text-success fs-3"></i>

              <h5 className="fw-bold mt-3" style={{ color: "#60a5fa" }}>
                Web Development Skills
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px" }}>
                React • Bootstrap • JavaScript
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7" }}>
                Built responsive portfolio websites and interactive UI components
                using modern frontend technologies.
              </p>

              <span className="badge bg-success">
                Portfolio Projects
              </span>

            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .qual-card{
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(96,165,250,0.15);
          border-radius: 18px;
          padding: 25px;
          transition: 0.3s;
          cursor: pointer;
        }

        .qual-card:hover{
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }
      `}</style>

    </section>
  );
}

export default Qualifications;
