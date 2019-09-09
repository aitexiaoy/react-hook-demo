import React, { useRef } from 'react'
import { Button } from 'antd'
import Input from './input.jsx'

function Main() {
    const fancyInputRef = useRef()

    return (
        <div>
            <Input ref={fancyInputRef} />
            <Button 
                onClick={() => {
                    fancyInputRef.current.focus()
                }}>
                    获取焦点
            </Button>
            <Button 
                onClick={() => {
                    fancyInputRef.current.blur()
                }}>
                失去焦点
            </Button>
        </div>
    )
}

export default Main
