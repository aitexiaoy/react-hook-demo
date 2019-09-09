import React, { useState, useEffect } from 'react'

function App() {
    const [data, setData] = useState([])
    const getData = () => Promise.resolve([]) 
    useEffect(() => {
        getData().then((resule = []) => {
            setData(resule)
        })
    }, [setData])
    return (
        <div>
            <p>显示请求结果</p>
            {
                data.map((i) => (<span key={i}>{i}</span>))
            }
        </div>
    )
}

export default App
