import React, { Component } from "react";
import axios from 'axios';

import Item from '../components/Item';

class Category extends Component {
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
    axios.get(`http://localhost:4070/${this.props.name}`)
    .then(response => {
      this.setState({
        groceryItems: response.data
      });
    });
  }

  render() {
    return (
      <div className="category">
        <div className="grocery-items">{ this.renderGroceryItem() }</div>      
      </div>
    );
  }
}

export default Category;