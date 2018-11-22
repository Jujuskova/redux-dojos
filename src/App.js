import React, { Component } from 'react';
import './App.css';
import User from './components/User';

import {Provider} from 'react-redux'; // englobe le component qui aura accès au store
import {createStore} from 'redux'; // fonction pour creer le store 
import authReducer from './reducers/auth_reducer'; 

const store = createStore(authReducer) // création du store - prend en argument un reducer (généralement le reducer qui combine  tout les reducers - attention on a le droit de créer qu'un seul store)

class App extends Component {
  render() {
    console.log(store.getState()) // getState permet de visualiser les states dans le store
    return (
      <Provider store={store}> {/** le provider prend en attribut le store */}
      <div className="App">
      <User />
      </div>
      </Provider>
    );
  }
}

export default App;
