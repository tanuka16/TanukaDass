import React from 'react';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import {Switch, Route} from 'react-router-dom'

const Main = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route  path="/AboutMe" component={AboutMe} />
    <Route  path="/Contact" component={Contact} />
    <Route  path="/Projects" component={Projects} />
    <Route  path="/Resume" component={Resume} />
  </Switch>
)

export default Main
