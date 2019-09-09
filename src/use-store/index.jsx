import React, { useReducer } from 'react'

import { Store, reducer, initState } from './use-store'
import DemoA from './demo-a.jsx'
import DemoB from './demo-b.jsx'
import DemoC from './demo-c.jsx'

function Main(){
    const [state, dispatch] = useReducer(reducer, initState)
    return (
    // 在根结点注入全局state和dispatch方法
        <Store.Provider value={{ state, dispatch }}>
            <h2>DemoA</h2>
            <DemoA />
            <hr></hr>
            <h2>DemoB</h2>
            <DemoB />
            <hr></hr>
            <h2>DemoC</h2>
            <DemoC />
        </Store.Provider>
    )
}

export default Main
