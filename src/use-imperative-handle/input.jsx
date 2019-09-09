import React, { useImperativeHandle, useRef, forwardRef } from 'react'

function Input(props, ref) {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        },
        blur: () => {
            inputRef.current.blur()
        }
    }))
    return <input ref={inputRef}/>
}

export default forwardRef(Input)
