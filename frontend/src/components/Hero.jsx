import React from "react";
import profileImg from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1e3a8a, #0f172a, #020617)",
        color: "#fff",
        paddingTop: "100px",
        paddingBottom: "60px"
      }}
    >
      <div className="container">

        <div className="row align-items-center g-5">

          {/* TEXT SIDE */}
          <div className="col-lg-7">

            <span
              style={{
                fontSize: "12px",
                letterSpacing: "3px",
                color: "#60a5fa"
              }}
            >
              DATA SCIENCE • DATA ANALYSIS • WEB DEVELOPMENT
            </span>

            <h1 className="fw-bold mt-3" style={{ fontSize: "44px", lineHeight: "1.2" }}>
              Turning Data Into Insights & Building Modern Web Experiences
            </h1>

            <p className="mt-3" style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.8" }}>
              I use Python, SQL, Power BI, Excel, and React to create dashboards,
              analyze data, and build modern responsive web applications.
            </p>

            <div className="mt-4 d-flex gap-3 flex-wrap">

              <a
                href="#projects"
                className="btn btn-primary px-4 py-2 fw-semibold"
                style={{
                  background: "#2563eb",
                  border: "none",
                  boxShadow: "0 10px 25px rgba(37,99,235,0.3)"
                }}
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="btn px-4 py-2 fw-semibold"
                style={{
                  border: "1px solid #60a5fa",
                  color: "#60a5fa"
                }}
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* IMAGE SIDE */}
          <div className="col-lg-5 text-center">

            <div
              className="p-3 mx-auto"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(96,165,250,0.2)",
                borderRadius: "16px",
                maxWidth: "320px"
              }}
            >

              <img
                src={profileImg}
                alt="profile"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "12px" // 👈 square style (NOT circle)
                }}
              />

              <p className="mt-3 mb-0" style={{ color: "#94a3b8", fontSize: "13px" }}>
                Data Scientist • Analyst • Developer
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;