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
        paddingTop: "110px",
        paddingBottom: "60px"
      }}
    >
      <div className="container">

        <div className="row align-items-center g-5">

          {/* TEXT CARD */}
          <div className="col-lg-7">

            <div
              className="p-4 p-md-5"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(96,165,250,0.2)",
                borderRadius: "18px",
                backdropFilter: "blur(12px)"
              }}
            >

              {/* TAG */}
              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "3px",
                  color: "#60a5fa"
                }}
              >
                DATA SCIENCE • DATA ANALYSIS • WEB DEVELOPMENT
              </span>

              {/* TITLE */}
              <h1 className="fw-bold mt-3" style={{ fontSize: "42px", lineHeight: "1.2" }}>
                Transforming Data Into Insights & Building Modern Digital Solutions
              </h1>

              {/* DESCRIPTION */}
              <p
                className="mt-3"
                style={{
                  color: "#cbd5e1",
                  fontSize: "16px",
                  lineHeight: "1.9"
                }}
              >
                I specialize in turning raw data into meaningful insights using Python,
                SQL, Excel, and Power BI, and building clean, responsive web applications
                with React.
              </p>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "15px",
                  lineHeight: "1.8"
                }}
              >
                I focus on clarity, accuracy, and practical solutions that support
                better decision-making in real-world environments.
              </p>

              {/* BUTTONS */}
              <div className="mt-4 d-flex gap-3 flex-wrap">

                <a
                  href="#projects"
                  className="btn px-4 py-2 fw-semibold"
                  style={{
                    background: "#2563eb",
                    color: "#fff",
                    borderRadius: "10px",
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
                    color: "#60a5fa",
                    borderRadius: "10px"
                  }}
                >
                  Contact Me
                </a>

              </div>

            </div>
          </div>

          {/* IMAGE CARD */}
          <div className="col-lg-5 text-center">

            <div
              className="p-3 mx-auto"
              style={{
                background: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(96,165,250,0.2)",
                borderRadius: "18px",
                maxWidth: "340px"
              }}
            >

              <img
                src={profileImg}
                alt="profile"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  borderRadius: "14px" // square modern look
                }}
              />

              <p className="mt-3 mb-0" style={{ color: "#94a3b8", fontSize: "13px" }}>
                Data Scientist • Data Analyst • Web Developer
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;