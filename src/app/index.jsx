import React from 'react'
import { withRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import modules from '../modules'

import './scss/index.scss'

const { Content, Sider } = Layout

class App extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            title: 'react-hook-demo'
        }
    }

    render() {
        const { title } = this.state
        const { location: { pathname } } = this.props
        const currentModel = modules.find((item) => item.path === pathname)
        return (
            <Layout className="app-main">
                <Sider
                    theme="light"
                    className="app-sider"
                >
                    <div className="title">{title}</div>
                    <Menu mode="inline" defaultSelectedKeys={[currentModel ? currentModel.key : modules[0].key]}>
                        {
                            modules.map((component) => (
                                <Menu.Item
                                    key={component.key}>
                                    <NavLink
                                        replace
                                        className="nav-text"
                                        activeClassName="active"
                                        to={component.path}>
                                        {component.name}
                                    </NavLink>
                                </Menu.Item>
                            ))
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="app-content">
                        <Switch>
                            {
                                modules.map((component) => (
                                    <Route
                                        key={component.key}
                                        path={component.path}
                                        render={(routeProps) => {
                                            const Component = component.component()
                                            return (<Component {...routeProps}></Component>)
                                        }} />
                                ))
                            }
                            <Redirect to={modules[0].path}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
App.propTypes = {
    location: PropTypes.object.isRequired
}

export default withRouter(App)
