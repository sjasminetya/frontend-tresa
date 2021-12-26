import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import pages from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={pages.LandingPage}></Route>
        <Route path="/properties/:id" component={pages.DetailPage}></Route>
        <Route path="/checkout" component={pages.Checkout}></Route>
        <Route component={pages.PageNotFound} />
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
