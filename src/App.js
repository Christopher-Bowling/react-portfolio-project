import React from 'react';
import Home from './components/pages/home/Home';
import OnlineCourses from './components/pages/OnlineCourses';
import Coaching from './components/pages/Coaching';
import Blog from './components/pages/Blog';
import AboutMe from './components/pages/AboutMe';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/online-courses' component={OnlineCourses} />
            <Route exact path='/coaching' component={Coaching} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/about-me' component={AboutMe} />
            <Redirect to='/home' />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
