import React from "react";

function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: "radial-gradient(circle at top, #0f172a, #020617)",
        padding: "80px 0",
        color: "#fff"
      }}
    >
      <div className="container">

        {/* TITLE */}
        <div className="text-center mb-5">
          <span style={{ color: "#60a5fa", letterSpacing: "3px", fontSize: "12px" }}>
            TECHNICAL EXPERTISE
          </span>

          <h2 className="fw-bold mt-2">My Skills</h2>

          <p style={{ color: "#94a3b8" }}>
            Tools and technologies I use to build data-driven solutions
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="row g-4">

          {/* CARD */}
          {[
            {
              title: "Python",
              desc: "Data analysis, automation, machine learning basics",
              color: "#60a5fa"
            },
            {
              title: "SQL",
              desc: "Data querying, joins, database management",
              color: "#38bdf8"
            },
            {
              title: "Power BI",
              desc: "Interactive dashboards & business intelligence",
              color: "#22c55e"
            },
            {
              title: "Microsoft Excel",
              desc: "Data cleaning, pivot tables, dashboards",
              color: "#16a34a"
            },
            {
              title: "React",
              desc: "Modern responsive web applications",
              color: "#60a5fa"
            },
            {
              title: "JavaScript",
              desc: "Frontend logic and dynamic UI development",
              color: "#facc15"
            }
          ].map((skill, index) => (
            <div className="col-md-6 col-lg-4" key={index}>

              <div
                className="p-4 h-100"
                style={{
                  background: "rgba(15, 23, 42, 0.75)",
                  border: "1px solid rgba(96,165,250,0.15)",
                  borderRadius: "18px",
                  backdropFilter: "blur(12px)",
                  transition: "0.3s",
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(0,0,0,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >

                {/* ICON DOT */}
                <div
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: skill.color,
                    marginBottom: "12px"
                  }}
                />

                <h5 className="fw-bold">{skill.title}</h5>

                <p style={{ color: "#94a3b8", fontSize: "14px", marginTop: "10px" }}>
                  {skill.desc}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;