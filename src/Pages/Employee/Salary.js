import React, { useEffect, useState } from "react";
import { Row, Col, Table, Button, Modal, Form, Input, Popconfirm } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

export default function Salary() {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  console.log(searchItem, "searchItem");
  const [form] = Form.useForm();

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    UseDocumentTitle(window.location.pathname);
  });

  const dataSource = [
    {
      key: "1",
      employeeId: "1",
      basic: "10000",
      hra: "2000",
      conveyanceAllowance: "500",
      specialAllowance: "1000",
      month: "January",
      year: "2024",
      incomeTax: "500",
      providentFund: "800",
      gross: "14000",
      netPay: "12000",
    },
    {
      key: "2",
      employeeId: "2",
      basic: "10000",
      hra: "2000",
      conveyanceAllowance: "500",
      specialAllowance: "1000",
      month: "January",
      year: "2024",
      incomeTax: "500",
      providentFund: "800",
      gross: "14000",
      netPay: "12000",
    },
  ];

  const columns = [
    {
      title: "Employee ID",
      dataIndex: "employeeId",
      key: "employeeId",
    },
    {
      title: "BASIC",
      dataIndex: "basic",
      key: "basic",
    },
    {
      title: "HRA",
      dataIndex: "hra",
      key: "hra",
    },
    {
      title: "CONVEYANCE ALLOWANCE",
      dataIndex: "conveyanceAllowance",
      key: "conveyanceAllowance",
    },
    {
      title: "SPECIAL ALLOWANCE",
      dataIndex: "specialAllowance",
      key: "specialAllowance",
    },
    {
      title: "MONTH",
      dataIndex: "month",
      key: "month",
    },
    {
      title: "YEAR",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "INCOME TAX",
      dataIndex: "incomeTax",
      key: "incomeTax",
    },
    {
      title: "PROVIDENT FUND",
      dataIndex: "providentFund",
      key: "providentFund",
    },

    {
      title: "NET PAY",
      dataIndex: "netPay",
      key: "netPay",
    },
    {
      title: "ACTIONS",
      width: 150,
      fixed: window.screen.width > 1024 ? "right" : "",
      render: (record) => {
        return (
          <div>
            <span
              style={{ color: "blue", cursor: "pointer", marginRight: "8px" }}
              onClick={() => handleEdit(record)}
            >
              Edit
            </span>
            <Popconfirm
              title="Are you sure you want to delete this record?"
              onConfirm={() => handleDelete(record.key)}
              okText="Yes"
              cancelText="No"
            >
              <span style={{ color: "red", cursor: "pointer" }}>Delete</span>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const handleEdit = (record) => {
    setEditRecord(record);
    setEditModalVisible(true);
  };

  const handleSave = (values) => {
    console.log("Form values:", values);
    setEditModalVisible(false);
  };

  const handleCancel = () => {
    setEditModalVisible(false);
  };

  const handleDelete = (key) => {
    // Handle delete logic here
  };

  const handleAdd = (record) => {
    setEditRecord(record);
    setEditModalVisible(true);
  };

  return (
    <div>
      <Col span={24}>
        <Row justify="space-between">
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
            <h1 style={{ fontSize: "30px" }}>Salary</h1>
          </Col>
          <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={24}>
            <Row justify="end" gutter={[16, 16]}>
              <Col>
                <Button
                  style={{ marginRight: "10px" }}
                  className="buttonBorder-add"
                  onClick={handleAdd}
                >
                  <PlusOutlined />
                  Add
                </Button>
              </Col>

              <Col xxl={10} xl={12} lg={16} md={16} sm={18} xs={20}>
                <Input
                  onChange={(e) => setSearchItem(e.target.value)}
                  placeholder="Search...."
                  prefix={<SearchOutlined className="colltable-search" />}
                  className="collapse-btntitle"
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>

      <div data-aos="fade-right">
        <Table
          dataSource={dataSource}
          scroll={{ y: "80vh", x: "180vh" }}
          columns={columns}
          bordered
          pagination={false}
          sortDirections={["ascend", "descend" || "descend", "ascend"]}
          sticky={true}
        />
      </div>

      <Modal
        maskClosable={false}
        title={editRecord ? "Edit Salary" : "Add Salary"}
        open={editModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button
            style={{
              borderRadius: "5px",
              backgroundColor: "red",
              color: "white",
            }}
            key="cancel"
            onClick={handleCancel}
          >
            Cancel
          </Button>,
          <Button
            style={{ borderRadius: "5px", backgroundColor: "green" }}
            key="save"
            type="primary"
            onClick={handleSave}
          >
            Save
          </Button>,
        ]}
      >
        <Form form={form}>
          {editRecord &&
            columns.map((column) => (
              <Form.Item
                key={column.dataIndex}
                label={column.title}
                name={column.dataIndex}
                initialValue={editRecord[column.dataIndex]}
                rules={[
                  { required: true, message: `${column.title} is required` },
                ]}
              >
                <Input />
              </Form.Item>
            ))}
        </Form>
      </Modal>
    </div>
  );
}
