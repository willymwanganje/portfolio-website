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
            EDUCATION & TRAINING
          </span>

          <h2 className="fw-bold mt-2">My Qualifications</h2>

          <p style={{ color: "#94a3b8" }}>
            Academic background and professional training in data science and development
          </p>
        </div>

        {/* CARDS */}
        <div className="row justify-content-center g-4">

          {/* CARD 1 */}
          <div className="col-lg-8">

            <div
              className="p-4"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <h5 className="fw-bold" style={{ color: "#60a5fa" }}>
                🎓 Bachelor of Data Science
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px", lineHeight: "1.7" }}>
                Eastern Africa Statistical Training Centre (EASTC)
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                Final-year student specializing in data analysis, statistical modeling,
                and data-driven decision making using modern tools and techniques.
              </p>

              <span className="badge" style={{ background: "#1d4ed8" }}>
                2023 - 2026 (Final Year)
              </span>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="col-lg-8">

            <div
              className="p-4"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <h5 className="fw-bold" style={{ color: "#60a5fa" }}>
                📊 Data Analysis Training
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px", lineHeight: "1.7" }}>
                Python • SQL • Power BI • Excel
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                Hands-on training in data cleaning, visualization, dashboard creation,
                and business intelligence reporting.
              </p>

              <span className="badge" style={{ background: "#0ea5e9" }}>
                Academic & Practical Projects
              </span>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="col-lg-8">

            <div
              className="p-4"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <h5 className="fw-bold" style={{ color: "#60a5fa" }}>
                💻 Web Development Skills
              </h5>

              <p style={{ color: "#cbd5e1", marginBottom: "6px", lineHeight: "1.7" }}>
                React • Bootstrap • JavaScript
              </p>

              <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                Built responsive portfolio websites and UI components using modern
                frontend technologies.
              </p>

              <span className="badge" style={{ background: "#22c55e" }}>
                Portfolio Projects
              </span>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Qualifications;