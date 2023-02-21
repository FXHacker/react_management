import React, { useState } from 'react';

import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

import MainMenu from '@/components/MainMenu'

const rootSubmenuKeys = ['page3', 'page4', 'page5'];
const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左边侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
                <MainMenu />
            </Sider>
            {/* 右边内容 */}
            <Layout className="site-layout">
                {/* 右边头部 */}
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Breadcrumb style={{ margin: '0 16px', lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                </Header>
                {/* 右边内容 */}
                <Content style={{ margin: '16px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        <Outlet />
                    </div>
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default Home;