import React, { useState, useEffect } from 'react'
import { Button } from 'antd'
import Content from '../content/index.jsx'


function Demo1(){
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('================================Demo1-执行effect::', count)
        const interval = window.setInterval(() => {
            setCount((i) => i + 1)
            console.log('================================Demo1-定时器::', count)
        }, 1000)
        return () => {
            window.clearInterval(interval)
            console.log('================================Demo1-我卸载了:', interval)
        }
    }, [count])
    console.log('================================Demo1-我渲染了::', count)
    return (<div >
        <h3>useEffect-demo1</h3>
        <p>{count}</p>
    </div>)
}

function Demo2(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('==========================Demo2-hooks1')
        setCount(2)
    }, [])
    useEffect(() => {
        console.log('==========================Demo2-hooks2-value:::', count)
    })
    console.log('================================Demo2-我渲染了::', count)
    return (<div >
        <h3>useEffect-demo2</h3>
        <p>{count}</p>
    </div>)
}

function Demo3(){
    const [count, setCount] = useState(0)
      
    useEffect(() => {
        setTimeout(() => {
            console.log('================================Demo3::', count)
        }, 3000)
    })
      
    return (
        <div>
            <h3>useEffect-demo3</h3>
            <p>当前的count值：{count}</p>
            <Button onClick={() => setCount(count + 1)}>
                点击
            </Button>
        </div>
    )
}

class Demo4 extends React.PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            console.log('================================Demo4::', this.state.count)
        }, 3000)
    }
    
    render() {
        const { count } = this.state
        return (
            <div>
                <h3>useEffect-demo4</h3>
                <p>当前的count值：{count}</p>
                <Button onClick={() => this.setState({ count: count + 1 })}>
                点击
                </Button>
            </div>
        )
    }
}

function Demo5(){
    const [page, setPage] = useState(0)

    const getData = () => {
        window.setTimeout(() => {
            console.log('==========================Demo5::', page)
        }, 1000)
    }
      
    useEffect(() => {
        setPage(3) // 此处虽然改变了page，但是useEffect中没有依赖项，所以getData中的page仍然为3
        getData()
    }, [page])
      
    return (
        <div>
            <h3>useEffect-demo5</h3>
            <p>当前的page值：{page}</p>
            <Button onClick={() => setPage(page + 1)}>
                下一页
            </Button>
        </div>
    )
}

function Demo6(){
    const [page, setPage] = useState(0)

    const getData = () => {
        window.setTimeout(() => {
            setPage(10)
        }, 4000)
    }

    useEffect(() => {
        getData()
    }, [])
      
    return (
        <div>
            <h3>useEffect-demo6</h3>
            <p>当前的page值：{page}</p>
        </div>
    )
}

const pageModel = {
    demo1: <Demo1/>,
    demo2: <Demo2/>, 
    demo3: <Demo3/>,
    demo4: <Demo4/>,
    demo5: <Demo5/>,
    demo6: <Demo6/>,
}
function Main(){
    return (
        <Content models={pageModel}></Content>
    )
}
export default Main
