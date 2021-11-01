import React from 'react'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Landing from './components/Landing'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import StudioPage from './components/StudioPage';
import CartPage from './components/CartPage';
import Signup from './utils/authentication/Signup';
import Login from './utils/authentication/Login';
import Profile from './utils/Profile/Profile';
import Checkout from './components/Checkout';
import Index from './components/Admin/Index';

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
               <Route path="/signup">
                  <Signup/>
               </Route>
               <Route path="/login">
                  <Login/>
               </Route>
               <Route path="/profile">
                  <Profile/>
               </Route>
               <Route path="/checkout">
                  <Checkout/>
               </Route>
               <Route path="/admin">
                  <Index/>
               </Route>
            </Switch>          
        </div>

      </Router>

  )
}

export default App
