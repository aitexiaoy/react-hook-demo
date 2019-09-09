import React, { useState, useRef, useCallback } from 'react'
import { Button } from 'antd'
import Content from '../content/index.jsx'

function Demo1(){
    const [count, setCount] = useState(0)
    const [intervalId, setInterval] = useState()
    const start = () => {
        const id = setInterval(() => {
            setCount((i) => i + 1)
        }, 500)
        setInterval(id)
    }
    const clear = () => {
        clearInterval(intervalId)
    }
    return (
        <div >
            <h3>useRef-demo1</h3>
            <p>{count}</p>
            <Button onClick={start} type="button">开始计时</Button>
            <Button onClick={clear} type="button">结束计时</Button>
        </div>
    )
}

function Demo2(){
    const [count, setCount] = useState(0)
    const intervalIdRef = useRef(0)
    const start = () => {
        intervalIdRef.current = setInterval(() => {
            setCount((i) => i + 1)
        }, 500)
    }
    const clear = () => {
        clearInterval(intervalIdRef.current)
    }
    return (
        <div >
            <h3>useRef-demo2</h3>
            <p>{count}</p>
            <Button onClick={start} type="button">开始计时</Button>
            <Button onClick={clear} type="button">结束计时</Button>
        </div>
    )
}

function Demo3(){
    const [height, setHeight] = useState(0)
    const measuredRef = useCallback((node) => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height)
        }
    }, [])

    return (
        <div>
            <h3>useRef-demo3</h3>
            <h1 ref={measuredRef}>Hello, world</h1>
            <h2>h1的高为：{Math.round(height)}px</h2>
        </div>
    )
}

const pageModel = {
    demo1: <Demo1/>,
    demo2: <Demo2/>, 
    demo3: <Demo3/>,
}
function Main(){
    return (
        <Content models={pageModel}></Content>
    )
}
export default Main
