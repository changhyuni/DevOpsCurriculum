import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username:null,
        num: 0
    };
}


shoot() {
  let result = document.getElementById('result');
  result.innerText = "Good job";
}
    componentDidMount() {
      fetch('https://p08w7e4ogj.execute-api.ap-northeast-2.amazonaws.com/dev/api')
      .then(res=>res.json())
      .then(data=>this.setState({username:data.username}));
  }

  render() {
    const {username} = this.state;
    const myelement = (
      <button onClick={this.shoot}>testing!</button>
    );
    return (
      <div className="App">
        <header className="App-header">
          <p>{username ? `Hello ${username}` : 'Hello World'}</p>
          <button id='button' className='button' onClick={()=> 
          {this.setState((state)=>{
            return {num: state.num+1}
          })}
        }
          >Do you want testing?</button>
          <div id="result"></div>
        </header>
      </div>
    ) ;
    };
 
 }

export default App;
