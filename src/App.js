import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './components/Navbar';

import Features from './components/pages/Features/Features';
import About from './components/pages/About/About';
import Roadmap from './components/pages/Roadmap/Roadmap';
import Pricing from './components/pages/Pricing/Pricing';
import Signup from './components/pages/signup/Signup'
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';




function App() {
  return (
    <Router>
     <Navbar/>
     
     <Switch>
     <Route  exact path ='/'  component = {Features}/>
     <Route path ='/About' component = {About}/>
     <Route path ='/Roadmap' component = {Roadmap}/>
     <Route path = '/Pricing' component = {Pricing}/>
     <Route path = '/Signup' component = {Signup}/>
     </Switch>
    
    </Router>
  );
}

export default App;
