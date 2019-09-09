import React, { useContext, useMemo } from 'react'
import { Store } from './use-store'

function Main(){
    const { state, dispatch } = useContext(Store)
    return useMemo(
        () => {
            console.log('我是C，我也渲染了,输出c的值::', state.c)
            return (
                <div>
                    我是C
                </div>
            )
        },
        [state.c, dispatch]
    )
}

export default Main
