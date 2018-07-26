// tslint:disable
import { Icon, Layout, Menu } from 'antd'
import * as React from 'react'
import styled, { css } from 'react-emotion'
import { Link, Route, RouteComponentProps } from 'react-router-dom'
import Dashboard from '../Dashboard'

const Logo = styled('div')`
  height: 44px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;

  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  font-weight: 600;
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

export default class AppLayout extends React.Component<
  RouteComponentProps<{}>,
  IS
> {
  public state = { collapsed: false }

  public toggle = () => {
    this.setState(({ collapsed }) => ({ collapsed: !collapsed }))
  }

  public onBreakpoint = (broken: boolean) => {
    this.setState({ collapsed: broken })
  }

  public render() {
    const {
      location: { pathname },
    } = this.props

    return (
      <Layout style={{ minHeight: '100%' }}>
        <Layout.Sider
          trigger={null}
          collapsible={true}
          collapsed={this.state.collapsed}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={this.onBreakpoint}
        >
          <Link to="/">
            <Logo>Exam Simulator</Logo>
          </Link>
          <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
            <Menu.Item key="/nav1">
              <Link to="/nav1">
                <Icon type="user" />
                <span>nav 1</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/nav2" className="test">
              <Link to="/nav2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="/nav3">
              <Link to="/nav3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Link>
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
              background: 'transparent',
              margin: '24px 16px',
              minHeight: 280,
              padding: 24,
            }}
          >
            <Route exact={true} path="/" component={Dashboard} />
            <Route path="/nav1" render={() => 'nav1'} />
            <Route path="/nav2" render={() => 'nav2'} />
            <Route path="/nav3" render={() => 'nav3'} />
          </Layout.Content>
        </Layout>
      </Layout>
    )
  }
}
