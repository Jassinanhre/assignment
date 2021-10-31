import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

import Features from './components/pages/Features/Features';

import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';




function App() {
  return (
    <Router>
     <Navbar/>
     
     <Switch>
     <Route path='/' exact component={Features}/>
    
     </Switch>
    
    </Router>
  );
}

export default App;
