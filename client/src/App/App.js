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
    console.log('helow')
    this.getUrl()
  }

  getUrl = () => {
    const url = process.env.NODE_ENV == 'production' ? '/api' : `http://localhost:${process.env.PORT || 5000}/api`
    console.log('proces senv ', process.env.NODE_ENV)
    console.log(url)
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
          list.map(list => <div>{list.title}</div>)
        ) :
        <div>loading...</div>
        }
      </div>
    )
  }
}

export default App;
