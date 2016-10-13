'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import NewsFeedContainer from './NewsFeedContainer';
import FriendsContainer from './FriendsContainer';
import Sidebar from './Sidebar';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

const Favorites = (props) => {
  return (
    <div>
      <h1>My Favorite news stories...</h1>
    </div>
  )
}

class BaseRoute extends React.Component {

  render () {
    console.log(this.props.children)
    return (
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
          { this.props.children }
          </div>
        </div>
      </div>
    );
  }


}

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={BaseRoute}>
        <Route path="/friends" component={FriendsContainer} />
        <Route path="/news-feed" component={NewsFeedContainer}>
          <Route path="/news-feed/favorites" component={Favorites} />
        </Route>
        <IndexRoute component={FriendsContainer} />
      </Route>
    </Router>
  </Provider>, 
  document.getElementById('app')
);