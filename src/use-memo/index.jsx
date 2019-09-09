import React, { useMemo, useState } from 'react'
import { Button } from 'antd'
import Content from '../content/index.jsx'

function getData({ page }){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(page + 1)
        }, 1000)
    })
}

function Demo1() {
    const [page, setPage] = useState(1)

    const request = useMemo(() => async () => {
        console.log('================================page:::', page)
        const result = await getData({
            page,
        })
        setPage(result)
    }, [page])
    return (
        <div>
            <p>当前page：{page}</p>
            <Button onClick={request}> 点击请求数据 </Button>
        </div>
    )
}

function Demo2() {
    const [page, setPage] = useState(1)

    const data = useMemo(() => page * 10, [])
    return (
        <div>
            <p>当前page：{page}</p>
            <p>当前data：{data}</p>
            <Button onClick={() => { setPage(page + 1) }}> 点击+1 </Button>
        </div>
    )
}

const pageModel = {
    demo1: <Demo1/>,
    demo2: <Demo2/>, 
}
function Main(){
    return (
        <Content models={pageModel}></Content>
    )
}
export default Main
