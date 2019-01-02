import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyATxT3pd43cSUoUMLOUA4LlYlUK-n9QADw',
      authDomain: 'manager-6ea03.firebaseapp.com',
      databaseURL: 'https://manager-6ea03.firebaseio.com',
      projectId: 'manager-6ea03',
      storageBucket: 'manager-6ea03.appspot.com',
      messagingSenderId: '163303618872',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
//the empty {} is for initial state, the last argument is a store enhancer
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
