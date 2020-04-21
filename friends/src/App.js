import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
        <div className="App">
          <header className="App-header">
          <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/friends">Friend's List</Link>
              </li>
            </ul>
          </header>

          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsList}/>
            <Route path="/login" component={Login}/>
            <Route component={Login}/>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
