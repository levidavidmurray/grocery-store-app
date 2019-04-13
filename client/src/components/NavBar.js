import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navBar: this.createCategoryNavBar()
    };
  }

  createCategoryNavBar() {
    return this.props.pathCategories.map(category => {
      let activeClass = this.props.activeTab === category ? 'active' : ''
      let path = `/${category}`;
      return (
        <Link 
          key={category} 
          to={path} 
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