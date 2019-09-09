
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './scss/index.scss'

const Message = ({ boxRef, children }) => {
    const msgRef = useRef(null)
    useEffect(() => {
        console.log('================================', boxRef.current)
        const rect = boxRef.current.getBoundingClientRect() // 获取尺寸
        msgRef.current.style.top = `${rect.height + rect.top}px` // 放到盒子下方
    }, [boxRef])

    return (
        <span ref={msgRef} className="msgA">
            {children}
        </span>
    )
}
Message.propTypes = {
    boxRef: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
}

const MessageForLayout = ({ boxRef, children }) => {
    const msgRef = useRef(null)
    useLayoutEffect(() => {
        console.log('================================Demo1::userLayoutEffect')
        const rect = boxRef.current.getBoundingClientRect() // 获取尺寸
        msgRef.current.style.top = `${rect.height + rect.top}px` // 放到盒子下方
    }, [boxRef])

    // useEffect(() => {
    //     console.log('================================Demo1::userEffect')
    //     const rect = boxRef.current.getBoundingClientRect() // 获取尺寸
    //     msgRef.current.style.top = `${rect.height + rect.top + 200}px` // 放到盒子下方
    // }, [boxRef])

    return (
        <span ref={msgRef} className="msgB">
            {children}
        </span>
    )
}

MessageForLayout.propTypes = {
    boxRef: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
}

const App = () => {
    const [show, setShow] = useState(false)
    const [showCopy, setShowCopy] = useState(false)
    const boxRefA = useRef(null)
    const boxRefB = useRef(null)

    return (
        <div>
            <div className="demoWrap">
                <div
                    ref={boxRefA}
                    className="box"
                    onClick={() => setShow((prev) => !prev)}
                >
                    Click me A
                </div>
                <hr />
                {show && <Message boxRef={boxRefA}>useEffect</Message>}
            </div>

            <div className="demoWrap">
                <div
                    ref={boxRefB}
                    className="box"
                    onClick={() => setShowCopy((prev) => !prev)}
                >
                    Click me B
                </div>
                <hr />
                {showCopy && (
                    <MessageForLayout boxRef={boxRefB}>useLayoutEffect</MessageForLayout>
                )}
            </div>
        </div>
    )
}


export default App
