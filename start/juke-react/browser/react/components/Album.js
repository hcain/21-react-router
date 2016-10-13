'use strict';

import React from 'react';
import SongsContainer from '../containers/SongsContainer';


export default class Album extends React.Component {
  componentDidMount () {
    console.log(this.props)
    console.log('mounted', this.props.params.albumID)
    this.props.getTheAlbum(this.props.params.albumID)
    .then(res => res.json())
    .then(results => console.log(results));
    // const { onLoad } = this.props;

    // Promise
    //   .all([
    //     fetch('/api/albums/:albumid').then(res => res.json()),
    //   ])
    //   .then(results => onLoad(...results));
  }

  render(){
    const {selectedAlbum} = this.props;
    console.log('render', selectedAlbum)

    return (
          <div className="album">
            <div>
              <h3>{ selectedAlbum.name }</h3>
              <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
            </div>
            <SongsContainer songs={selectedAlbum.songs} />
          </div>
    )
  }
}


// export default ({ selectedAlbum }) => (
//   <div className="album">
//     <div>
//       <h3>{ selectedAlbum.name }</h3>
//       <img src={ selectedAlbum.imageUrl } className="img-thumbnail" />
//     </div>
//     <SongsContainer songs={selectedAlbum.songs} />
//   </div>
// );
