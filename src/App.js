import React from 'react'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Landing from './components/Landing'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <div>
            <Switch>
               <Route exact path="/">
                  <Landing />
               </Route>
               <Route path="/gallery">
                  <Gallery />
               </Route>
               <Route path="/contact">
                  <Contact />
               </Route>
            </Switch>          
        </div>

      </Router>

  )
}

export default App
