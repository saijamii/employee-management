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
      <div className="table-data">
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Dates</th>
                <th scope="col">Festivals</th>
                <th scope="col">Slogans</th>
                <th scope="col">
                  <div class="btn-group">
                    <button
                      class="btn btn-secondary btn-sm dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Only Holidays
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <a class="dropdown-item" href="#">
                          Leaves
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Festival Leaves
                        </a>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 1-Jan
                </th>
                <td>New Year</td>
                <td>Otto</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 25-Dec
                </th>
                <td>Christmas</td>
                <td>Thornton</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 30-Nov
                </th>
                <td>Diwali</td>
                <td>Larry the Bird</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 24-Mar
                </th>
                <td>Holi</td>
                <td>Your slogan here</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 12-Apr
                </th>
                <td>Eid</td>
                <td>Your slogan here</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 1-Jan
                </th>
                <td>New Year</td>
                <td>Otto</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 25-Dec
                </th>
                <td>Christmas</td>
                <td>Thornton</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"> </i> 30-Nov
                </th>
                <td>Diwali</td>
                <td>Larry the Bird</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  <i class="bi bi-calendar-check"></i> 24-Mar
                </th>
                <td>Holi</td>
                <td>Your slogan here</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"></i> 12-Apr
                </th>
                <td>Eid</td>
                <td>Your slogan here</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  <i class="bi bi-calendar-check"></i> 1-Jan
                </th>
                <td>New Year</td>
                <td>Otto</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"></i> 25-Dec
                </th>
                <td>Christmas</td>
                <td>Thornton</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  <i class="bi bi-calendar-check"></i> 30-Nov
                </th>
                <td>Diwali</td>
                <td>Larry the Bird</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"></i> 24-Mar
                </th>
                <td>Holi</td>
                <td>Your slogan here</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">
                  {" "}
                  <i class="bi bi-calendar-check"></i>12-Apr
                </th>
                <td>Eid</td>
                <td>Your slogan here</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveType;
