import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LandingPage } from "pages/LandingPage";
import 'assets/scss/style.scss';
import { DetailPage } from "pages/DetailPage";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailPage}></Route>
      </Router>
    </div>
  );
}

export default App;
