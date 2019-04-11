import React, { Component } from "react";
import axios from 'axios';

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
        <div key={item.sku}>{ item.name }</div>
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
      <div>{ this.renderGroceryItem() }</div>
    );
  }
}

export default App;