import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    let element = <h1>Welcome to React</h1>
    return (
      <div>
        {element}
        <Comment
          author={{ name: 'Austin', avatarUrl: 'https://avatars1.githubusercontent.com/u/44079572?s=460&v=4' }}
          text={"This is a cool library"}
        />
      </div>
    );
  }
}


export default App;
