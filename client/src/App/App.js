import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    this.getUrl()
  }

  getUrl = () => {
    const url = '/test' || 'http://localhost:5000/test'

    console.log('a to url', url)
    fetch(url)
    .then(res => res.json())
    .then(list => this.setState({list}))
  }

  render() {
    const { list } = this.state; 

    console.log(this.state, 'state')
    return(
      <div>
        asdasdsdasdsd
        {list.length ? (
          list.map(list => <div>{list}</div>)
        ) :
        <div>loading...</div>
        }
      </div>
    )
  }
}

export default App;
