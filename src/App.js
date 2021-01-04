import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Home from './Components/Home';
import './App.css';
function App() {
  return (
  
      <Router>
      <h1 className="app_titre">Profile</h1>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route  path="/profile/:id" component={Profile} />
        
       </Switch>
     </Router>
  );
}

export default App;
