import React, { useState } from "react";
import "./DashboardPage.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FieldTimeOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row, Col, Avatar, Select } from "antd";
const { Header, Sider, Content } = Layout;
const { Option } = Select;

function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedTrainee, setSelectedTrainee] = useState(null);

  const trainees = ["Trainee 1", "Trainee 2", "Trainee 3"];

  const handleTraineeChange = (value) => {
    setSelectedTrainee(value);
  };

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />} label="List of trainees">
              <Select
                style={{ width: "100%" }}
                placeholder="Select a trainee"
                onChange={handleTraineeChange}
                value={selectedTrainee}
              >
                {trainees.map((trainee, index) => (
                  <Option key={index} value={trainee}>
                    {trainee}
                  </Option>
                ))}
              </Select>
            </Menu.Item>
            <Menu.Item key="2" icon={<BookOutlined />} label="Homework" />
            <Menu.Item
              key="3"
              icon={<FieldTimeOutlined />}
              label="Internship Duration"
            />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-backgound">
            <Row>
              <Col md={18}>
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </Col>
              <Col md={6}>
                <div>
                  <Avatar size="default" icon={<UserOutlined />} />
                  {selectedTrainee
                    ? ` ${selectedTrainee}`
                    : " Select a trainee"}
                </div>
              </Col>
            </Row>
          </Header>
          <Content className="Title">Content</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardPage;
