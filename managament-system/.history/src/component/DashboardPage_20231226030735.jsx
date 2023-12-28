import React, { useState } from "react";
import "./DashboardPage.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FieldTimeOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Layout, Menu as AntMenu, Row, Col, Avatar, Select } from "antd";
const { Header, Sider, Content } = Layout;
const { Option } = Select;

const { Item } = AntMenu;

const DashboardPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedHomework, setSelectedHomework] = useState(null);

  const options = ["Back-end", "Front-end", "Tester", "Design", "Saler"];
  const homeworkOptions = ["Homework 1", "Homework 2", "Homework 3"];

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const handleHomeworkChange = (value) => {
    setSelectedHomework(value);
  };

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "List of options",
      children: options.map((option, index) => ({
        key: `${index + 1}`,
        label: option,
      })),
    },
    {
      key: "2",
      icon: <BookOutlined />,
      label: "Homework",
      children: homeworkOptions.map((homework, index) => ({
        key: `h${index + 1}`,
        label: homework,
      })),
    },
    {
      key: "3",
      icon: <FieldTimeOutlined />,
      label: "Internship Duration",
    },
  ];

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <AntMenu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            {items.map((item) => (
              <Item key={item.key} icon={item.icon} label={item.label}>
                {item.children && item.children.length > 0 && (
                  <Select
                    style={{ width: "100%" }}
                    placeholder={`Select ${item.label.toLowerCase()}`}
                    onChange={
                      item.key === "1"
                        ? handleOptionChange
                        : handleHomeworkChange
                    }
                    value={item.key === "1" ? selectedOption : selectedHomework}
                  >
                    {item.children.map((child) => (
                      <Option key={child.key} value={child.label}>
                        {child.label}
                      </Option>
                    ))}
                  </Select>
                )}
              </Item>
            ))}
          </AntMenu>
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
                  {selectedOption
                    ? ` ${selectedOption}`
                    : " Select an option"}{" "}
                  -
                  {selectedHomework
                    ? ` ${selectedHomework}`
                    : " Select homework"}
                </div>
              </Col>
            </Row>
          </Header>
          <Content className="Title">Content</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardPage;
