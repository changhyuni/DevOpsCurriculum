import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
        fetch('http://knowre-cloudfront-elb-60923550.ap-northeast-2.elb.amazonaws.com/api')
            .then(res=>res.json())
            .then(data=>this.setState({username:data.username}));
    }
    
    render(){
    	// ...
    }

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

  render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
          </header>
        </div>
    );
    ;
  }
}

export default App;