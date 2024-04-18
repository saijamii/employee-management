import React, { useEffect } from "react";
import { Table, Row, Col} from "antd";
import { UseDocumentTitle } from "../../Common/UseDocumentTitle";

const Request = () => {
  useEffect(() => {
    UseDocumentTitle(window.location.pathname);
  }, []);
  const columns = [
    {
      title: "Employee Id",
      dataIndex: "id",
      key: "id",
    },

    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      key: "mobile",
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

  return (
    <>
      <Row>
        <Col span={24}>
          <Row>
            <Col span={5}>
              <h4 style={{fontWeight:'bold'}}>Leave Request</h4>
            </Col>
            <Col span={2} offset={14}>
              {/* <Link to={"/app/addEmployee"}>
                <Button type="primary">Add</Button>
              </Link> */}
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={columns} dataSource={data} pagination={false} />
            </Col>
          </Row>
        </Col>
      </Row>

    </>
  );
};
export default Request;
