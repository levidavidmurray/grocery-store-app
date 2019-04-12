import React, { Component } from "react";
import axios from 'axios';

import Item from './Item';

import './styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceryItems: []
    };
  }

  renderGroceryItem() {
    return this.state.groceryItems.map(item => {
      return (
        <Item key={item.sku} item={item} />
      );
    });
  }

  componentWillMount() {
    axios.get('http://localhost:4070/meat')
    .then(response => {
      console.log(response.data);
      this.setState({
        groceryItems: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="grocery-items">{ this.renderGroceryItem() }</div>
      </div>
    );
  }
}

export default App;