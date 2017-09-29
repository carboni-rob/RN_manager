import React, {Component} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD0Xg_ebmyehK0Yz7XNdw0GB-oRi0DrW2A',
      authDomain: 'manager-14b31.firebaseapp.com',
      databaseURL: 'https://manager-14b31.firebaseio.com',
      projectId: 'manager-14b31',
      storageBucket: 'manager-14b31.appspot.com',
      messagingSenderId: '37559006914'
    };

  firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;