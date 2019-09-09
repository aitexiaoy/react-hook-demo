import React from 'react'
import PropTypes from 'prop-types'
import Hoc from './Hoc.jsx'

class HocDemo extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            name: 'hoc-demo',
        }
    }

    render() {
        const { name } = this.state
        const { data } = this.props
        return (<div className="hoc-dome">
            <h5>{name}</h5>
            {data.map((item) => <div key={item}>{item}</div>)}</div>)
    }
}
HocDemo.defaultProps = {
    data: []
}

HocDemo.propTypes = {
    data: PropTypes.array
}


export default Hoc(HocDemo)
