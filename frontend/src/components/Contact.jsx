import React from "react";
import { FaWhatsapp, FaYoutube, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
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
            CONNECT WITH ME
          </span>

          <h2 className="fw-bold mt-2">Contact & Learning Platform</h2>

          <p style={{ color: "#94a3b8" }}>
            Data Analyst Instructor | YouTube Educator | Open for collaboration
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* WHATSAPP */}
          <div className="col-md-4">
            <a
              href="https://wa.me/255626618171"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                className="p-4 text-center h-100"
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  borderRadius: "18px",
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >

                <FaWhatsapp size={40} color="#25D366" />

                <h5 className="mt-3">WhatsApp</h5>

                <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                  Quick response for training, mentorship or collaboration
                </p>

                <span style={{ color: "#22c55e", fontWeight: "600" }}>
                  Chat Now
                </span>

              </div>
            </a>
          </div>

          {/* EMAIL */}
          <div className="col-md-4">
            <a
              href="mailto:willymwanganje@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <div
                className="p-4 text-center h-100"
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(96,165,250,0.3)",
                  borderRadius: "18px",
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >

                <MdEmail size={40} color="#60a5fa" />

                <h5 className="mt-3">Gmail</h5>

                <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                  For professional communication & business inquiries
                </p>

                <span style={{ color: "#60a5fa", fontWeight: "600" }}>
                  Send Email
                </span>

              </div>
            </a>
          </div>

          {/* YOUTUBE */}
          <div className="col-md-4">
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                className="p-4 text-center h-100"
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  borderRadius: "18px",
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >

                <FaYoutube size={40} color="#FF0000" />

                <h5 className="mt-3">YouTube</h5>

                <p style={{ color: "#94a3b8", fontSize: "14px" }}>
                  Free Data Analysis tutorials & BI training courses
                </p>

                <span style={{ color: "#ef4444", fontWeight: "600" }}>
                  Watch Lessons
                </span>

              </div>
            </a>
          </div>

        </div>

        {/* INSTRUCTOR BADGE */}
        <div className="text-center mt-5">

          <div
            className="p-4 mx-auto"
            style={{
              maxWidth: "750px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(96,165,250,0.15)",
              borderRadius: "18px"
            }}
          >

            <FaGoogle size={28} color="#60a5fa" />

            <h5 className="fw-bold mt-3">
              Data Analyst Instructor & Mentor
            </h5>

            <p style={{ color: "#94a3b8" }}>
              I teach practical Data Analysis, Python, SQL, Excel, and Power BI
              through real-world projects on YouTube. Open for training, mentorship,
              and collaboration opportunities.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;