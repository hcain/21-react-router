'use strict';

import React from 'react';
import { Link, hashHistory } from 'react-router'

export default (props) => (
  <div className="col-md-3">
    <sidebar>
      <ul>
        <li><Link to="/news-feed">News Feed</Link></li>
        <li><Link to="/friends">Friends</Link></li>
        <li><a onClick={() => {
          hashHistory.push('/news-feed')
        }}>Also news feed</a></li>
      </ul>
    </sidebar>
  </div>
);