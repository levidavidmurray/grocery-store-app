import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Category from '../views/Category';

import './styles/App.scss';

const pathCategories = ['bakery', 'deli', 'meat', 'dairy', 'pasta', 'produce'];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navbar: this.createCategoryNavBar(),
      categoryPaths: this.createCategoryPaths()
    }
  }
  
  createCategoryNavBar() {
    return pathCategories.map(category => {
      let path = `/${category}`;
      return (
        <div key={category} className="link">
          <Link to={path}>{ category }</Link>
        </div>
      );
    });
  }

  createCategoryPaths() {
    return pathCategories.map(category => {
      let path = `/${category}`;
      return <Route key={category} path={path} render={() => <Category name={category} />} />
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div className="navbar">
            { this.state.navbar }
          </div>
          { this.state.categoryPaths }
        </Router>
      </div>
    );
  }
}

export default App;