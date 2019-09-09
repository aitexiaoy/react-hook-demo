import { createContext } from 'react'

export function reducer(state, action) {
    const { payload } = action
    return {
        ...state,
        ...payload
    }
}

// 创建一个context
export const Store = createContext(null)
// 作为全局state
export const initState = {
    data: '默认值',
    c: ''
}
