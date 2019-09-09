import React, { useContext, useState } from 'react'
import { Button } from 'antd'
import ContextStore from './content'

function Todo(){
    const value = useContext(ContextStore)
    console.log('================================子元素更新了')
    
    return (
        <div>
            <h5>子元素：{value}</h5>
        </div>
    )
}

function Main() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <ContextStore.Provider value={count}>
                <Todo />
            </ContextStore.Provider>
            <Button onClick={() => {
                setCount(count + 1)
            }}>点击+1</Button>
        </div>
   
    )
}


export default Main
