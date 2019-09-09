import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData().then((data = []) => {
            this.setState({
                data
            })
        })
    }

  getData=() => Promise.resolve([]) 

  render() {
      const { data } = this.state
      return (
          <div>
              <p>显示请求结果</p>
              {
                  data.map((i) => (<span key={i}>{i}</span>))
              }
          </div>
      )
  }
}

export default App
