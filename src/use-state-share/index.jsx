import React, { useState } from 'react'
import { Button } from 'antd'
import useStateShare from './share-state'

function Demo1(){
    const [name, setName] = useStateShare('张三')
    return (<div className="use-state">
        <h3>{name}</h3>
        <div>
            <Button 
                onClick={() => {
                    setName(name === '张三' ? '李四' : '张三')
                }}>
                    更改名字
            </Button>
        </div>
      

    </div>)
}

function Demo2(){
    const [count, setCount] = useStateShare(0)
    return (
        <div>
            <h3>{count}</h3>
            <div>
                <Button 
                    onClick={() => {
                        setCount((i) => i + 1)
                    }}>
                    count+1
                </Button>
            </div>
        </div>
    )
}
function Demo3(){
    const [count1, setCount1] = useState(2)
    const [count] = useStateShare(count1)

    return (
        <div>
            <h3>count:{count}</h3>
            <h3>count1:{count1}</h3>
            <div>
                <Button 
                    onClick={() => {
                        setCount1((i) => i + 1)
                    }}>
                    count1+1
                </Button>
            </div>
        </div>
    )
}
function Main(){
    return (
        <div>
            <Demo1/>
            <Demo2/>
            <Demo3/>
        </div>
    )
}
export default Main
