import React, { useState } from "react";
import {
  Card,
  Modal,
  Button,
  Row,
  Col,
  Form,
  Input,
  Select,
  DatePicker,
} from "antd";
import Causal from "../../Images/casual.jpeg";
import Comp from "../../Images/comp.jpeg";
import Earned from "../../Images/earned.jpeg";
import Loss from "../../Images/loss.jpeg";
import Sick from "../../Images/sick.jpeg";
import Maternity from "../../Images/Maternity.jpeg";
import "../../StyleSheet/LeaveType.css";

const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const LeaveType = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [festivals] = useState([
    {
      name: "New Year",
      date: "January 1st",
      slogans: "Wishing you a Happy New Year!",
    },
    {
      name: "Valentine's Day",
      date: "February 14th",
      slogans: "Spread love and happiness!",
    },
    {
      name: "Easter",
      date: "April 4th",
      slogans: "Celebrate the joy of resurrection!",
    },
    {
      name: "Christmas",
      date: "December 25th",
      slogans: "Merry Christmas and Happy Holidays!",
    },
    {
      name: "Holi",
      date: "March 18th",
      slogans: "Splash colors of joy and happiness!",
    },
    {
      name: "Diwali",
      date: "October 28th",
      slogans: "Illuminate your life with happiness and prosperity!",
    },
    {
      name: "Thanksgiving",
      date: "November 25th",
      slogans: "Gratitude turns what we have into enough!",
    },
    { name: "Independence Day", date: "July 4th", slogans: "Proud to be free" },
    {
      name: "Navaratri",
      date: "October 7th - October 15th",
      slogans: "May goddess Durga bless you with strength and prosperity!",
    },
    {
      name: "Hanukkah",
      date: "November 28th - December 6th",
      slogans: "Wishing you a festival of lights filled with love and joy!",
    },
    {
      name: "Ramadan",
      date: "April 2nd - May 1st",
      slogans: "Ramadan Mubarak!",
    },
    {
      name: "Ganesh Chaturthi",
      date: "August 31st",
      slogans: "Lord Ganesha bless you with happiness and success!",
    },

    {
      name: "Day of the Dead",
      date: "November 1st - November 2nd",
      slogans: "Honoring the spirits of our loved ones!",
    },
    { name: "Eid al-Fitr", date: "May 2nd", slogans: "Eid Mubarak!" },
    {
      name: "Raksha Bandhan",
      date: "August 22nd",
      slogans: "Celebrate the bond of love and protection!",
    },
    {
      name: "Onam",
      date: "August 22nd",
      slogans: "May the spirit of Onam fill your home with joy and prosperity!",
    },
    {
      name: "Pongal",
      date: "January 15th",
      slogans: "Pongalo Pongal! Wishing you prosperity and happiness!",
    },
    {
      name: "Makar Sankranti",
      date: "January 14th",
      slogans: "Wishing you a harvest of happiness and prosperity!",
    },
    {
      name: "Lohri",
      date: "January 13th",
      slogans: "Wishing you joy and warmth on Lohri!",
    },
    {
      name: "Baisakhi",
      date: "April 13th",
      slogans: "'Nanak Naam Chardi Kala, Tere Bhane Sarbat Da Bhala!",
    },
  ]);

  const convertToDate = (dateString) => {
    const parts = dateString.split(" ");
    const month = parts[0];
    const day = parseInt(parts[1]);
    return new Date(`${month} ${day}`);
  };

  // Sort festivals by month
  festivals.sort((a, b) => convertToDate(a.date) - convertToDate(b.date));

  console.log(festivals);

  const showModal = () => {
    setIsModalVisible(true);
  };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Col span={24}>
        <Row justify={"end"}>
          <Button
            onClick={showModal}
            style={{ backgroundColor: "#1677ff", color: "#fff" }}
          >
            Apply Leave
          </Button>
        </Row>
      </Col>
      <Row gutter={24} style={{ marginTop: "20px" }}>
        <Col span={4}>
          <Card title="Casual" bordered={false}>
            <img
              className="img-style"
              src={Causal}
              height="80px"
              width="120px"
              alt="Causal"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
            <Modal
              title="Leave Booking"
              visible={isModalVisible}
              onCancel={handleCancel}
              footer={null} // Removes the footer buttons (OK and Cancel)
            >
              <Form
              // Your form components and logic here
              >
                <span>employee ID</span>

                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please input your name!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <span>Leave Type</span>

                <Form.Item
                  name="leave_type"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Select>
                    <Option value="casual">Casual</Option>
                    <Option value="compensatory_off">Compensatory off</Option>
                    <Option value="earned_leave">Earned Leave</Option>
                    <Option value="loss_of_pay">Loss Of Pay</Option>
                    <Option value="sick">Sick Leave</Option>
                    <Option value="maternity">Maternity Leave</Option>
                  </Select>
                </Form.Item>
                <span>Date</span>
                <Form.Item
                  name="date"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <RangePicker style={{ width: "100%" }} />
                </Form.Item>
                <span>Team Email ID</span>
                <Form.Item
                  name="email_id"
                  rules={[
                    { required: true, message: "Please input your email!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <span>Reason for Leave</span>
                <Form.Item
                  name="Leave_reason"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Reason for Leave!",
                    },
                  ]}
                >
                  <TextArea style={{ width: "100%", borderRadius: "5px" }} />
                </Form.Item>
                {/* Add more Form Items as needed */}

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button style={{ marginLeft: "5px" }} onCancel={()=>setIsModalVisible(false)}>
                    Cancel
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Compensatory off" bordered={false}>
            <img
              className="img-style"
              src={Comp}
              height="80px"
              width="120px"
              alt="Comp"
            />
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
              alt="Earned"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Loss of Pay" bordered={false}>
            <img
              className="img-style"
              src={Loss}
              height="80px"
              width="120px"
              alt="Loss"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
        <Col span={4}>
          <Card title="Sick" bordered={false}>
            <img
              className="img-style"
              src={Sick}
              height="80px"
              width="120px"
              alt="Sick"
            />
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
              alt="Maternity"
            />
            <Col className="design">
              <Col>Available : 1.5</Col>
              <Col>Booked : 0</Col>
            </Col>
          </Card>
        </Col>
      </Row>
      <div className="festivals-table-container">
        <table className="festivals-table">
          <thead>
            <tr>
              <th>Festival</th>
              <th>Date</th>
              <th>slogans</th>
            </tr>
          </thead>
          <tbody>
            {festivals.map((festival, index) => (
              <tr key={index}>
                <td>{festival.name}</td>
                <td>{festival.date}</td>
                <td>{festival.slogans}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveType;
