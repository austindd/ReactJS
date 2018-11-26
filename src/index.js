import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Comment from './components/Comment';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <Comment
        author={ {name: 'Austin', avatarUrl: 'https://avatars1.githubusercontent.com/u/44079572?s=460&v=4'} }
        text={"This is a cool library"}
    />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
