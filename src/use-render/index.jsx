import React from 'react'
import { Button } from 'antd'
import Content from '../content/index.jsx'
import useMyReducer from './use-my-reducer'

const initialState = { count: 0 }

function reducer(state, action) {
    switch (action.type) {
    case 'increment':
        return { count: state.count + 1 }
    case 'decrement':
        return { count: state.count - 1 }
    default:
        throw new Error()
    }
}

function Demo1(){
    const [state, dispatch] = useMyReducer(reducer, initialState)
    // const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <div>
                Count:{state.count}
            <br></br>
            <Button onClick={() => dispatch({ type: 'increment' })}>+</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>-</Button>
        </div>
    )
}

const pageModel = {
    demo1: <Demo1/>,
}
function Main(){
    return (
        <Content models={pageModel}></Content>
    )
}
export default Main
