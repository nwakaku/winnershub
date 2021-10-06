import React from 'react'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Landing from './components/Landing'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import StudioPage from './components/StudioPage';
import CartPage from './components/CartPage';

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
               <Route path="/product">
                  <ProductPage/>
               </Route>
               <Route path="/studio">
                  <StudioPage/>
               </Route>
               <Route path="/cart">
                  <CartPage/>
               </Route>
            </Switch>          
        </div>

      </Router>

  )
}

export default App
