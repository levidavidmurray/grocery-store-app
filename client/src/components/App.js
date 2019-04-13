import React, { Component } from "react";

import CategoryDisplay from '../views/CategoryDisplay';

import './styles/App.scss';

const pathCategories = ['bakery', 'deli', 'meat', 'dairy', 'pasta', 'produce'];

class App extends Component {

  render() {
    return (
      <div>
        <h1>Murray Grocery</h1>
        <CategoryDisplay pathCategories={pathCategories} />
      </div>
    );
  }
}

export default App;