import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import Member from './components/member'
import Book from './components/book'
import NotFound from './components/notfound';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/member">Member</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/book">Book</NavLink>
          </li>
        </ul>
        <Switch>
        <Route exact path="/" component={App} />
        <Route path="/member" component={Member} />
        <Route path="/book" component={Book} />
        <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
