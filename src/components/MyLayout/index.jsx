import React from 'react'
import { Layout, Menu, theme } from "antd";
import memuData from '../../state/memudata';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

function MyLayout(props) {
  const { children } = props || {};
  const navigate = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["aliInterview"]}
          items={memuData}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["/useStateDemo/demoListå"]}
            defaultOpenKeys={["/useStateDemo/demoList"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            onClick={({key})=>{
              navigate(key)
            }}
            items={memuData}
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default MyLayout;