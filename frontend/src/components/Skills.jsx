import React from "react";

function Skills() {
  return (
    <section id="skills" style={{ background: "#0f172a", padding: "80px 0", color: "white" }}>
      <div className="container">

        <h2 className="text-center text-info mb-5">My Skills</h2>

        <div className="row">

          {/* PYTHON */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-dark rounded">
              <h5>Python</h5>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "90%" }}>
                  90%
                </div>
              </div>
            </div>
          </div>

          {/* SQL */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-dark rounded">
              <h5>SQL</h5>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "85%" }}>
                  85%
                </div>
              </div>
            </div>
          </div>

          {/* POWER BI */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-dark rounded">
              <h5>Power BI</h5>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "80%" }}>
                  80%
                </div>
              </div>
            </div>
          </div>

          {/* EXCEL */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-dark rounded">
              <h5>Microsoft Excel</h5>
              <div className="progress">
                <div className="progress-bar bg-success" style={{ width: "95%" }}>
                  95%
                </div>
              </div>
              <small className="text-secondary">
                Advanced: Data cleaning, Pivot Tables, Charts, Dashboards
              </small>
            </div>
          </div>

          {/* REACT */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-dark rounded">
              <h5>React</h5>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "75%" }}>
                  75%
                </div>
              </div>
            </div>
          </div>

          {/* JAVASCRIPT */}
          <div className="col-md-6 mb-4">
            <div className="p-4 bg-dark rounded">
              <h5>JavaScript</h5>
              <div className="progress">
                <div className="progress-bar bg-info" style={{ width: "78%" }}>
                  78%
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;