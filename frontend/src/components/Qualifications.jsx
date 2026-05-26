import React from "react";

function Qualifications() {
  return (
    <section id="qualifications" style={{ background: "#0f172a", padding: "80px 0", color: "white" }}>
      <div className="container">

        <h2 className="text-center text-info mb-5">Qualifications</h2>

        <div className="row justify-content-center">

          <div className="col-md-8">

            <div className="p-4 bg-dark rounded mb-3">
              <h5>Bachelor of Data Science</h5>
              <p className="text-secondary mb-0">
                Eastern Africa Statistical Training Centre (EASTC)
              </p>
              <small className="text-info">2023 - 2026 (Final Year)</small>
            </div>

            <div className="p-4 bg-dark rounded mb-3">
              <h5>Data Analysis Training</h5>
              <p className="text-secondary mb-0">
                Python, SQL, Power BI, Excel
              </p>
              <small className="text-info">Academic & Practical Projects</small>
            </div>

            <div className="p-4 bg-dark rounded">
              <h5>Web Development Skills</h5>
              <p className="text-secondary mb-0">
                React, Bootstrap, JavaScript
              </p>
              <small className="text-info">Portfolio Projects</small>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Qualifications;