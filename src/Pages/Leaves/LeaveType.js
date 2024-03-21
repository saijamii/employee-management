import React, { useEffect, useState } from "react";
import { Card, Modal, Button, Form } from "react-bootstrap";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";
// import styles from "../../StyleSheet/leaveType.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const LeaveType = () => {
   useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  const [showModal, setShowModal] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClose = () => setShowModal("");
  const handleShow = (value) => setShowModal(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <Card className="card-design all mt-5">
      <div className="container">
        <div className="row claass">
          <div className="col-md-2">
            <Card onClick={() => handleShow("Casual")}>
              <Card.Body>
                <Card.Title className="first">Casual</Card.Title>
                <Card.Text>
                  <i
                    className="bi bi-umbrella-fill"
                    style={{ marginLeft: "53px", fontSize: "52px" }}
                  ></i>
                </Card.Text>
                <Card.Text className="align-sentace">Available : 10</Card.Text>
                <Card.Text className="align-Booked">Booked : 2</Card.Text>
              </Card.Body>
            </Card>
            <Modal
              show={
                showModal === "Casual" ||
                showModal === "Compensatoryy" ||
                showModal === "Earned Leves" ||
                showModal === "Loss Of Pay" ||
                showModal === "Sick" ||
                showModal === "Paternity"
              }
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  {showModal === "Casual" && "Casual Leave"}
                  {showModal === "Compensatoryy" && "Compensatory Leave"}
                  {showModal === "Earned Leves" && "Earned Leaves"}
                  {showModal === "Loss Of Pay" && "Loss Of Pay"}
                  {showModal === "Sick" && "Sick Leave"}
                  {showModal === "Paternity" && "Paternity Leave"}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="employeeId">
                    <Form.Label>Employee ID:</Form.Label>
                    <Form.Control
                      type="texts"
                      placeholder="Enter Employee ID"
                    />
                  </Form.Group>

                  {/* <Form.Group controlId="leaveType">
                    <Form.Label style={{marginTop:"10px"}}>Leave Type:</Form.Label>
                    <Form.Control as="select">
                      <option>Select Leave Type</option>
                      <option>Casual Leave</option>
                      <option>Compensatory Leave</option>
                      <option>Earned Leves</option>
                      <option>Sick Leave</option>
                      <option>Loss Of Pay</option>
                      <option>Paternity</option>
                    </Form.Control>
                  </Form.Group> */}

                  <Form.Group controlId="startDate">
                    <Form.Label style={{ marginTop: "10px" }}>
                      Date: From
                    </Form.Label>
                    <br />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </Form.Group>

                  <Form.Group controlId="endDate">
                    <Form.Label style={{ marginTop: "10px" }}>
                      Date: End
                    </Form.Label>
                    <br />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                    />
                  </Form.Group>

                  <Form.Group controlId="teamEmailId">
                    <Form.Label style={{ marginTop: "10px" }}>
                      Team Email Id:
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Team Email Id"
                    />
                  </Form.Group>

                  <Form.Group controlId="reasonForLeave">
                    <Form.Label style={{ marginTop: "10px" }}>
                      Reason For Leave:
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter Reason For Leave"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="col-md-2">
            <Card onClick={() => handleShow("Compensatoryy")}>
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
            <Card onClick={() => handleShow("Earned Leves")}>
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
            <Card onClick={() => handleShow("Loss Of Pay")}>
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
            <Card onClick={() => handleShow("Sick")}>
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
            <Card onClick={() => handleShow("Paternity")}>
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
            <table className="table">
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
                          <a class="dropdown-item" href="/#">
                            Leaves
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="/#">
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
    </Card>
  );
};

export default LeaveType;
