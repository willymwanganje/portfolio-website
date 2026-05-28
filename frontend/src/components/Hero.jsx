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

              <span
                style={{
                  fontSize: "12px",
                  letterSpacing: "3px",
                  color: "#60a5fa"
                }}
              >
                DATA SCIENCE • DATA ANALYSIS • WEB DEVELOPMENT
              </span>

              <h1 className="fw-bold mt-3" style={{ fontSize: "42px", lineHeight: "1.2" }}>
                Transforming Data Into Insights & Building Modern Solutions
              </h1>

              <p className="mt-3" style={{ color: "#cbd5e1", fontSize: "16px", lineHeight: "1.9" }}>
                I specialize in Python, SQL, Power BI, Excel, and React to turn data into
                meaningful insights and build responsive web applications.
              </p>

              <p style={{ color: "#94a3b8", fontSize: "15px" }}>
                Focused on clarity, problem solving, and delivering real-world impact.
              </p>

            </div>

          </div>

          {/* IMAGE + BUTTONS */}
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

              {/* IMAGE */}
              <img
                src={profileImg}
                alt="profile"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  borderRadius: "14px"
                }}
              />

              {/* BUTTONS BELOW IMAGE */}
              <div className="mt-3 d-flex gap-2 justify-content-center flex-wrap">

                <a
                  href="#projects"
                  className="btn px-3 py-2 fw-semibold"
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
                  className="btn px-3 py-2 fw-semibold"
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

        </div>
      </div>
    </section>
  );
}

export default Hero;