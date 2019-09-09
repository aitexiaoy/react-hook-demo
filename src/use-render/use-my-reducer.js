import { useState } from 'react'

function useMyReducer(reducer, initialState, init) {
    const compatible = init ? init(initialState) : initialState
    const [state, setState] = useState(compatible)
    function dispatch(action) {
        const nextState = reducer(state, action)
        setState(nextState)
    }
  
    return [state, dispatch]
}

export default useMyReducer
