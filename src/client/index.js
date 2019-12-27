import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route, Link, BrowserRouter as Router, Switch
} from 'react-router-dom';
import App from './App';

import Users from './pages/Users';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users/2">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
