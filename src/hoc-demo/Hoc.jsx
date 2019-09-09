import React from 'react'

function Hoc(Component){
    class HocComponent extends React.PureComponent {
        constructor(props) {
            super(props)
            this.state = {
                data: [12, 4, 512]
            }
        }

        render() {
            return <Component data={this.state.data} {...this.props} />
        }
    }
    const name = Component.displayName || Component.name

    HocComponent.displayName = `Hoc-${name}` || 'Hoc'
    return HocComponent
}


export default Hoc
