import React, { useEffect } from "react";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";
import styles from "../Dashboard/Dashboard.module.css";

const Dashboard = () => {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  return (
    <div className="container-fluid" style={{ marginTop: "6%" }}>
      <div className="row">
        <div className="col-4">
          <div className={`${styles.cardStyle} card`}>
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "20px",
                // height: "20px",
              }}
            >
              <i
                className="fs-1 bi bi-people-fill px-sm-2"
                style={{
                  color: "white",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  backgroundColor: "black",
                  padding: "8px",
                }}
              ></i>
            </div>
            <div
              className="card-body d-flex flex-column"
              style={{ minHeight: "120px" }}
            >
              <div>
                <h5 className="card-title text-end">Registered Employees</h5>
                <h6 className="card-subtitle mb-2 text-muted text-end">
                  Registered Employees
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className={`${styles.cardStyle} card`}>
            <div style={{ position: "absolute", top: "-20px", left: "20px" }}>
              <i
                className="fs-1 bi bi-building px-sm-2"
                style={{
                  color: "white",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  backgroundColor: "#3b94ef",
                  padding: "8px",
                }}
              ></i>
            </div>
            <div
              className="card-body d-flex flex-column"
              style={{ minHeight: "120px" }}
            >
              <h5 className="card-title text-end">Listed Department</h5>
              <h6 className="card-subtitle mb-2 text-muted text-end">
                Listed Department
              </h6>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className={`${styles.cardStyle} card`}>
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "20px",
                height: "20px",
              }}
            >
              <i
                className="fs-1 bi bi-lungs px-sm-2"
                style={{
                  color: "white",
                  border: "1px solid grey",
                  borderRadius: "8px",
                  backgroundColor: "#60b664",
                  padding: "8px",
                }}
              ></i>
            </div>
            <div
              className="card-body d-flex flex-column"
              style={{ minHeight: "120px" }}
            >
              <h5 className="card-title text-end">Listed Leave Type</h5>
              <h6 className="card-subtitle mb-2 text-muted text-end">
                Listed Leave Type
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <h4
          className="card-title"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          Leave Details
        </h4>
        <div className="container mt-5">
          <div className="row">
            <div className="col-3">
              <div
                className={`${styles.cardStyle1} card`}
                style={{ minHeight: "120px" }}
              >
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title text-end">LEAVES APPLIED</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-end">
                      4
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className={`${styles.cardStyle1} card`}
                style={{ minHeight: "120px" }}
              >
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title text-end">NEW LEAVE REQUESTS</h5>
                    <h6 className="card-subtitle mb-2 text-muted text-end">
                      4
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className={`${styles.cardStyle1} card`}
                style={{ minHeight: "120px" }}
              >
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title text-end">
                      REJECTED LEAVE REQUESTS
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-end">
                      4
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className={`${styles.cardStyle1} card`}
                style={{ minHeight: "120px" }}
              >
                <div className="card-body d-flex flex-column">
                  <div>
                    <h5 className="card-title text-end">
                      APPROVED LEAVE REQUESTS
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted text-end">
                      4
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
