import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './containers/HomePage';
import ItemPage from './containers/ItemPage';
import CartPage from './containers/CartPage';

import './App.scss';

function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/item" exact component={ItemPage} />
      <Route path="/cart" exact component={CartPage} />
    </Router>
  );
}

export default App;
