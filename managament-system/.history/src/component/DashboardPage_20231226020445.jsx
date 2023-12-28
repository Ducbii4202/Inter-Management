// import React from "react";
import React, { useState } from "react";
import "./DashboardPage.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  FieldTimeOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row, Col, Avatar } from "antd";
const { Header, Sider, Content } = Layout;

function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
  const items: MenuItem[] = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
  
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "List of trainees",
                option: <MenuItem></MenuItem>
              },
              {
                key: "2",
                icon: <BookOutlined />,
                label: "Homework",
              },
              {
                key: "3",
                icon: <FieldTimeOutlined />,
                label: "Internship Duration",
              },
            ]}
          />
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
                  <Avatar size="default" icon={<UserOutlined />}></Avatar>{" "}
                  Nguyen Duc Thanh
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
