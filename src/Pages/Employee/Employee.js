import React, { useEffect, useState } from "react";
import { Table, Row, Col, Modal, Input, Select, Form, Button } from "antd";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";
import { Link } from "react-router-dom";
const { Option } = Select;

const Employee = () => {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  const [showModal, setShowModal] = useState("");
  const columns = [
    {
      title: "Employee Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Profile",
      dataIndex: "profile",
      key: "profile",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "DOB",
      dataIndex: "dob",
      key: "dob",
    },
    {
      title: "DOJ",
      dataIndex: "doj",
      key: "doj",
    },
    {
      title: "Address",
      dataIndex: "adress",
      key: "adress",
    },

    {
      width: "10%",
      title: "Action",
      key: "action",
      render: () => {
        return (
          <>
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={openModal}
            >
              Edit
            </span>
            &nbsp;&nbsp;
            <span style={{ color: "red" }}>Delete</span>
          </>
        );
      },
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
    },
    {
      key: "2",
      name: "Jim Green",
    },
    {
      key: "3",
      name: "Joe Black",
    },
  ];
  const openModal = () => {
    setShowModal(true);
  };
  const cancelModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={5} offset={1}>
              <h4>Employee Details</h4>
            </Col>
            <Col span={2} offset={14}>
              <Link to={"/app/addEmployee"}>
                <Button type="primary">Add</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={data} pagination={false} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Edit Employee"
        open={showModal}
        onOk={openModal}
        onCancel={cancelModal}
        footer={null}
      >
        <Form name="basic">
          <span style={{ fontSize: "10px" }}>Employee Id</span>
          <Form.Item
            name="department"
            rules={[
              {
                required: true,
                message: "Please Select Department",
              },
            ]}
          >
            <Input placeholder="Enter Id" />
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Employee Name</span>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please Enter Name",
              },
            ]}
          >
            <Input placeholder="Enter Name" />
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Department</span>
          <Form.Item
            name="department"
            rules={[
              {
                required: true,
                message: "Please Select Department",
              },
            ]}
          >
            <Select
              placeholder="Please Select Department"
              style={{ width: "100%", height: "40px" }}
            >
              <Option>EEE</Option>
              <Option>ECE</Option>
              <Option>IT</Option>
            </Select>
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Email</span>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please Enter Email",
              },
            ]}
          >
            <Input placeholder="Enter Email" />
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Phone Number</span>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please Enter Phone",
              },
            ]}
          >
            <Input placeholder="Enter Phone Number" />
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Date of Birth</span>
          <Form.Item
            name="dob"
            rules={[
              {
                required: true,
                message: "Please Enter ",
              },
            ]}
          >
            <Input placeholder="Enter " />
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Date of Joining</span>
          <Form.Item
            name="doj"
            rules={[
              {
                required: true,
                message: "Please Enter",
              },
            ]}
          >
            <Input placeholder="Enter" />
          </Form.Item>
          <span style={{ fontSize: "10px" }}>Address</span>
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Please Enter Address",
              },
            ]}
          >
            <Input placeholder="Enter Address" />
          </Form.Item>
          <Form.Item>
            <Row justify={"end"} gutter={[20, 20]}>
              <Col span={4}>
                <Button
                  style={{
                    fontWeight: "bold",
                    borderRadius: "5px",
                    height: "35px",
                  }}
                  onClick={cancelModal}
                >
                  Cancel
                </Button>
              </Col>
              <Col span={4}>
                <Button
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "#0048c6",
                    borderRadius: "5px",
                    height: "35px",
                  }}
                  htmlType="submit"
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default Employee;
