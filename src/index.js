import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router}from 'react-router-dom';
import {ProductProvider} from './context'
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';


const trackingId = "UA-1234567890-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
ReactDOM.render(
    <ProductProvider>
        <Router history={history}>
            <App />
        </Router>
    </ProductProvider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
