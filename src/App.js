import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from "pages/LandingPage";
import DetailPage from "pages/DetailPage";
import Checkout from "pages/Checkout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailPage}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
