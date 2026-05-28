import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";

function Projects() {
  return (
    <section
      id="projects"
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
            PORTFOLIO PROJECTS
          </span>

          <h2 className="fw-bold mt-2">My Data Science & BI Projects</h2>

          <p style={{ color: "#94a3b8" }}>
            Real-world analytics dashboards and machine learning projects
          </p>
        </div>

        <div className="row g-4">

          {/* PROJECT 1 */}
          <div className="col-lg-6">

            <div
              className="h-100"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              {/* IMAGE (NO CROP FIXED) */}
              <img
                src={project1}
                alt="Customer Churn Dashboard"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "contain",
                  background: "#0b1220",
                  padding: "12px",
                  borderBottom: "1px solid rgba(96,165,250,0.15)"
                }}
              />

              {/* CONTENT */}
              <div className="p-4">

                <h5 className="fw-bold">Customer Churn Analysis</h5>

                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7" }}>
                  Built a machine learning model to analyze telecom customer behavior
                  and predict churn. The project helps businesses improve customer retention
                  strategies using data-driven insights.
                </p>

                {/* TAGS */}
                <div className="d-flex gap-2 flex-wrap mt-3">

                  <span className="badge" style={{ background: "#2563eb" }}>
                    Python
                  </span>

                  <span className="badge" style={{ background: "#1d4ed8" }}>
                    Pandas
                  </span>

                  <span className="badge" style={{ background: "#0ea5e9" }}>
                    Machine Learning
                  </span>

                </div>

              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="col-lg-6">

            <div
              className="h-100"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                overflow: "hidden",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 25px 50px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              {/* IMAGE (NO CROP FIXED) */}
              <img
                src={project2}
                alt="HR Analytics Dashboard"
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "contain",
                  background: "#0b1220",
                  padding: "12px",
                  borderBottom: "1px solid rgba(96,165,250,0.15)"
                }}
              />

              {/* CONTENT */}
              <div className="p-4">

                <h5 className="fw-bold">HR Analytics Dashboard</h5>

                <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.7" }}>
                  Developed an HR analytics dashboard to analyze employee performance,
                  retention trends, and workforce insights using Power BI and Excel.
                </p>

                {/* TAGS */}
                <div className="d-flex gap-2 flex-wrap mt-3">

                  <span className="badge" style={{ background: "#16a34a" }}>
                    Power BI
                  </span>

                  <span className="badge" style={{ background: "#22c55e" }}>
                    Excel
                  </span>

                  <span className="badge" style={{ background: "#0ea5e9" }}>
                    Data Analysis
                  </span>

                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;