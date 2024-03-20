import React, { useEffect, useRef } from "react";
import { Col, Row, Form, Input, Button, Card, Divider } from "antd";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

const { TextArea } = Input;
export default function AddEmployee() {
  const [form] = Form.useForm();
  const formRef = useRef();
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);

  const onFinish = async (values) => {
    console.log(values, "values");
  };
  return (
    <Row justify="space-between" gutter={[16, 16]}>
      <Col span={24}>
        <Form onFinish={onFinish} id="myForm" form={form} ref={formRef}>
          <Card
            style={{
              backgroundColor: "#FFF",
              minWidth: "60vw",
            }}
          >
            <Row gutter={[16, 16]}>
              <Divider>
                <h1
                  style={{
                    fontSize: "20px",
                    marginTop: "5px",
                    marginBottom: "-15px",
                  }}
                >
                  Add New Employee
                </h1>
              </Divider>
            </Row>

            <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
              <>
                <Col xxl={8} md={8} sm={24} xs={24}>
                  <b className="add-names">First Name </b>
                  <span style={{ color: "red" }}>*</span>
                  <Form.Item
                    name={`firstName`}
                    rules={[
                      {
                        required: true,
                        pattern:
                          /^[a-zA-Z@~`!@#$%^&*()_\-=+\\';/?>.<,-\d\s]+$/i,
                        message: "Please enter a valid first name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Please enter first name"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
                <Col xxl={8} md={8} sm={24} xs={24}>
                  <b className="add-names">Last Name</b>
                  <Form.Item
                    name={`lastName`}
                    rules={[
                      {
                        required: true,
                        pattern:
                          /^[a-zA-Z@~`!@#$%^&*()_\-=+\\';/?>.<,-\d\s]+$/i,
                        message: "Please enter a valid last name",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Please enter last name"
                      className="form-input"
                    />
                  </Form.Item>
                </Col>
              </>

              {/* <Col xxl={8} md={8} sm={24} xs={24}>
                <Form.Item
                  name={`phone`}
                  rules={[
                    {
                      required: true,
                      message: "Please enter phone number",
                    },
                  ]}
                >
                  <ReactPhoneInput specialLabel={""} country={"th"} />
                </Form.Item>
              </Col> */}

              <Col xxl={8} md={8} sm={24} xs={24}>
                <b className="add-names">
                  Email
                  <span style={{ color: "red" }}>*</span>
                </b>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                    {
                      required: true,
                      message: "Please Enter Your Email",
                    },
                  ]}
                >
                  <Input
                    className="form-input"
                    placeholder="Please Enter Email"
                  />
                </Form.Item>
              </Col>
            </Row>

            <Divider />

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <b className="add-names">Commentss</b>
                <Form.Item name="notes">
                  <TextArea showCount style={{ height: 86 }} />
                </Form.Item>
              </Col>
            </Row>
            <Divider />

            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item type="submit" htmlType="submit">
                  <Col span={24}>
                    <Row className="add-row">
                      <Col>
                        <Button
                          className="add-cancel"
                          onClick={() => window.history.go(-1)}
                        >
                          Cancel
                        </Button>
                      </Col>
                      <Col>
                        <Button
                          className="sav-btn"
                          type="primary"
                          htmlType="submit"
                        >
                          Save
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Form>
      </Col>
    </Row>
  );
}
