import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import App from './App';


import reducers from './reducers';

/**
 * Those vars are not used here and should be removed
 */
import NavigationBar from './components/nav_bar';
import RegisterForm from './components/register_form';
import LoginForm from './components/login_form';
import HomeJumbotron from './components/home_jumbotron';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
), document.querySelector('.root'));