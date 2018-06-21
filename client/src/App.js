import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/nav_bar';
import RegisterForm from './components/register_form';
import LoginForm from './components/login_form';
import HomeJumbotron from './components/home_jumbotron';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';
import UserList from './components/user_list';

/**
 * This variable is never used and should probably be removed (along with all the deps that are used for it).
 */
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


class App extends React.Component {

render() {
  return (
      <div>
        <Route path="/" component={NavigationBar} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route exact path="/" component={HomeJumbotron} />
        <Route path="/users" component={UserList} />
      </div>
    );
  };
};

export default App;