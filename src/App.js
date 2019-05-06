import React from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';

import store from './store';

import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <PostForm/>
        <Posts/>
      </div>
    </Provider>
  );
}

export default App;
