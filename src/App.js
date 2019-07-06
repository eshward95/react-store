import React from 'react';
import {Switch,Route}from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import ReactGA from 'react-ga';

import Modal from './components/Modal'
function App() {
//   const trackingId = "UA-143393466-1"; // Replace with your Google Analytics tracking ID
// ReactGA.initialize(trackingId);
// ReactGA.set({
//   userId: auth.currentUserId(),
//   // any data that is relevant to the user session
//   // that you would like to track with google analytics
// })
  return (

 <React.Fragment>
  <Navbar/>
  <Switch>
   <Route exact path="/" component={ProductList}></Route>
    <Route path="/details" component={Details}></Route>
    <Route path="/cart" component={Cart}></Route>
    <Route component={Default}></Route>
  </Switch>
    <Modal/>
 </React.Fragment>
  );
}

export default App;
