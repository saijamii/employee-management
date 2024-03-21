import React, { useEffect, useState } from "react";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";
import { Table, Row, Col, Modal, Select, Form, Button } from "antd";
const { Option } = Select;

const Department = () => {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  const [showModal, setShowModal] = useState("");
  const columns = [
    {
      title: "Department Name",
      dataIndex: "name",
      key: "name",
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
              <h4>Department Details</h4>
            </Col>
            <Col span={2} offset={14}>
              <Button type="primary">Add</Button>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Table columns={columns} dataSource={data} pagination={false} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Edit Department"
        open={showModal}
        onOk={openModal}
        onCancel={cancelModal}
        footer={null}
      >
        <Form name="basic">
          <span style={{ fontSize: "10px" }}>Select Department</span>
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
export default Department;
