import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Austin'
    }
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  }

  render() {
    let welcome = <h1>Welcome to React</h1>
    return (
      <div>
        {welcome}

        <input
          placeholder="What's your name?"
          value={this.state.name}
          onChange={(event) => { this.handleInputChange(event.target.value) }}
        />

        <Comment
          author={{ name: this.state.name, avatarUrl: 'https://avatars1.githubusercontent.com/u/44079572?s=460&v=4' }}
          text={"This is a cool JS library"}
        />
      </div>
    );
  }
}


export default App;
