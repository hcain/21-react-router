'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute, Link } from 'react-router';
import AppContainer from './containers/AppContainer';
import AlbumsContainer from './containers/AlbumsContainer';
import ArtistsContainer from './containers/ArtistsContainer';
import ArtistContainer from './containers/ArtistContainer';
import AlbumContainer from './containers/AlbumContainer';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer} >
        <IndexRoute component={AlbumsContainer} />
        <Route path="/albums" component={AlbumsContainer} />
        <Route path="albums/:albumID" component={AlbumContainer} />
        <Route path="/artists" component={ArtistsContainer} />
        <Route path="artists/:artistID" component={ArtistContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
