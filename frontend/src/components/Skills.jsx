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
            Tools I use for Data Analysis, BI and Web Development
          </p>
        </div>

        <div className="row g-4">

          {/* PYTHON */}
          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <i className="bi bi-code-slash skill-icon text-primary"></i>
              <h5>Python</h5>
              <p>Data analysis, automation, machine learning basics</p>
            </div>
          </div>

          {/* SQL */}
          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <i className="bi bi-database skill-icon text-info"></i>
              <h5>SQL</h5>
              <p>Data querying, joins, database management</p>
            </div>
          </div>

          {/* POWER BI */}
          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <i className="bi bi-bar-chart-line skill-icon text-success"></i>
              <h5>Power BI</h5>
              <p>Interactive dashboards & business intelligence</p>
            </div>
          </div>

          {/* EXCEL */}
          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <i className="bi bi-file-earmark-excel skill-icon text-success"></i>
              <h5>Excel</h5>
              <p>Data cleaning, pivot tables, dashboards</p>
            </div>
          </div>

          {/* REACT */}
          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <i className="bi bi-layers skill-icon text-primary"></i>
              <h5>React</h5>
              <p>Modern responsive web applications</p>
            </div>
          </div>

          {/* JAVASCRIPT */}
          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <i className="bi bi-lightning-charge skill-icon text-warning"></i>
              <h5>JavaScript</h5>
              <p>Frontend logic and dynamic UI development</p>
            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .skill-card{
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(96,165,250,0.15);
          border-radius: 18px;
          padding: 25px;
          height: 100%;
          transition: 0.3s;
          cursor: pointer;
        }

        .skill-card:hover{
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }

        .skill-icon{
          font-size: 28px;
          margin-bottom: 12px;
        }

        .skill-card h5{
          font-weight: 700;
          margin-bottom: 10px;
        }

        .skill-card p{
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.6;
        }
      `}</style>

    </section>
  );
}

export default Skills;