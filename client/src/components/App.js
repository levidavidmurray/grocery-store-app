import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Category from '../views/Category';

import './styles/App.scss';

const pathCategories = ['bakery', 'deli', 'meat', 'dairy', 'pasta', 'produce'];

class App extends Component {

  createCategoryPaths() {
    return pathCategories.map(category => {
      let path = `/${category}`;
      return <Route path={path} render={() => <Category name={category} />} />
    });
  }

  render() {
    return (
      <Router>
        { this.createCategoryPaths() }
      </Router>
    );
  }
}

export default App;