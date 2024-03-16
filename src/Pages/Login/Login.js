import React, { useState } from "react";
import { Col, Row, Button, Card, Form, Input } from "antd";
import "../../StyleSheet/login.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

function Login() {
  const [formSignIn] = Form.useForm();
  const [formSignUp] = Form.useForm();
  const [signup, setSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const onFinishSignIn = async (values) => {
    console.log(values, "values");
    setLoading(true);
    setTimeout(() => {
      window.location.pathname = "/app/dashboard";
    }, 1500);
  };

  const onFinishSignUp = async (values) => {
    console.log(values, "values");
    setLoading(true);
    setTimeout(() => {
      window.location.pathname = "/app/dashboard";
    }, 1500);
  };

  return (
    <div className="login_background">
      <Col>
        {signup ? (
          <Row justify="center" align="middle" className="login-container">
            <Col span={24}>
              <Card
                className="login-card"
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 8, 0.2)",
                  backgroundColor: "#c7c8cc",
                  border: "transparent",
                }}
              >
                {/* <h1 className="login-title">Create account</h1> */}
                <Form
                  form={formSignUp}
                  onFinish={onFinishSignUp}
                  autoComplete="off"
                  className="login-form"
                >
                  <Col>
                    <span>
                      First Name<span style={{ color: "red" }}>*</span>
                    </span>
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your First Name!",
                        },
                      ]}
                    >
                      <Input placeholder="First Name" className="form-input" />
                    </Form.Item>
                  </Col>

                  <Col>
                    <span>
                      Last Name<span style={{ color: "red" }}>*</span>
                    </span>
                    <Form.Item
                      name="lastName"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Last Name!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Input Last Name"
                        className="form-input"
                      />
                    </Form.Item>
                  </Col>

                  <Col>
                    <span>
                      Email<span style={{ color: "red" }}>*</span>
                    </span>
                    <Form.Item
                      name="userId"
                      rules={[
                        {
                          required: true,
                          message: "Please Enter Your Email!",
                        },
                        {
                          type: "email",
                          message: "The Input Is Not Valid Email",
                        },
                      ]}
                    >
                      <Input
                        className="form-input"
                        autoComplete="on"
                        placeholder="Please Enter Your Email"
                        prefix={
                          <MailOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                  </Col>

                  <Col>
                    <span className="title_changes ">
                      Password<span style={{ color: "red" }}>*</span>
                    </span>

                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          pattern:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%#^*?&+=_-])[A-Za-z\d$@$!%*?&]/,
                          message:
                            "At least one  upperCase letter, At least one number and one special character!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        placeholder="Password"
                        autoComplete="new-password"
                        className="form-input"
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                  </Col>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={loading}
                    >
                      Submit Details
                    </Button>
                  </Form.Item>
                  <Col>
                    <Row justify={"space-between"}>
                      <span
                        style={{
                          cursor: "pointer",
                          color: "#4f46e5",
                          width: "100%",
                        }}
                        onClick={() => {
                          formSignIn.resetFields();
                          formSignUp.resetFields();
                          setSignUp(false);
                        }}
                      >
                        Back to Login
                      </span>
                    </Row>
                  </Col>
                </Form>
              </Card>
            </Col>
          </Row>
        ) : (
          <Row justify="center" align="middle" className="login-container">
            <Col span={24}>
              <Card
                className="login-card"
                style={{
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 8, 0.2)",
                  backgroundColor: "#c7c8cc",
                  border: "transparent",
                }}
              >
                <h1 className="login-title">Welcome back!</h1>
                <Form
                  form={formSignIn}
                  onFinish={onFinishSignIn}
                  autoComplete="off"
                  className="login-form"
                >
                  <Form.Item
                    name="userId"
                    rules={[
                      {
                        required: true,
                        message: "Please Enter Your Email!",
                      },
                      {
                        type: "email",
                        message: "The Input Is Not Valid Email",
                      },
                    ]}
                  >
                    <Input
                      className="form-input"
                      placeholder="Please Enter Your Email"
                      prefix={<MailOutlined className="site-form-item-icon" />}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      prefix={<LockOutlined className="site-form-item-icon" />}
                      type="password"
                      placeholder="Password"
                      autoComplete="on"
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      loading={loading}
                    >
                      Login
                    </Button>
                  </Form.Item>
                  Don't have an account?{" "}
                  <span
                    style={{
                      cursor: "pointer",
                      color: "#4f46e5",
                    }}
                    onClick={() => {
                      formSignIn.resetFields();
                      setSignUp(true);
                    }}
                  >
                    Signup
                  </span>
                </Form>
              </Card>
            </Col>
          </Row>
        )}
      </Col>
    </div>
  );
}

export default Login;
