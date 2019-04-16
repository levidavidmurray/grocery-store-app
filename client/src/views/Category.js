import React, { Component } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import Item from '../components/Item';

const categoryIconMap = {
  bakery: 'bread-slice',
  deli: 'cheese',
  meat: 'drumstick-bite',
  dairy: 'egg',
  pasta: 'pizza-slice',
  produce: 'apple-alt'
};

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
        <Item key={item.sku} item={item} categoryIcon={categoryIconMap[this.props.name]} />
      );
    });
  }

  renderLoader() {
    return (
      <div>Loading...</div>
    );
  }

  componentWillMount() {
    this.props.setActiveTab(this.props.name);

    axios.get(`http://localhost:4070/${this.props.name}`)
    .then(response => {
      this.setState({
        groceryItems: response.data
      });
    });
  }

  render() {
    let isLoading = this.renderLoader();
    if (this.state.groceryItems.length > 0) {
      isLoading = undefined;
    }

    return (
      <div className="category">
        { isLoading }
        <div className="filter"></div>
        <div className="grocery-items">{ this.renderGroceryItem() }</div>      
      </div>
    );
  }
}

export default withRouter(Category);