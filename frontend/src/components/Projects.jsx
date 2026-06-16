import React, { useState, useEffect } from "react";
// Import your images
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
// Project 3 visuals (ensure these files exist in your folder)
import project3_1 from "../assets/images/project3_1.png"; 
import project3_2 from "../assets/images/project3_2.png";
import project3_3 from "../assets/images/project3_3.png";
// Project 4 image
import project4 from "../assets/images/project4.png"; 

// Simple Carousel Component for Project Cards
const ProjectCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: "relative", width: "100%", height: "260px", overflow: "hidden" }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Visual ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            position: "absolute",
            top: 0,
            left: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 0.8s ease-in-out",
            background: "#0b1220",
            padding: "12px",
          }}
        />
      ))}
    </div>
  );
};

function Projects() {
  const projects = [
    {
      image: project1,
      title: "Customer Churn Analysis",
      alt: "Customer Churn Dashboard",
      description: "Built a machine learning model to analyze telecom customer behavior and predict churn. Helps businesses improve retention strategies using data-driven insights.",
      tags: [
        { name: "Python", color: "#2563eb" },
        { name: "Pandas", color: "#1d4ed8" },
        { name: "ML", color: "#0ea5e9" }
      ]
    },
    {
      image: project2,
      title: "HR Analytics Dashboard",
      alt: "HR Analytics Dashboard",
      description: "Developed an HR analytics dashboard to analyze employee performance, retention trends, and workforce insights using Power BI and Excel.",
      tags: [
        { name: "Power BI", color: "#16a34a" },
        { name: "Excel", color: "#22c55e" }
      ]
    },
    {
      images: [project3_1, project3_2, project3_3], // Carousel images
      title: "Sales Performance Dashboard",
      description: "Interactive sales dashboard monitoring profit trends and regional insights. Features KPI tracking and visual analytics for data-driven decisions.",
      tags: [
        { name: "Power BI", color: "#f59e0b" },
        { name: "Sales Analytics", color: "#ea580c" }
      ]
    },
    {
      image: project4,
      title: "AutoInsight AI",
      link: "https://willy-data-ai.streamlit.app/",
      isLive: true,
      description: "A production-ready automated data analysis platform. It handles cleaning, EDA, and report generation automatically from uploaded CSV/Excel files.",
      tags: [
        { name: "Streamlit", color: "#ff4b4b" },
        { name: "Python", color: "#2563eb" },
        { name: "Automated EDA", color: "#8b5cf6" }
      ]
    }
  ];

  return (
    <section id="projects" style={{ background: "radial-gradient(circle at top, #0f172a, #020617 )", padding: "80px 0", color: "#fff" }}>
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: "#60a5fa", letterSpacing: "3px", fontSize: "12px" }}>PORTFOLIO PROJECTS</span>
          <h2 className="fw-bold mt-2">My Data Science & BI Projects</h2>
          <p style={{ color: "#94a3b8" }}>Real-world analytics dashboards and automated machine learning systems</p>
        </div>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6 col-xl-4" key={index}>
              <div className="h-100 d-flex flex-column" style={{ background: "rgba(15, 23, 42, 0.75)", border: "1px solid rgba(96,165,250,0.15)", borderRadius: "18px", overflow: "hidden", transition: "0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.5)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                
                {/* IMAGE OR CAROUSEL */}
                {project.images ? (
                  <ProjectCarousel images={project.images} />
                ) : (
                  <div style={{ position: "relative" }}>
                    <img src={project.image} alt={project.title} style={{ width: "100%", height: "260px", objectFit: "contain", background: "#0b1220", padding: "12px" }} />
                    {project.isLive && (
                      <span style={{ position: "absolute", top: "15px", right: "15px", background: "#ef4444", color: "white", padding: "4px 10px", borderRadius: "20px", fontSize: "10px", fontWeight: "bold" }}>● LIVE</span>
                    )}
                  </div>
                )}

                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5 className="fw-bold">{project.title}</h5>
                  <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6" }}>{project.description}</p>
                  
                  <div className="d-flex gap-2 flex-wrap mt-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge" style={{ background: tag.color, fontSize: "11px", fontWeight: "500" }}>{tag.name}</span>
                    ))}
                  </div>

                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-sm mt-auto" 
                       style={{ background: "#60a5fa", color: "#0f172a", fontWeight: "600", borderRadius: "8px" }}>
                      View Live System →
                    </a>
                  )}
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
