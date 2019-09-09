import React, { useContext } from 'react'
import { Button } from 'antd'
import { Store } from './use-store'

function Main(){
    const { state, dispatch } = useContext(Store)
    const { data = '' } = state
    return (
        <div>
            <div>数据是:{data}</div>
            <Button onClick={
                () => {
                    dispatch({
                        type: '',
                        payload: {
                            data: '点击了DemoA'
                        }
                    })
                }
            }>点击更改数据</Button>
        </div>
        
    )
}

export default Main
