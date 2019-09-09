import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

import './scss/index.scss'


function Main({ models = {} }){
    const defaultKey = Object.keys(models)[0]
    const [current, setCurrent] = useState(defaultKey)
    const [demos] = useState(models)
   
    const changePage = (page) => {
        setCurrent(page)
    }
    return (
        <div className="page-content">
            {
                Object.keys(demos).map((key) => (
                    <Button
                        className="button"
                        type={current === key ? 'primary' : ''}
                        key={key}
                        onClick={() => { changePage(key) }}>
                        {key}
                    </Button>
                ))
            }
            <div className='content'>
                {
                    demos[current]
                }
            </div>
        </div>
    )
}

Main.propTypes = {
    models: PropTypes.object.isRequired 
}
export default Main
