import React from "react";
import { Card } from "react-bootstrap";
import styles from "../../StyleSheet/leaveType.css";

const LeaveType = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <Card>
            <Card.Body>
              <Card.Title className="first">Casual</Card.Title>
              <Card.Text>
                <i
                  class="bi bi-umbrella-fill"
                  style={{ marginLeft: "53px", fontSize: "52px" }}
                  
                ></i>
              </Card.Text>
              <Card.Text className="align-sentace">Available : 10</Card.Text>
              <Card.Text className="align-Booked">Booked : 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <Card>
            <Card.Body>
              <Card.Title className="second">Compensatoryy</Card.Title>
              <Card.Text>
                <i
                  class="bi bi-person-plus"
                  style={{ marginLeft: "53px", fontSize: "52px" }}
                ></i>
              </Card.Text>
              <Card.Text className="align-sentace">Available : 10</Card.Text>
              <Card.Text className="align-Booked">Booked : 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <Card>
            <Card.Body>
              <Card.Title className="third">Earned Leves</Card.Title>
              <Card.Text>
                <i
                  class="bi bi-person-heart"
                  style={{ marginLeft: "53px", fontSize: "52px" }}
                ></i>
              </Card.Text>
              <Card.Text className="align-sentace">Available : 10</Card.Text>
              <Card.Text className="align-Booked">Booked : 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <Card>
            <Card.Body>
              <Card.Title className="fourth">Loss Of Pay</Card.Title>
              <Card.Text>
                <i
                  class="bi bi-calendar2-plus"
                  style={{ marginLeft: "53px", fontSize: "52px" }}
                ></i>
              </Card.Text>
              <Card.Text className="align-sentace">Available : 10</Card.Text>
              <Card.Text className="align-Booked">Booked : 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <Card>
            <Card.Body>
              <Card.Title className="fifth">Sick</Card.Title>
              <Card.Text>
                <i
                  class="bi bi-lungs-fill"
                  style={{ marginLeft: "53px", fontSize: "52px" }}
                ></i>
              </Card.Text>
              <Card.Text className="align-sentace">Available : 10</Card.Text>
              <Card.Text className="align-Booked">Booked : 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-2">
          <Card>
            <Card.Body>
              <Card.Title className="sixth">Paternity</Card.Title>
              <Card.Text>
                <i
                  class="bi bi-person-wheelchair"
                  style={{ marginLeft: "53px", fontSize: "52px" }}
                ></i>
              </Card.Text>
              <Card.Text className="align-sentace">Available : 10</Card.Text>
              <Card.Text className="align-Booked">Booked : 2</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LeaveType;
