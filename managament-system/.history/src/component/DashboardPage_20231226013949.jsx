// import React from "react";
import React, { useState } from "react";
import "./DashboardPage.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Row, Col, Avatar } from "antd";
const { Header, Sider, Content } = Layout;

function DashboardPage() {
  const [collapsed, setCollapsed] = useState(false);
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
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Homework",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
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
          <Content>Content</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DashboardPage;
