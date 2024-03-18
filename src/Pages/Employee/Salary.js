import React, { useEffect } from "react";
import { Row, Col, Table } from "antd";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

export default function Salary() {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
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
            sortDirections={["ascend", "descend" || "descend", "ascend"]}
            sticky={true}
          />
        </Col>
      </Row>
    </div>
  );
}
