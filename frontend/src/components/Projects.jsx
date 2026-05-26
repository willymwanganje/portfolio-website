import React from "react";

function Projects() {
  return (
    <section id="projects" style={{ background: "#0b1220", padding: "80px 0", color: "white" }}>
      <div className="container">

        <h2 className="text-center text-info mb-5">My Projects</h2>

        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="p-3 bg-dark rounded">
              <h5>Customer Churn Analysis</h5>
              <p>Analyzed telecom customer data to predict churn using Python and ML models.</p>
              <span className="badge bg-info text-dark">Python</span>
              <span className="badge bg-info text-dark ms-1">Pandas</span>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-3 bg-dark rounded">
              <h5>Sales Dashboard</h5>
              <p>Built interactive Power BI dashboard for business sales performance insights.</p>
              <span className="badge bg-info text-dark">Power BI</span>
              <span className="badge bg-info text-dark ms-1">Excel</span>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-3 bg-dark rounded">
              <h5>Web Portfolio Website</h5>
              <p>Developed a modern responsive portfolio using React and Bootstrap.</p>
              <span className="badge bg-info text-dark">React</span>
              <span className="badge bg-info text-dark ms-1">Bootstrap</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;