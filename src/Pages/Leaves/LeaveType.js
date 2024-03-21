import React, { useEffect, useState } from "react";
import { Card, Modal, Button, Row, Col, Table, Form, Input } from "antd";
import Causal from "../../Images/casual.jpeg";
import Comp from "../../Images/comp.jpeg";
import Earned from "../../Images/earned.jpeg";
import Loss from "../../Images/loss.jpeg";
import Sick from "../../Images/sick.jpeg";
import Maternity from "../../Images/Maternity.jpeg";
import "../../StyleSheet/LeaveType.css";

const LeaveType = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Dates",
      dataIndex: "name",
    },
    {
      title: "Festivals",
      dataIndex: "age",
    },
    {
      title: "Slogans",
      dataIndex: "address",
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  return (
    <div>
      <Row gutter={24}>
        <Col span={4}>
          <Card title="Casual" bordered={false} onClick={showModal}>
            <img
              className="img-style"
              src={Causal}
              height="80px"
              width="120px"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
            <Modal
              title="Maternity Leave Booking"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null} // Removes the footer buttons (OK and Cancel)
            >
              <Form
              // Your form components and logic here
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                {/* Add more Form Items as needed */}

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Compensatory off" bordered={false}>
            <img className="img-style" src={Comp} height="80px" width="120px" />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Earned Leave" bordered={false}>
            <img
              className="img-style"
              src={Earned}
              height="80px"
              width="120px"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Loss of Pay" bordered={false}>
            <img className="img-style" src={Loss} height="80px" width="120px" />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Sick" bordered={false}>
            <img className="img-style" src={Sick} height="80px" width="120px" />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Maternity Leaves" bordered={false}>
            <img
              className="img-style"
              src={Maternity}
              height="80px"
              width="120px"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
      </Row>
      <Table
        className="table-design"
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 50,
        }}
        scroll={{
          y: 240,
        }}
      />
    </div>
  );
};

export default LeaveType;
