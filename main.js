import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.jsx';
import Login from './Login.jsx';
import History from './History.jsx';

/*
const History = () => (
  <div>
    <h2>Home</h2>
  </div>
)
*/

ReactDOM.render((
   <Router>
        <div>
            <Route exact path = "/" component = {Login}/>
            <Route path="/app" component={App}/>
            <Route path="/history" component={History}/>
        </div>
   </Router>
    
), document.getElementById('login'))

