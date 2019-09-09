import React, { useState } from 'react'
import { Button } from 'antd'

function Main(){
    const [name, setName] = useState('张三')
    console.log('================================重新渲染了：', name)
    return (
        <div className="use-state">
            <h3>{name}</h3>
            <div>
                <Button 
                    onClick={() => {
                        console.log('================================11：', name)
                        setName(name === '张三' ? '李四' : '张三')
                        console.log('================================22：', name)
                    }}>
                    更改名字
                </Button>
            </div>
        </div>
    )
}
export default Main
