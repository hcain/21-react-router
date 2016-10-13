'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';
import {Link} from 'react-router';


export default class Artist extends React.Component {
  componentDidMount () {
    console.log(this.props)
    console.log('mounted', this.props.params.artistID)
    this.props.getTheArtist(this.props.params.artistID)
    .then(res => res.json())
    .then(results => console.log(results));
  }

  render(){
    const {selectedArtist} = this.props;
    console.log(selectedArtist)

    return(
      <div>
      <h3>{ selectedArtist.name }</h3>
      <h3>Albums</h3>
      <div className="row">
        {
          selectedArtist.albums.map(album => (
            <div className="col-xs-4" key={album.id}>
            <Link className="thumbnail" to={`/albums/${album.id}`}>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <SongsContainer songs={selectedArtist.songs} />
    </div>
    )
  }
}
