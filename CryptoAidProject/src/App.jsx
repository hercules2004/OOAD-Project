// src/App.js
import React from 'react';
import Homepage from './homepage';
import ProfilePage from './profilepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
    </Router>
  );
  
}

export default App;
