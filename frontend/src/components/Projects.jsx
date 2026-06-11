import React from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Customer Churn Analysis",
      alt: "Customer Churn Dashboard",
      description:
        "Built a machine learning model to analyze telecom customer behavior and predict churn. The project helps businesses improve customer retention strategies using data-driven insights.",
      tags: [
        { name: "Python", color: "#2563eb" },
        { name: "Pandas", color: "#1d4ed8" },
        { name: "Machine Learning", color: "#0ea5e9" }
      ]
    },
    {
      image: project2,
      title: "HR Analytics Dashboard",
      alt: "HR Analytics Dashboard",
      description:
        "Developed an HR analytics dashboard to analyze employee performance, retention trends, and workforce insights using Power BI and Excel.",
      tags: [
        { name: "Power BI", color: "#16a34a" },
        { name: "Excel", color: "#22c55e" },
        { name: "Data Analysis", color: "#0ea5e9" }
      ]
    },
    {
      image: project3,
      title: "Sales Performance Dashboard",
      alt: "Sales Dashboard",
      description:
        "Designed an interactive sales dashboard using Power BI to monitor sales performance, profit trends, top-performing products, customer segments, and regional insights. The dashboard enables data-driven business decisions through clear KPI tracking and visual analytics.",
      tags: [
        { name: "Power BI", color: "#f59e0b" },
        { name: "Sales Analytics", color: "#ea580c" },
        { name: "Dashboard Design", color: "#0ea5e9" }
      ]
    }
  ];

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
          <span
            style={{
              color: "#60a5fa",
              letterSpacing: "3px",
              fontSize: "12px"
            }}
          >
            PORTFOLIO PROJECTS
          </span>

          <h2 className="fw-bold mt-2">
            My Data Science & BI Projects
          </h2>

          <p style={{ color: "#94a3b8" }}>
            Real-world analytics dashboards and machine learning projects
          </p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-lg-4" key={index}>
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

                {/* IMAGE */}
                <img
                  src={project.image}
                  alt={project.alt}
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

                  <h5 className="fw-bold">
                    {project.title}
                  </h5>

                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "14px",
                      lineHeight: "1.7"
                    }}
                  >
                    {project.description}
                  </p>

                  {/* TAGS */}
                  <div className="d-flex gap-2 flex-wrap mt-3">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="badge"
                        style={{ background: tag.color }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;