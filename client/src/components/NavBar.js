import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBar: this.createCategoryNavBar()
    };
  }

  calculateTabStyle(index) {
    console.log(index);
    let left = (index * 20);
    let zIndex = 1;

    left = `-${left}px`;
    zIndex += this.props.pathCategories.length - index;

    return { zIndex, left };
  }

  createCategoryNavBar() {
    return this.props.pathCategories.map((category, index) => {
      let activeClass = this.props.activeTab === category ? 'active' : ''
      let path = `/${category}`;
      return (
        <Link 
          key={category} 
          to={path}
          style={this.calculateTabStyle(index)}
          className={`link ${activeClass}`}
          onClick={() => this.props.setActiveTab(category)}
        >
          { category }
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="navbar">
        { this.createCategoryNavBar() }
      </div>
    );
  }
}

export default NavBar;