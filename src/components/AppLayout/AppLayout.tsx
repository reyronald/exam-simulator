import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import styled, { css } from 'react-emotion'

const Logo = styled('div')`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`
const trigger = css`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #1890ff;
  }
`

interface IS {
  readonly collapsed: boolean
}

export default class AppLayout extends React.Component<{}, IS> {
  public state = { collapsed: false }

  public toggle = () => {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }))
  }

  public render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Layout.Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
        >
          <Logo />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Layout.Header>
          <Layout.Content
            style={{
              background: '#fff',
              margin: '24px 16px',
              minHeight: 280,
              padding: 24,
            }}
          >
            Content
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}
