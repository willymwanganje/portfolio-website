import React from "react";

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
            GET IN TOUCH
          </span>

          <h2 className="fw-bold mt-2">Contact Me</h2>

          <p style={{ color: "#94a3b8" }}>
            Let’s connect for opportunities, collaboration, or mentorship
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {/* WHATSAPP */}
          <div className="col-md-4">

            <div
              className="p-4 text-center h-100"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <div style={{ fontSize: "30px" }}>📱</div>

              <h5 className="mt-3">WhatsApp / Phone</h5>

              <p style={{ color: "#94a3b8" }}>
                Quick response for collaboration or job offers
              </p>

              <a
                href="https://wa.me/255626618171"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#22c55e", textDecoration: "none", fontWeight: "600" }}
              >
                +255 626 618 171
              </a>

            </div>
          </div>

          {/* EMAIL */}
          <div className="col-md-4">

            <div
              className="p-4 text-center h-100"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <div style={{ fontSize: "30px" }}>📧</div>

              <h5 className="mt-3">Email</h5>

              <p style={{ color: "#94a3b8" }}>
                For formal opportunities and professional communication
              </p>

              <a
                href="mailto:willymwanganje@gmail.com"
                style={{ color: "#60a5fa", textDecoration: "none", fontWeight: "600" }}
              >
                willymwanganje@gmail.com
              </a>

            </div>
          </div>

          {/* YOUTUBE */}
          <div className="col-md-4">

            <div
              className="p-4 text-center h-100"
              style={{
                background: "rgba(15, 23, 42, 0.75)",
                border: "1px solid rgba(96,165,250,0.15)",
                borderRadius: "18px",
                transition: "0.3s",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >

              <div style={{ fontSize: "30px" }}>🎥</div>

              <h5 className="mt-3">YouTube Channel</h5>

              <p style={{ color: "#94a3b8" }}>
                Free tutorials on Data Analysis, Python & BI tools
              </p>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#ef4444", textDecoration: "none", fontWeight: "600" }}
              >
                Watch Free Courses
              </a>

            </div>
          </div>

        </div>

        {/* CTA BOTTOM */}
        <div className="text-center mt-5">

          <div
            className="p-4 mx-auto"
            style={{
              maxWidth: "700px",
              background: "rgba(15, 23, 42, 0.6)",
              border: "1px solid rgba(96,165,250,0.15)",
              borderRadius: "18px"
            }}
          >

            <h5 className="fw-bold">Open for Opportunities</h5>

            <p style={{ color: "#94a3b8" }}>
              I am currently available for internships, freelance work, and full-time roles
              in Data Science, Data Analysis, and Web Development.
            </p>

            <a
              href="#"
              className="btn mt-2"
              style={{
                background: "#2563eb",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "10px"
              }}
            >
              Hire Me
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;