'use strict';

import React from 'react';
import {Link} from 'react-router'
;
export default ({location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <div>
      <Link className={location.match('album') ? 'menu-item active' : 'menu-item' } to="/albums">Albums</Link>
    </div>
    <div>
      <Link className={location.match('artist') ? 'menu-item active' : 'menu-item' } to="/artists">Artists</Link>
    </div>
  </sidebar>
);
