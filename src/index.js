import React from 'react'
import ReactDOM from 'react-dom'
import { Router, HashRouter } from 'react-router-dom'
import { createHashHistory } from 'history'
import App from './app/index.jsx'

import 'antd/dist/antd.css'

const customHistory = createHashHistory()

function Main(){
    return (<HashRouter>
        <Router history={customHistory}>
            <App/>
        </Router>
    </HashRouter>)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Main />, rootElement)
