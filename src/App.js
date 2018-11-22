import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import authReducer from './reducers/auth_reducer';
import User from './components/User';

const store = createStore(authReducer)

class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
      <div className="App">
      <User />
      </div>
      </Provider>
    );
  }
}

export default App;
