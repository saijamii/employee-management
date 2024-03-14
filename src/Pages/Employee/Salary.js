import React, { useEffect } from "react";
import { Row, Col, Table } from "antd";

const Salary = () => {
  useEffect(() => {
    document.title = "salary";
  }, []);

  const dataSource = [
    {
      key: "1",
      employeeId: "1",
      basic: "10000",
      hra: "2000",
      conveyanceAllowance: "500",
      specialAllowance: "1000",
      educationAllowance: "00",
      professionalTax: "200",
      medicalAllowance: "300",
      month: "January",
      year: "2024",
      groupInsurance: "1000",
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
      educationAllowance: "00",
      professionalTax: "200",
      medicalAllowance: "300",
      month: "January",
      year: "2024",
      groupInsurance: "1000",
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
      width: 250,
    },
    {
      title: "BASIC",
      dataIndex: "basic",
      key: "basic",
      width: 250,
    },
    {
      title: "HRA",
      dataIndex: "hra",
      key: "hra",
      width: 250,
    },
    {
      title: "CONVEYANCE ALLOWANCE",
      dataIndex: "conveyanceAllowance",
      key: "conveyanceAllowance",
      width: 250,
    },
    {
      title: "SPECIAL ALLOWANCE",
      dataIndex: "specialAllowance",
      key: "specialAllowance",
      width: 250,
    },
    {
      title: "EDUCATION ALLOWANCE",
      dataIndex: "educationAllowance",
      key: "educationAllowance",
      width: 250,
    },
    {
      title: "PROFESSIONAL TAX",
      dataIndex: "professionalTax",
      key: "professionalTax",
      width: 250,
    },
    {
      title: "MEDICAL ALLOWANCE",
      dataIndex: "medicalAllowance",
      key: "medicalAllowance",
      width: 250,
    },
    {
      title: "MONTH",
      dataIndex: "month",
      key: "month",
      width: 250,
    },
    {
      title: "YEAR",
      dataIndex: "year",
      key: "year",
      width: 250,
    },
    {
      title: "GROUP INSURANCE",
      dataIndex: "groupInsurance",
      key: "groupInsurance",
      width: 250,
    },
    {
      title: "INCOME TAX",
      dataIndex: "incomeTax",
      key: "incomeTax",
      width: 250,
    },
    {
      title: "PROVIDENT FUND",
      dataIndex: "providentFund",
      key: "providentFund",
      width: 250,
    },
    {
      title: "GROSS",
      dataIndex: "gross",
      key: "gross",
      width: 250,
    },
    {
      title: "NET PAY",
      dataIndex: "netPay",
      key: "netPay",
      width: 250,
    },
  ];

  return (
    <div>
      <Row>
        <h1>Salary</h1>
      </Row>

      <Row>
        <Col span={24}>
          <Table
            dataSource={dataSource}
            columns={columns}
            bordered
            pagination={false}
            scroll={{ y: "80vh", x: "180vh" }}
            sortDirections={["ascend", "descend" || "descend", "ascend"]}
            sticky={true}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Salary;
