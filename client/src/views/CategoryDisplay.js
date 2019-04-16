import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Category from './Category';

import './CategoryDisplay.scss';

class CategoryDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryPaths: this.createCategoryPaths(),
      activeTab: this.props.pathCategories[0]
    }
  }

  setActiveTab(selectedTab) {
    this.setState({
      activeTab: selectedTab
    });
  }

  createCategoryPaths() {
    return this.props.pathCategories.map(category => {
      let path = `/${category}`;
      return <Route key={category} path={path} render={() => <Category name={category} setActiveTab={(selectedTab) => this.setActiveTab(selectedTab)} />} />
    });
  }

  render() {
    return (
      <Router>
        <div className="category-display">
          <NavBar 
            pathCategories={this.props.pathCategories} 
            activeTab={this.state.activeTab} 
            setActiveTab={(selectedTab) => this.setActiveTab(selectedTab)}
          />
          {this.state.categoryPaths}
        </div>
      </Router>
    );
  }
}

export default CategoryDisplay;